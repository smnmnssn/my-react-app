interface AnswerFeedbackProps {
  answer: string;
  selectedAnswer: string | null;
  correctAnswer: string;
  showFeedback: boolean;
  onSelect: (answer: string) => void;
}

export default function AnswerFeedback({
  answer,
  selectedAnswer,
  correctAnswer,
  showFeedback,
  onSelect,
}: AnswerFeedbackProps) {
  let borderClass = "border-transparent"; // 🔥 Ingen border som standard

  if (showFeedback) {
    if (answer === correctAnswer) {
      borderClass = "border-4 border-green-500"; // ✅ Rätt svar → Grön frame
    } else if (answer === selectedAnswer) {
      borderClass = "border-4 border-red-500"; // ❌ Fel svar → Röd frame
    }
  }

  return (
    <label className={`p-4 ${borderClass}`}>
      <input
        type="radio"
        name="answer"
        value={answer}
        checked={selectedAnswer === answer}
        className="size-4"
        onChange={() => onSelect(answer)}
        disabled={showFeedback} // 🔒 Lås val efter "Next"
      />
      {answer}
    </label>
  );
}
