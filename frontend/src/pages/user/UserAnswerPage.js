import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getUserCategory,
  calculateScore,
  storeLearnedWord,
} from "../../api/api";
import UserAnswerResultPage from "../user/UserAnswerResultPage";

export default function UserAnswerPage() {
  const [category, setCategory] = useState({});
  const [score, setScore] = useState(0);
  const [scorePercentage, setScorePercentage] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isCorrect, setIsCorrect] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [answersQuestion, setAnswersQuestion] = useState([]);
  const [correctAnswersOnly, setCorrectAnswersOnly] = useState([]);
  const [correctAnswerQuestionsOnly, setCorrectAnswerQuestionsOnly] = useState(
    []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1);
  const [passed, setPassed] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const { categoryId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await getUserCategory(categoryId);
      setCategory(response);
    };

    fetch();
  }, [categoryId]);

  const questions = category.questions;
  const title = category.title;
  const buttonClass =
    "bg-blue-400 py-4 border hover:border-2 rounded-xl text-white text-xl shadow-xl";

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions =
    questions && Array.isArray(questions)
      ? questions.slice(indexOfFirstQuestion, indexOfLastQuestion)
      : [];

  const lastPage =
    questions && Array.isArray(questions) ? questions.length + 1 : 0;

  const totalQuestion =
    questions && Array.isArray(questions) ? questions.length : 0;
  const passingScore = 75;

  useEffect(() => {
    setPassed(scorePercentage >= passingScore ? true : false);
    const store = async () => {
      if (scorePercentage) {
        await storeLearnedWord({
          learned_from: category.title,
          learned_word: correctAnswerQuestionsOnly,
          learned_answer: correctAnswersOnly,
        });
      }
    };
    store();
  }, [scorePercentage]);

  useEffect(() => {
    const calculate = async () => {
      try {
        const result = await calculateScore({
          score,
          totalQuestion,
          answers,
          correctAnswers,
          answersQuestion,
        });
        setScorePercentage(result.result);
        setScore(result.score);
        setIsCorrect(result.isCorrect);
        setCorrectAnswersOnly(result.correctAnswersOnly);
        setCorrectAnswerQuestionsOnly(result.correctAnswerQuestionsOnly);
      } catch (error) {
        console.log(error);
      }
    };
    calculate();
  }, [isDone]);

  // console.log(correctAnswers);

  const handleAnswer = (question, answer, correctAnswer) => {
    setCurrentPage(currentPage + 1);
    setAnswers(answers.concat([answer]));
    setCorrectAnswers(correctAnswers.concat([correctAnswer]));
    setAnswersQuestion(answersQuestion.concat([question.question]));

    if (currentPage === totalQuestion) {
      setIsDone(true);
    }
  };
  const renderQuestions = currentQuestions.map((question, index) => {
    return (
      <div key={index} className="flex justify-center">
        <div className="w-full md:max-w-[1240px] grid md:mx-5 mt-20 bg-gray-200 border border-blue-500 rounded-xl shadow-xl">
          <div className="grid gap-2 place-items-center bg-gradient-to-b from-[#617EFF] to-[#34B3F9] py-5 rounded-t-xl">
            <h1 className="text-white text-2xl font-bold">{category.title}</h1>
            <p className="text-white tet-lg font-semibold">
              Select one of the best answer:
            </p>
          </div>
          <div className="flex justify-between p-5 bg-gray-200">
            <div className="text-xl font-semibold">Question</div>
            <div className="text-xl font-semibold">
              {currentPage} of {questions.length}
            </div>
          </div>
          <div className="flex gap-5 p-5 pb-10 bg-blue-300 rounded-b-xl">
            <div className="flex-1 text-lg p-2 bg-gray-100 border rounded-md">
              {question.question}
            </div>
            {question.choices.map((choice, index) => (
              <div key={index} className="flex-1 grid gap-5">
                <button
                  onClick={() =>
                    handleAnswer(question, choice.choiceA, choice.answer.answer)
                  }
                  className={buttonClass}
                >
                  {choice.choiceA}
                </button>
                <button
                  onClick={() =>
                    handleAnswer(question, choice.choiceB, choice.answer.answer)
                  }
                  className={buttonClass}
                >
                  {choice.choiceB}
                </button>
                <button
                  onClick={() =>
                    handleAnswer(question, choice.choiceC, choice.answer.answer)
                  }
                  className={buttonClass}
                >
                  {choice.choiceC}
                </button>
                <button
                  onClick={() =>
                    handleAnswer(question, choice.choiceD, choice.answer.answer)
                  }
                  className={buttonClass}
                >
                  {choice.choiceD}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  });

  const renderPassedPopupResult = () => {
    return (
      <div className="w-screen grid place-items-center mt-20">
        <div className="relative flex flex-col items-center gap-5 px-20 py-20 bg-gradient-to-b from-[#617EFF] to-[#34B3F9] border border-gray-400 rounded-2xl shadow-2xl">
          <div
            onClick={() => setPassed(null)}
            className="absolute top-5 right-5"
          >
            <img
              className="cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/992/992660.png"
              width={50}
              alt="close"
            />
          </div>
          <div>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/trophy-5498563-4577197.png"
              width={200}
              height={200}
              alt="passed"
            />
          </div>
          <h2 className="text-4xl font-bold text-white">Congratulations!</h2>
          <h2 className="text-4xl font-bold text-green-700">
            Passed! {`${scorePercentage}%`}
          </h2>
          <h3 className="text-2xl font-semibold text-white">
            Quiz completed successfully.
          </h3>
          <div className="text-2xl font-semibold">
            <p>
              You attempt
              <span className="text-blue-600 font-bold">
                {" "}
                {totalQuestion} questions{" "}
              </span>
              and
            </p>
            <p>
              from that{" "}
              <span className="text-green-700 font-bold">{score} answers </span>{" "}
              are correct
            </p>
          </div>
        </div>
      </div>
    );
  };
  const renderFailedPopupResult = () => {
    return (
      <div
        key={Math.random()}
        className="w-screen grid place-items-center mt-20"
      >
        <div className="relative flex flex-col items-center gap-5 px-20 py-20 bg-gradient-to-b from-[#617EFF] to-[#34B3F9] border border-gray-400 rounded-2xl shadow-2xl">
          <div
            onClick={() => setPassed(null)}
            className="absolute top-5 right-5"
          >
            <img
              className="cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/992/992660.png"
              width={50}
              alt="close"
            />
          </div>
          <div>
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/sad-face-3750922-3144984.png"
              width={200}
              height={200}
              alt="failed"
            />
          </div>
          <h2 className="text-4xl font-bold text-white">Opps Sorry!</h2>
          <h2 className="text-4xl font-bold text-red-700">
            Failed! {`${scorePercentage}%`}
          </h2>
          <h3 className="text-2xl font-semibold text-white">
            Quiz completed but Failed.
          </h3>
          <div className="text-2xl font-semibold">
            <p>
              You attempt
              <span className="text-blue-600 font-bold">
                {" "}
                {totalQuestion} questions{" "}
              </span>
              and
            </p>
            <p>
              from that{" "}
              <span className="text-red-700 font-bold">{score} answers </span>{" "}
              are correct
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderQuestions}
      {questions && Array.isArray(questions) ? (
        questions.length > 0 ? (
          currentPage === lastPage && (
            <>
              {passed && renderPassedPopupResult()}
              {passed === false && renderFailedPopupResult()}
              {passed === null && (
                <>
                  <UserAnswerResultPage
                    title={title}
                    score={score}
                    totalQuestion={totalQuestion}
                    questions={questions}
                    answers={answers}
                    isCorrect={isCorrect}
                    correctAnswers={correctAnswers}
                  />
                </>
              )}
            </>
          )
        ) : (
          <div className="grid place-items-center w-screen bg-red-100 shadow-lg">
            <div className="text-3xl text-red-700 py-7">
              Please Contact Administrator to create some questions.
            </div>
          </div>
        )
      ) : (
        0
      )}
    </div>
  );
}
