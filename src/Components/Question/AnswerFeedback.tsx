// Define the props interface for the component
interface AnswerFeedbackProps {
  answer: string; 
  selectedAnswer: string | null; 
  correctAnswer: string;
  showFeedback: boolean; 
  onSelect: (answer: string) => void; // Function to handle answer selection
}

// Component for displaying an answer option with feedback
export default function AnswerFeedback({
  answer,
  selectedAnswer,
  correctAnswer,
  showFeedback,
  onSelect,
}: AnswerFeedbackProps) {
  let borderClass = "border-transparent"; // Default: No border

  // Apply border styles based on feedback state
  if (showFeedback) {
    if (answer === correctAnswer) {
      borderClass = "border-4 border-green-500"; // Correct answer → Green border
    } else if (answer === selectedAnswer) {
      borderClass = "border-4 border-red-500"; // Incorrect answer → Red border
    }
  }

  return (
    // Label wrapper for the answer option
    <label className={`p-4 ${borderClass}`}>
      {/* Radio button for selecting an answer */}
      <input
        type="radio"
        name="answer"
        value={answer}
        checked={selectedAnswer === answer} // Check if this option is the selected one
        className="size-4"
        onChange={() => onSelect(answer)} // Handle selection
        disabled={showFeedback} // Disable selection after "Next" is clicked
      />
      {answer}
    </label>
  );
}
