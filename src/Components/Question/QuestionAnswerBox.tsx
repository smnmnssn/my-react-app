import AnswerFeedback from "./AnswerFeedback"; 
// Define the props interface for the component
interface Props {
  answers: string[]; 
  onAnswerSelect: (answer: string) => void; // Function to handle answer selection
  onNext: () => void; // Function to proceed to the next question
  selectedAnswer: string | null;
  correctAnswer: string; 
  showFeedback: boolean; 
}

// Component for displaying answer choices and handling user interaction
export default function QuestionAnswerBox({
  answers,
  onAnswerSelect,
  onNext,
  selectedAnswer,
  correctAnswer,
  showFeedback,
}: Props) {
  return (
    // Container for the answer choices
    <div className="flex flex-col border bg-yellow-400 w-100 mt-5">
      <div className="flex flex-col p-4 m-10 text-2xl">
        {/* Render answer choices with feedback handling */}
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

        {/* Button to proceed to the next question */}
        <div className="flex justify-center">
          <button
            className={`border w-20 mt-5 text-xl bg-white h-10 hover:cursor-pointer ${
              selectedAnswer ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!selectedAnswer} // Disable button if no answer is selected
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
