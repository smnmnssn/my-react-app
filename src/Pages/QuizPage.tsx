import QuestionAnswerBox from "../Components/Question/QuestionAnswerBox";
import QuestionNumber from "../Components/Question/QuestionNumber";
import QuestionTextBox from "../Components/Question/QuestionTextBox";

export default function QuizPage() {
  return (
    <div className="flex flex-col">
      <QuestionNumber />
      <QuestionTextBox />
      <QuestionAnswerBox />
    </div>
  );
}
