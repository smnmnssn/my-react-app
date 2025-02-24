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
  {
    text: "Who developed JavaScript?",
    answers: ["B", "LX", "Elon X"],
    correct: "Brendan Eich",
  },
  {
    text: "Who developed JavaScript?",
    answers: ["dwaDAWD", "Ldd", "dwdaw"],
    correct: "Brendan Eich",
  },
  {
    text: "Who developed JavaScript?",
    answers: ["vxc", "dwdw", "waassssk"],
    correct: "Brendan Eich",
  },
  {
    text: "Who developed JavaScript?",
    answers: ["Brendan Eich", "Linus Torvalds", "Elon Musk"],
    correct: "Brendan Eich",
  },
  {
    text: "Who developed JavaScript?",
    answers: ["Brendan Eich", "Linus Torvalds", "Elon Musk"],
    correct: "Brendan Eich",
  },
  {
    text: "Who developed JavaScript?",
    answers: ["Brendan Eich", "Linus Torvalds", "Elon Musk"],
    correct: "Brendan Eich",
  },
  {
    text: "Who developed JavaScript?",
    answers: ["Brendan Eich", "Linus Torvalds", "Elon Musk"],
    correct: "Brendan Eich",
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
    if (!selectedAnswer) {
      console.log("No answer selected!"); // Förhindrar att gå vidare utan svar
      return;
    }

    setScore((prevScore) => {
      const newScore =
        selectedAnswer === questions[currentQuestionIndex].correct
          ? prevScore + 1
          : prevScore;

      if (currentQuestionIndex === questions.length - 1) {
        console.log("Navigating to ResultPage with score:", newScore);
        navigate("/resultpage", {
          state: { score: newScore, totalQuestions: questions.length },
        });
        return newScore; // Viktigt! Returnerar det nya score-värdet
      }

      return newScore;
    });

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedAnswer(null);
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
