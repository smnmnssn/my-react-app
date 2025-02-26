import { QuestionType } from "./pages/QuizPage";

type APIQuestion = {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
};

let lastRequestTime = 0; // 🔥 Håller koll på senaste anropet

function decodeHTMLEntities(text: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}


export async function fetchQuestions(): Promise<QuestionType[]> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < 5000 && lastRequestTime !== 0) {
    console.warn(`⚠️ Rate limit! Waiting ${5000 - timeSinceLastRequest} ms before next request.`);
    await new Promise((resolve) => setTimeout(resolve, 5000 - timeSinceLastRequest));
  }

  lastRequestTime = Date.now(); // 🔥 Uppdatera senaste anropstiden


  const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
  try {
    console.log("Fetching questions...");
    const response = await fetch(url);

    if (response.status === 429) {
      console.warn("🚨 Too Many Requests - API rate limit reached.");
      return []; // 🔥 Returnera en tom array istället för att göra fler requests
    }

    const json = await response.json();
    return json.results.map((q: APIQuestion) => ({
      question: decodeHTMLEntities(q.question), // 🔥 Avkoda HTML
      answers: [...q.incorrect_answers, q.correct_answer]
        .map(decodeHTMLEntities) // 🔥 Avkoda svaren också
        .sort(() => Math.random() - 0.5),
      correctAnswer: decodeHTMLEntities(q.correct_answer), // 🔥 Avkoda rätt svar
    }));

  } catch (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
}
