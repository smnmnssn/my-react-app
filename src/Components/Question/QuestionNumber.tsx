interface QuestionNumberProps {
  currentIndex: number;
  totalQuestions: number;
}

export default function QuestionNumber({ currentIndex, totalQuestions }: QuestionNumberProps) {
  return (
    <div className="flex justify-center">
      <p className="text-3xl p-5">{currentIndex + 1}/{totalQuestions}</p>
    </div>
  );
}
