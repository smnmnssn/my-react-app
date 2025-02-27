// Define the props interface for the component
interface QuestionNumberProps {
  currentIndex: number; // The current question index (zero-based)
  totalQuestions: number; // The total number of questions in the quiz
}

// Component for displaying the current question number
export default function QuestionNumber({
  currentIndex,
  totalQuestions,
}: QuestionNumberProps) {
  return (
    // Container to center the question number
    <div className="flex justify-center">
      {/* Displays the current question number (1-based) out of the total */}
      <p className="text-3xl p-5">
        {currentIndex + 1}/{totalQuestions}
      </p>
    </div>
  );
}
