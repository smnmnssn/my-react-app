import QuestionTextBox from "../Components/Question/QuestionTextBox";
import ResultBox from "../Components/Result/ResultBox";

export default function ResultPage() {
  return (
    <div className="flex flex-col items-center pt-30">
      <QuestionTextBox question="RESULTS"/>
      <ResultBox />
    </div>
  );
}