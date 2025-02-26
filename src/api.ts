import { QuestionType } from "./pages/QuizPage";

type APIQuestion = {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
};

let sessionToken: string | null = null;
let lastRequestTime = 0; // 🔥 Håller koll på senaste anropet

// Funktion för att hämta en ny sessionstoken
async function fetchSessionToken(): Promise<string | null> {
  try {
    const response = await fetch("https://opentdb.com/api_token.php?command=request");
    const data = await response.json();
    return data.token || null;
  } catch (error) {
    console.error("Error fetching session token:", error);
    return null;
  }
}

export async function fetchQuestions(): Promise<QuestionType[]> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < 5000 && lastRequestTime !== 0) {
    console.warn(`⚠️ Rate limit! Waiting ${5000 - timeSinceLastRequest} ms before next request.`);
    await new Promise((resolve) => setTimeout(resolve, 5000 - timeSinceLastRequest));
  }

  lastRequestTime = Date.now(); // 🔥 Uppdatera senaste anropstiden

  if (!sessionToken) {
    sessionToken = await fetchSessionToken(); // 🔥 Hämta token om vi inte har en
  }

  const url = `https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple&token=${sessionToken}`;

  try {
    console.log("Fetching questions...");
    const response = await fetch(url);

    if (response.status === 429) {
      console.warn("🚨 Too Many Requests - API rate limit reached.");
      return []; // 🔥 Returnera en tom array istället för att göra fler requests
    }

    const json = await response.json();

    if (json.response_code === 4) {
      console.warn("Session Token Empty - Fetching new token...");
      sessionToken = await fetchSessionToken();
      return fetchQuestions(); // 🔥 Försök igen med ny token
    }

    return json.results.map((q: APIQuestion) => ({
      question: q.question,
      answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
      correctAnswer: q.correct_answer,
    }));

  } catch (error) {
    console.error("❌ Error fetching questions:", error);
    return [];
  }
}

