import StartBox from "../Components/Start/StartBox";

export default function StartPage() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-9xl mt-50 mb-10 tracking-wider">QUIZZY</h1>
      </div>
      <div className="flex justify-center">
        <StartBox />
      </div>
    </>
  );
}
