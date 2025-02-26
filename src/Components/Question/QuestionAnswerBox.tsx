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
          let borderClass = "border-transparent"; // 🔥 Standard: Ingen border

          if (showFeedback) {
            if (answer === correctAnswer) {
              borderClass = "border-4 border-green-500"; // ✅ Rätt svar → Grön frame
            } else if (answer === selectedAnswer) {
              borderClass = "border-4 border-red-500"; // ❌ Fel svar → Röd frame
            }
          }

          return (
            <label key={index} className={`p-4 ${borderClass}`}>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                className="size-4"
                onChange={() => onAnswerSelect(answer)}
                disabled={showFeedback} // 🔒 Förhindra ändring efter "Next"
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

