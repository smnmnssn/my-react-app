import { Link } from "react-router";

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
  const handleAnswerClick = (answer: string) => {
    onAnswerSelect(answer);
  };

  return (
    <>
      <div className="flex flex-col border bg-yellow-400 w-100 h-100">
        <div className="flex flex-col p-4 m-10 text-2xl">
          {answers.map((answer, index) => (
            <label key={index} className="p-4">
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                className="size-4"
                onChange={() => handleAnswerClick(answer)}
              />
              {answer}
            </label>
          ))}
        </div>

        <div className="flex-1"></div>
        <div className="flex justify-center mb-15">
          <Link to="/quizpage">
            <button
              className={`border w-20 bg-white h-10 hover:cursor-pointer ${
                selectedAnswer ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!selectedAnswer}
              onClick={onNext}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
