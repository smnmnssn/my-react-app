import { useState } from "react";
import QuestionAnswerBox from "../Components/Question/QuestionAnswerBox";
import QuestionNumber from "../Components/Question/QuestionNumber";
import QuestionTextBox from "../Components/Question/QuestionTextBox";

const questions = [
  {
    text: "What is the capital of France?",
    answers: ["Berlin", "Paris", "Madrid"],
    correct: "Paris",
  },
  {
    text: "Who developed JavaScript?",
    answers: ["Brendan Eich", "Linus Torvalds", "Elon Musk"],
    correct: "Brendan Eich",
  },
];

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      setScore((score) => score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.log("Quiz done, send user to ResultPage");
    }
  };

  return (
    <div className="flex flex-col items-center pt-30">
      <QuestionNumber />
      <QuestionTextBox question={questions[currentQuestionIndex].text} />
      <QuestionAnswerBox
        answers={questions[currentQuestionIndex].answers}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNextQuestion}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}
