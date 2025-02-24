interface Props {
  question: string;
}

export default function QuestionTextBox({ question }: Props) {
  return (
    <>
      <div className="flex flex-col border-2 bg-gray-200 w-120 h-40">
        <p className="text-2xl text-center p-5">{ question }</p>
      </div>
    </>
  );
}
