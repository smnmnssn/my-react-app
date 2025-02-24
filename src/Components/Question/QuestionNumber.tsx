import { useState } from "react";

export default function QuestionNumber() {
  const [questionIndex, setQuestionIndex] = useState(1);

  return (
    <div className="flex justify-center">
      <p className="text-3xl p-5">{questionIndex}/10</p>
    </div>
  );
}
