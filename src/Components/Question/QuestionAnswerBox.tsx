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
    <div className="flex flex-col border bg-yellow-400 w-100 h-100">
      <div className="flex flex-col p-4 m-10 text-2xl">
        {answers.map((answer, index) => {
          let borderColor = "";

          if (showFeedback) {
            if (answer === correctAnswer) borderColor = "border-green-700"; // ✅ Rätt svar → Grön frame
            if (answer === selectedAnswer && answer !== correctAnswer)
              borderColor = "border-red-700"; // ❌ Fel svar → Röd frame
          }

          return (
            <label key={index} className={`p-4 border-4 ${borderColor}`}>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                className="size-4"
                onChange={() => onAnswerSelect(answer)}
                disabled={showFeedback} // 🔒 Förhindra ändring under feedback-visning
              />
              {answer}
            </label>
          );
        })}
      </div>

      <div className="flex justify-center mb-15">
        <button
          className={`border w-20 bg-white h-10 hover:cursor-pointer ${
            selectedAnswer ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedAnswer}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
