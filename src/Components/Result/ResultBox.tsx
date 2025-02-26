import { useLocation, useNavigate } from "react-router";

export default function ResultBox() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || {
    score: 0,
    totalQuestions: 10,
  }; // 🛠️ Standardvärde om något saknas

  // ✅ Beräkna procentandel
  const percentage = Math.round((score / totalQuestions) * 100);

  // ✅ Anpassa meddelande beroende på resultat
  const resultMessage =
    percentage >= 60 ? "Impressive! 🎉" : "Maybe try again? 😕";

  return (
    <>
      <div className="flex flex-col border bg-yellow-400 w-100 h-100 items-center">
        <p className="text-3xl mt-20 mb-5 underline">{resultMessage}</p>
        <p className="text-2xl m-2">
          {score}/{totalQuestions} ✅
        </p>
        <p className="text-2xl mt-2">{percentage}% ✅</p>
        {/* Knapp för att spela igen */}
        <div className="flex-1"></div>

        <button
          className="border mb-15 w-40 bg-white h-10 mt-5 hover:cursor-pointer text-xl"
          onClick={() => navigate("/")}
        >
          Play again
        </button>
      </div>
    </>
  );
}
