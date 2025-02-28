import { useLocation, useNavigate } from "react-router";

export default function ResultBox() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, totalQuestions } = location.state ?? {
    score: 10,
    totalQuestions: 10,
  }; // Default values if state is missing

  // Calculate percentage
  const percentage = Math.round((score / totalQuestions) * 100);

  // Customize message based on result
  const resultMessage = percentage >= 60 ? "Impressive! 🎉" : "Maybe try again? 🤓";

  return (
    <>
      <div className="flex flex-col border bg-yellow-400 w-100 h-100 items-center p-6 m-6">
        <p className="text-3xl mt-20 mb-5 underline text-center">
          {resultMessage}
        </p>
        <p className="text-2xl m-2 text-center">
          {score}/{totalQuestions}
        </p>
        <p className="text-2xl mt-2 text-center">{percentage}%</p>

        {/* Play again button */}
        <div className="flex-1"></div>

        <button
          className="border mb-[15px] w-40 bg-white h-10 mt-5 hover:cursor-pointer text-xl"
          onClick={() => navigate("/")}
        >
          Play again
        </button>
      </div>
    </>
  );
}
