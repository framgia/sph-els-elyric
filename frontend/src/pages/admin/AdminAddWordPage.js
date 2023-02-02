import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCategoryData, addQuestionToCategory } from "../../api/api";
import { useToast } from "../../hooks/useToast";

export default function AdminAddWordPage() {
  const [word, setWord] = useState("");
  const [answer, setAnswer] = useState("");
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [choiceC, setChoiceC] = useState("");
  const [choiceD, setChoiceD] = useState("");
  const [categoryName, setCategoryName] = useState([]);
  const { showToast } = useToast();

  const { categoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategoryData(categoryId);
      setCategoryName(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const is_correct = false;

    const data = {
      question: word,
      choices: {
        choiceA,
        choiceB,
        choiceC,
        choiceD,
        answer: {
          is_correct,
          answer,
        },
      },
    };

    const response = await addQuestionToCategory(categoryId, data);

    setWord("");
    setAnswer("");
    setChoiceA("");
    setChoiceB("");
    setChoiceC("");
    setChoiceD("");
    showToast("success", response.message);
  };

  const markAsAnswer = (answer) => {
    setAnswer(answer);
  };
  return (
    <div>
      <div className="w-full grid place-items-center mb-10">
        <div className="w-full lg:grid lg:place-items-center mt-20 px-0 md:px-10 overflow-hidden">
          <div className="sm:w-full lg:w-[900px] relative bg-gradient-to-b from-[#617EFF] to-[#34B3F9] p-2 rounded-tl-xl rounded-tr-xl">
            <div className="font-bold text-xl py-5">
              Add Word to {categoryName.title}
            </div>
            <form
              onSubmit={handleSubmit}
              className=" flex justify-evenly flex-col md:flex-row mb-5"
            >
              <div className="w-full flex flex-col mx-5">
                <label className="text-lg font-semibold mb-3">Word</label>
                <input
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  className="pl-2 text-lg font-normal py-4 rounded-lg"
                />
                <label className="text-lg font-semibold mb-3 mt-5">
                  Answer
                </label>
                <input
                  disabled
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="pl-2 text-lg font-normal py-4 rounded-lg bg-gray-200"
                />
              </div>
              <div className="w-full flex flex-col mx-5 -mt-4">
                <label className="text-lg font-semibold mt-5 mb-2">
                  Choices
                </label>
                <input
                  onClick={() => markAsAnswer(choiceA)}
                  value={choiceA}
                  onChange={(e) => setChoiceA(e.target.value)}
                  className={`pl-2 text-lg font-normal mb-7 py-4 rounded-lg ${
                    choiceA ? "cursor-pointer" : ""
                  } `}
                />
                <input
                  onClick={() => markAsAnswer(choiceB)}
                  value={choiceB}
                  onChange={(e) => setChoiceB(e.target.value)}
                  className={`pl-2 text-lg font-normal mb-7 py-4 rounded-lg ${
                    choiceB ? "cursor-pointer" : ""
                  } `}
                />
                <input
                  onClick={() => markAsAnswer(choiceC)}
                  value={choiceC}
                  onChange={(e) => setChoiceC(e.target.value)}
                  className={`pl-2 text-lg font-normal mb-7 py-4 rounded-lg ${
                    choiceC ? "cursor-pointer" : ""
                  } `}
                />
                <input
                  onClick={() => markAsAnswer(choiceD)}
                  value={choiceD}
                  onChange={(e) => setChoiceD(e.target.value)}
                  className={`pl-2 text-lg font-normal mb-7 py-4 rounded-lg ${
                    choiceD ? "cursor-pointer" : ""
                  } `}
                />
                <button className="bg-blue-500 hover:bg-blue-600 py-4 text-white text-xl font-semibold  rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
