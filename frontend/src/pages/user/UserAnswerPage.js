import React from "react";

export default function UserAnswerPage() {
  const buttonClass =
    "bg-blue-400 py-4 border hover:border-2 rounded-xl text-white text-xl shadow-xl";
  return (
    <div className="w-screen flex justify-center">
      <div className="w-full md:max-w-[1240px] grid md:mx-5 mt-20 bg-gray-200 border border-blue-500 rounded-xl shadow-xl">
        <div className="grid gap-2 place-items-center bg-gradient-to-b from-[#617EFF] to-[#34B3F9] py-5 rounded-t-xl">
          <h1 className="text-white text-2xl font-bold">Lesson 28</h1>
          <p className="text-white text-lg font-semibold">
            Select one of the best answer:
          </p>
        </div>
        <div className="flex justify-between p-5 bg-gray-200">
          <div className="text-xl font-semibold">Question</div>
          <div className="text-xl font-semibold">3 of 20</div>
        </div>
        <div className="flex gap-5 p-5 pb-10 bg-blue-300 rounded-b-xl">
          <div className="flex-1 text-lg p-2 bg-gray-100 border rounded-md">
            Favorite Programming Language?
          </div>
          <div className="flex-1 grid gap-5">
            <button className={buttonClass}>C</button>
            <button className={buttonClass}>C++</button>
            <button className={buttonClass}>Java</button>
            <button className={buttonClass}>JavaScript</button>
          </div>
        </div>
      </div>
    </div>
  );
}
