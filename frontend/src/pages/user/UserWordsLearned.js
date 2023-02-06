import React from "react";

export default function UserWordsLearned() {
  const thClass = "bg-blue-500 text-lg text-white py-4 rounded-t-2xl";
  const trClass = "odd:bg-blue-200 even:bg-blue-100 py-2 ";
  const tdClass = "text-center py-3 ";
  return (
    <div className="w-full flex justify-center">
      <div className="w-screen lg:flex p-3 md:mx-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold py-5">Dashboard</h1>
          <div className="flex gap-5 bg-gray-100 items-center p-5 border-2 border-blue-700 rounded-lg shadow-lg">
            <div className="w-32 h-32 flex items-end justify-center rounded-full bg-blue-200 overflow-hidden border-2 border-blue-700 shadow-xl">
              <img
                className=""
                src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                width={95}
                height={95}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Elyric Manatad</h2>
              <p className="text-blue-500 font-semibold">Learned 20 words</p>
            </div>
          </div>
        </div>
        <div className=" lg:flex-[2.5] xl:flex-[2] border rounded-lg mt-5 p-5">
          <h1 className="font-bold text-xl mb-3">Words Learned</h1>
          <div className="h-[2px] bg-blue-700 mb-5"></div>
          <div className="grid">
            <div className="flex shadow-lg">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className={thClass}>Category</th>
                    <th className={thClass}>Words</th>
                    <th className={thClass}>Answers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={trClass}>
                    <td className={tdClass}>Lesson 28</td>
                    <td className={tdClass}>Usagi</td>
                    <td className={tdClass}>Rabbit</td>
                  </tr>
                  <tr className={trClass}>
                    <td className={tdClass}>Lesson 28</td>
                    <td className={tdClass}>Usagi</td>
                    <td className={tdClass}>Rabbit</td>
                  </tr>
                  <tr className={trClass}>
                    <td className={tdClass}>Lesson 28</td>
                    <td className={tdClass}>Usagi</td>
                    <td className={tdClass}>Rabbit</td>
                  </tr>
                  <tr className={trClass}>
                    <td className={tdClass}>Lesson 28</td>
                    <td className={tdClass}>Usagi</td>
                    <td className={tdClass}>Rabbit</td>
                  </tr>
                  <tr className={trClass}>
                    <td className={tdClass}>Lesson 28</td>
                    <td className={tdClass}>Usagi</td>
                    <td className={tdClass}>Rabbit</td>
                  </tr>
                  <tr className={trClass}>
                    <td className={tdClass}>Lesson 28</td>
                    <td className={tdClass}>Usagi</td>
                    <td className={tdClass}>Rabbit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
