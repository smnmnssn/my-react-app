export default function StartBox() {

  return (
    <div className="flex flex-col border bg-yellow-400 w-100 h-100">
      <label htmlFor="" className="text-2xl p-4 mt-10"> Category :
        <select name="Category" className="ml-2 border bg-white hover:cursor-pointer" >
          <option value="Javascript">JavaScript</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
        </select>
      </label>
      <label htmlFor="" className="text-2xl p-4 "> Difficulty :
        <select name="Difficulty" className="ml-2 bg-white border hover:cursor-pointer" >
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </select>
      </label>
      <div className="flex-1">
      </div>
      <div className="flex justify-center mb-15">
      <button onClick={clickMe} className="border w-40 bg-white h-10 hover:cursor-pointer" >Start Quiz</button>
      </div>
    </div>
  );
}


function clickMe() {
  alert("You clicked me!");
}