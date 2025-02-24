import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Updated Score:", score);
  }, [score]); // 🔥 Körs varje gång `score` ändras

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    console.log("User selected:", answer); // test
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;

        // Om det är sista frågan, navigera till ResultPage med rätt poäng
        if (currentQuestionIndex === questions.length - 1) {
          navigate("/resultpage", {
            state: { score: newScore, totalQuestions: questions.length },
          });
        }

        return newScore;
      });
    }

    if (currentQuestionIndex < questions.length - 1) {
      console.log(
        "Next question! Current index before update:",
        currentQuestionIndex
      );
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.log("Quiz done! Final score:", score);
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
