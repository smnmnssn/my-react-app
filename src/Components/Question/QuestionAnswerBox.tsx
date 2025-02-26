interface Props {
  answers: string[];
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
  selectedAnswer: string | null;
}

export default function QuestionAnswerBox({
  answers,
  onAnswerSelect,
  onNext,
  selectedAnswer,
}: Props) {
  return (
    <div className="flex flex-col border bg-yellow-400 w-100 h-100">
      <div className="flex flex-col p-4 m-10 text-2xl">
        {answers.map((answer, index) => {
          const isCorrect = selectedAnswer && answer === selectedAnswer;
          const borderColor = selectedAnswer
            ? answer === selectedAnswer
              ? isCorrect
                ? "border-green-500" // ✅ Rätt svar → Grön ram
                : "border-red-500" // ❌ Fel svar → Röd ram
              : ""
            : "";

          return (
            <label key={index} className={`p-4 ${borderColor}`}>
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                className="size-4"
                onChange={() => onAnswerSelect(answer)}
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
          onClick={onNext} // 🛑 Ta bort <Link> och låt `onNext` hantera bytet
        >
          Next
        </button>
      </div>
    </div>
  );
}
