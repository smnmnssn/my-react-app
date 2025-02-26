import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import QuestionAnswerBox from "../Components/Question/QuestionAnswerBox";
import QuestionNumber from "../Components/Question/QuestionNumber";
import QuestionTextBox from "../Components/Question/QuestionTextBox";
import { fetchQuestions } from "../api";

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

  useEffect(() => {
    console.log("Updated Score:", score);
  }, [score]); // 🔥 Körs varje gång `score` ändras

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      if (data.length > 0) {
        setFetchedQuestion(data);
      } else {
        console.error("No questions retrieved from API.");
      }
    };
    

    getQuestions();
  }, []);

  // 🔥 Säkerställ att vi inte försöker rendera innan frågorna har laddats
  if (!fetchedQuestion) {
    return <p>Laddar frågor...</p>;
  }

  if (fetchedQuestion.length === 0) {
    return <p>Inga frågor kunde hämtas.</p>;
  }

  // 🔥 Hämta den aktuella frågan, om den finns
  const currentQuestion = fetchedQuestion[currentQuestionIndex];

  if (!currentQuestion) {
    return <p>Fel: Ingen fråga hittades.</p>;
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    console.log("User selected:", answer);
  };

  const handleNextQuestion = () => {
    const isCorrect =
      selectedAnswer === fetchedQuestion?.[currentQuestionIndex].correctAnswer;
  
    setScore((prevScore) => {
      const newScore = isCorrect ? prevScore + 1 : prevScore;
      return newScore;
    });
  
    if (currentQuestionIndex === fetchedQuestion!.length - 1) {
      navigate("/resultpage", {
        state: { score: score + (isCorrect ? 1 : 0), totalQuestions: fetchedQuestion!.length },
      });
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
    }
  };
  

  return (
    <div className="flex flex-col items-center pt-30">
      <QuestionNumber
        currentIndex={currentQuestionIndex}
        totalQuestions={fetchedQuestion.length}
      />
      <QuestionTextBox question={currentQuestion.question} />
      <QuestionAnswerBox
        answers={currentQuestion.answers}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNextQuestion}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}
