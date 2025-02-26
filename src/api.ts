import { QuestionType } from "./pages/QuizPage";

type APIQuestion = {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
};

async function fetchAPIQuestions(): Promise<QuestionType[]> {
  const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    // Omvandla API-svaret till rätt format
    return json.results.map((q: APIQuestion) => ({
      question: q.question,
      answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
      correctAnswer: q.correct_answer,
    }));

  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching questions:", error.message);
    } else {
      console.error("An unknown error occurred.");
    }
    return [];
  }
}

// ✅ Ny funktion för att hantera retries
export async function fetchQuestions(retryCount = 3, delay = 3000): Promise<QuestionType[]> {
  for (let i = 0; i < retryCount; i++) {
    const questions = await fetchAPIQuestions();
    if (questions.length > 0) {
      return questions;
    }

    console.warn(`Too many requests. Retrying in ${delay / 1000} seconds...`);
    await new Promise((resolve) => setTimeout(resolve, delay));
    delay *= 2;
  }

  return [];
}
