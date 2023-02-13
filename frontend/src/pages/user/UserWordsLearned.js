import React, { useState, useEffect } from "react";
import { getUser, showLearnedWord } from "../../api/api";
import { useParams } from "react-router-dom";

export default function UserWordsLearned() {
  const thClass = "bg-blue-500 text-lg text-white py-4 rounded-t-2xl";
  const trClass = "odd:bg-blue-200 even:bg-blue-100 py-2 ";
  const tdClass = "text-center py-3 ";
  const userId = useParams();
  const [learned, setLearned] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchLearned = async () => {
      const learnedResponse = await showLearnedWord(userId);
      setLearned(learnedResponse);

      const getUserData = await getUser();
      setUser(getUserData.data.data);
    };

    fetchLearned();
  }, []);

  const totalLearned = learned.map((learn) => {
    return learn.user_id.length;
  });
  return (
    <div className="w-full flex justify-center">
      <div className="w-screen lg:flex p-3 md:mx-10">
        <div className="flex-1">
          <h1 className="text-2xl font-bold py-6">Dashboard</h1>
          <div className="flex gap-5 bg-gray-100 items-center p-5 border-2 border-blue-700 rounded-lg shadow-lg">
            <div className="w-32 h-32 flex items-end justify-center rounded-full bg-blue-200 overflow-hidden border-2 border-blue-700 shadow-xl">
              <img
                className=""
                src={user.profile_picture}
                width={95}
                height={95}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-blue-500 font-semibold">
                Learned {totalLearned.length} words
              </p>
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
                  {learned.map((learn, index) => {
                    return (
                      <tr key={index} className={trClass}>
                        <td className={tdClass}>{learn.learned_from}</td>
                        <td className={tdClass}>{learn.learned_word}</td>
                        <td className={tdClass}>{learn.learned_answer}</td>
                      </tr>
                    );
                  })}
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
