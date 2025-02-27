// Define the props interface for the component
interface Props {
  question: string; // The question text to be displayed
}

// Component for displaying the question text
export default function QuestionTextBox({ question }: Props) {
  return (
    <>
      {/* Container for the question text */}
      <div className="flex flex-col border-2 bg-gray-200 w-120 h-40">
        {/* Display the question text in a styled paragraph */}
        <p className="text-2xl text-center p-5">{question}</p>
      </div>
    </>
  );
}
