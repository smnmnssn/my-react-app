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
  const [showFeedback, setShowFeedback] = useState(false); // 🔥 Visar rätt/fel frame i 1 sekund

  useEffect(() => {
    console.log("Updated Score:", score);
  }, [score]); // 🔥 Körs varje gång `score` ändras

  useEffect(() => {
    if (fetchedQuestion) return; // 🔥 Förhindra extra API-anrop om frågor redan finns

    const getQuestions = async () => {
      console.log("Fetching questions...");
      const data = await fetchQuestions(); // 🔥 Hämtar frågor en gång
      setFetchedQuestion(data);
    };

    getQuestions();
  }, []); // 🔥 Körs endast en gång vid sidstart

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
    if (!selectedAnswer) return;

    const isCorrect =
      selectedAnswer === fetchedQuestion?.[currentQuestionIndex].correctAnswer;

    setShowFeedback(true); // 🔥 Aktivera feedback-visning

    setScore((prevScore) => prevScore + (isCorrect ? 1 : 0)); // 🔥 Uppdatera score korrekt

    setTimeout(() => {
      setShowFeedback(false); // 🔥 Ta bort feedback efter 1 sekund

      if (currentQuestionIndex === fetchedQuestion!.length - 1) {
        navigate("/resultpage", {
          state: {
            score: score + (isCorrect ? 1 : 0), // 🚨 Felet är att `score` fortfarande har sitt gamla värde
            totalQuestions: fetchedQuestion!.length,
          },
        });
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      }
    }, 1000); // 🔥 Vänta 1 sekund innan nästa fråga
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
        correctAnswer={fetchedQuestion[currentQuestionIndex].correctAnswer}
        showFeedback={showFeedback}
      />
    </div>
  );
}
