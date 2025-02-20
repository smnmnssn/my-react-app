import QuestionTextBox from "../Components/Question/QuestionTextBox";
import ResultBox from "../Components/Result/ResultBox";

export default function ResultPage() {
  return (
    <div>
      <QuestionTextBox /> Ändra text till "RESULTS" i textboxen
      <ResultBox /> Ändra text till "Try again maybe?" vid under 60% rätt
    </div>
  );
}
