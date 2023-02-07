export default function UserAnswerResultPage({
  title,
  score,
  totalQuestion,
  questions,
  answers,
  isCorrect,
  correctAnswers,
}) {
  const renderStatus = (correct) => {
    if (correct) {
      return (
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/check-223-520700.png?f=avif&w=256"
          width={40}
          alt="passed"
        />
      );
    } else {
      return (
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/wrong-1509663-1277200.png?f=avif&w=256"
          width={40}
          alt="failed"
        />
      );
    }
  };
  return (
    <div className="flex justify-center w-full bg-blue-300">
      <div className="sm:w-full md:w-full lg:max-w-[1200px] ">
        <div className="flex bg-gradient-to-b from-[#617EFF] to-[#34B3F9] mt-20 py-7 px-5 rounded-t-lg">
          <div className="w-full text-2xl font-bold">{title}</div>
          <div className="flex text-2xl text-gray-200 font-semibold px-7 py-2 rounded-full border bg-blue-700 shadow-xl">
            <p>
              Score:&nbsp;{score}&nbsp;of&nbsp;{totalQuestion}
            </p>
          </div>
        </div>
        <table className="w-full border-separate border border-x border-t-0 border-b- border-blue-500  mb-20 shadow-xl">
          <thead>
            <tr className=" bg-gray-400">
              <th className="py-7"></th>
              <th className="text-lg font-semibold">Question</th>
              <th className="text-lg font-semibold">Your Answer</th>
              <th className="text-lg font-semibold">Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => {
              return (
                <>
                  <tr className="bg-gray-200" key={question.id}>
                    <td className="flex items-center justify-center px-5 py-3">
                      {renderStatus(isCorrect[index])}
                    </td>
                    <td className="px-5 py-3">{question.question}</td>
                    <td className="px-5 py-3">{answers[index]}</td>
                    <td className="px-5 py-3 font-semibold">
                      {correctAnswers[index]}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
