import QuestionAnswerBox from "../Components/Question/QuestionAnswerBox";
import QuestionTextBox from "../Components/Question/QuestionTextBox";

export default function QuizPage() {
  return (
  <div className="flex flex-col">
    <QuestionTextBox />
    <QuestionAnswerBox/>
  </div>
  )
}