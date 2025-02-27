import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchQuestions } from "../api";
import QuestionAnswerBox from "../Components/Question/QuestionAnswerBox";
import QuestionNumber from "../Components/Question/QuestionNumber";
import QuestionTextBox from "../Components/Question/QuestionTextBox";

export type QuestionType = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [fetchedQuestion, setFetchedQuestion] = useState<QuestionType[] | null>(
    null
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const [showFeedback, setShowFeedback] = useState(false); // Controls visibility of correct/incorrect feedback

  // Log score updates for debugging
  useEffect(() => {
    console.log("Updated Score:", score);
  }, [score]); // Runs whenever `score` changes

  useEffect(() => {
    if (fetchedQuestion) return; // Prevents redundant API calls if questions are already loaded

    const getQuestions = async () => {
      console.log("Fetching questions...");
      const data = await fetchQuestions(); // Fetches questions from the API
      setFetchedQuestion(data);
    };

    getQuestions();
  }, []); // Runs only once when the component mounts

  // Ensure the component doesn't render before questions are loaded
  if (!fetchedQuestion) {
    return <p>Loading questions...</p>;
  }

  // Handle the case where the API returns an empty list of questions
  if (fetchedQuestion.length === 0) {
    return <p>No questions could be retrieved.</p>;
  }

  // Retrieve the current question
  const currentQuestion = fetchedQuestion[currentQuestionIndex];

  // Prevent rendering if the current question is undefined
  if (!currentQuestion) {
    return <p>Error: No question found.</p>;
  }

  // Handle answer selection by updating the selected answer state
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    console.log("User selected:", answer);
  };

  // Handle transition to the next question
  const handleNextQuestion = () => {
    if (!selectedAnswer) return; // Prevents proceeding if no answer is selected

    const isCorrect =
      selectedAnswer === fetchedQuestion?.[currentQuestionIndex].correctAnswer;

    setShowFeedback(true); // Show feedback for the selected answer

    setScore((prevScore) => prevScore + (isCorrect ? 1 : 0)); // Update score based on correctness

    setTimeout(() => {
      setShowFeedback(false); // Hide feedback after 1 second

      // Check if the quiz is finished
      if (currentQuestionIndex === fetchedQuestion!.length - 1) {
        navigate("/resultpage", {
          state: {
            score: score + (isCorrect ? 1 : 0), // Potential issue: `score` may still hold its previous value
            totalQuestions: fetchedQuestion!.length,
          },
        });
      } else {
        // Move to the next question and reset the selected answer
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      }
    }, 1000); // Delay transition to the next question by 1 second
  };

  return (
    <div className="flex flex-col items-center pt-30">
      {/* Displays the question number */}
      <QuestionNumber
        currentIndex={currentQuestionIndex}
        totalQuestions={fetchedQuestion.length}
      />

      {/* Displays the question text */}
      <QuestionTextBox question={currentQuestion.question} />

      {/* Renders answer options and handles selection */}
      <QuestionAnswerBox
        answers={currentQuestion.answers}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNextQuestion}
        selectedAnswer={selectedAnswer}
        correctAnswer={fetchedQuestion[currentQuestionIndex].correctAnswer}
        showFeedback={showFeedback}
      />
    </div>
  );
}
