import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserCategory } from "../../api/api";

export default function UserAnswerPage() {
  const [category, setCategory] = useState({});
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [questionsPerPage] = useState(1);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await getUserCategory(categoryId);
      setCategory(response);
    };

    fetch();
  }, []);

  const handleAnswer = (question, answer) => {
    setCurrentPage(currentPage + 1);
    setAnswers(answers.concat([answer]));
    return question.answer?.answer === answer ? setScore(score + 1) : "Wrong";
  };

  const questions = category.questions;
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

  const renderQuestions = currentQuestions.map((question, index) => {
    return (
      <div key={question.id} className="flex justify-center">
        <div className="w-full md:max-w-[1240px] grid md:mx-5 mt-20 bg-gray-200 border border-blue-500 rounded-xl shadow-xl">
          <div className="grid gap-2 place-items-center bg-gradient-to-b from-[#617EFF] to-[#34B3F9] py-5 rounded-t-xl">
            <h1 className="text-white text-2xl font-bold">{category.title}</h1>
            <p className="text-white text-lg font-semibold">
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
                  onClick={() => handleAnswer(question, choice.choiceA)}
                  className={buttonClass}
                >
                  {choice.choiceA}
                </button>
                <button
                  onClick={() => handleAnswer(question, choice.choiceB)}
                  className={buttonClass}
                >
                  {choice.choiceB}
                </button>
                <button
                  onClick={() => handleAnswer(question, choice.choiceC)}
                  className={buttonClass}
                >
                  {choice.choiceC}
                </button>
                <button
                  onClick={() => handleAnswer(question, choice.choiceD)}
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

  const renderResult = () => {
    return <div>Result Page</div>;
  };

  return (
    <div>
      {renderQuestions}
      {currentPage === lastPage && renderResult()}
      {!questions && (
        <>
          <div>Please Contact Administrator to create some questions.</div>
        </>
      )}
    </div>
  );
}
