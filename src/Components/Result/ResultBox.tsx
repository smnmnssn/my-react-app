export default function ResultBox() {
  return (
    <>
      <div className="flex flex-col border bg-yellow-400 w-100 h-100">
        <div className="flex flex-col p-4 m-10 text-2xl">
          <p className="flex justify-center text-3xl p-5 underline">Impressive!</p>
          <p className="flex justify-center text-3xl p-5">8/10 ✔</p>
          <p className="flex justify-center text-3xl">80% ✔</p>


        </div>
        <div className="flex-1"></div>
        <div className="flex justify-center mb-15">
          <button
            onClick={clickMe}
            className="border w-25 bg-white h-10 hover:cursor-pointer"
          >
            Play again
          </button>
        </div>
      </div>
    </>
  );
}

function clickMe() {
  alert("You clicked me!");
}
