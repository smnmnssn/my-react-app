import AnswerFeedback from "./AnswerFeedback"; // 🔥 Importera den nya komponenten

interface Props {
  answers: string[];
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
  selectedAnswer: string | null;
  correctAnswer: string;
  showFeedback: boolean;
}

export default function QuestionAnswerBox({
  answers,
  onAnswerSelect,
  onNext,
  selectedAnswer,
  correctAnswer,
  showFeedback,
}: Props) {
  return (
    <div className="flex flex-col border bg-yellow-400 w-100 mt-5">
      <div className="flex flex-col p-4 m-10 text-2xl">
        {answers.map((answer, index) => (
          <AnswerFeedback
            key={index}
            answer={answer}
            selectedAnswer={selectedAnswer}
            correctAnswer={correctAnswer}
            showFeedback={showFeedback}
            onSelect={onAnswerSelect}
          />
        ))}
      <div className="flex justify-center">
        <button
          className={`border w-20 mt-5 text-xl bg-white h-10 hover:cursor-pointer ${
            selectedAnswer ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedAnswer}
          onClick={onNext}
        >
          Next
        </button>
      </div>

      </div>
    </div>
  );
}
