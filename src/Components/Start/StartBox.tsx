import { useState } from "react";
import { Link } from "react-router";

export default function StartBox() {
  const [category, setCategory] = useState("Computer Science");
  const [difficulty, setDifficulty] = useState("Normal");

  return (
    <div className="flex flex-col border bg-yellow-400 w-100 h-100">
      <label htmlFor="" className="text-2xl p-4 mt-20">
        {" "}
        Category :
        <select
          name="Category"
          className="ml-2 border bg-white hover:cursor-pointer"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Computer Science">Computer Science</option>
          <option value="History">History</option>
          <option value="Science">Science</option>
        </select>
      </label>
      <label htmlFor="" className="text-2xl p-4 ">
        {" "}
        Difficulty :
        <select
          name="Difficulty"
          className="ml-2 bg-white border hover:cursor-pointer"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </select>
      </label>
      <div className="flex-1"></div>
      <div className="flex justify-center mb-15">
        <Link to={`/quizpage?category=${category}&difficulty=${difficulty}`}>
          <button className="text-2xl border w-40 bg-white h-10 hover:cursor-pointer">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}
