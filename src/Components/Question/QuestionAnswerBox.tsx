import { Link } from "react-router";

export default function QuestionAnswerBox() {
  return (
    <>
      <div className="flex flex-col border bg-yellow-400 w-100 h-100">
        <div className="flex flex-col p-4 m-10 text-2xl">
          <label className="p-4">
            <input
              type="radio"
              name="myRadio"
              value="answer1"
              className="size-4"
            />{" "}
            Answer
          </label>
          <label className="p-4">
            <input
              type="radio"
              name="myRadio"
              value="answer2"
              className="size-4"
            />{" "}
            Answer
          </label>
          <label className="p-4">
            <input
              type="radio"
              name="myRadio"
              value="answer3"
              className="size-4"
            />{" "}
            Answer
          </label>
        </div>
        <div className="flex-1"></div>
        <div className="flex justify-center mb-15">
          <Link to="/">
            <button className="border w-20 bg-white h-10 hover:cursor-pointer">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

