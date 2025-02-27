import { QuestionType } from "./pages/QuizPage";

type APIQuestion = {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
};

let lastRequestTime = 0; // Tracks the last API request time to prevent excessive requests

/**
 * Decodes HTML entities in a string (e.g., converts "&quot;" to `"`)
 * @param text - The string containing HTML entities
 * @returns The decoded string
 */
function decodeHTMLEntities(text: string): string {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

/**
 * Fetches quiz questions from the Open Trivia Database API.
 * Implements rate limiting to prevent excessive API requests.
 * 
 * @returns A promise resolving to an array of formatted quiz questions.
 */
export async function fetchQuestions(): Promise<QuestionType[]> {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  // Enforce a 5-second rate limit between API requests
  if (timeSinceLastRequest < 5000 && lastRequestTime !== 0) {
    console.warn(`Rate limit! Waiting ${5000 - timeSinceLastRequest} ms before next request.`);
    await new Promise((resolve) => setTimeout(resolve, 5000 - timeSinceLastRequest));
  }

  lastRequestTime = Date.now(); // Update last request timestamp

  const url = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

  try {
    console.log("Fetching questions...");
    const response = await fetch(url);

    // Handle API rate limits
    if (response.status === 429) {
      console.warn("Too Many Requests - API rate limit reached.");
      return []; // Return an empty array instead of making additional requests
    }

    const json = await response.json();

    // Transform API response into the required format
    return json.results.map((q: APIQuestion) => ({
      question: decodeHTMLEntities(q.question), // Decode the question text
      answers: [...q.incorrect_answers, q.correct_answer]
        .map(decodeHTMLEntities) // Decode all answers
        .sort(() => Math.random() - 0.5), // Shuffle the answer order
      correctAnswer: decodeHTMLEntities(q.correct_answer), // Decode the correct answer
    }));

  } catch (error) {
    console.error("Error fetching questions:", error);
    return []; // Return an empty array in case of failure
  }
}
