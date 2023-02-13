import React, { useState, useEffect } from "react";
import { getUser, showLearnedWord, getSelfActivity } from "../../api/api";
import { useParams, Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function UserDashboard() {
  const { IsUser } = useLocalStorage();
  const userId = useParams();
  const [user, setUser] = useState([]);
  const [learned, setLearned] = useState([]);
  const [selfActivities, setSelfActivities] = useState([]);
  const isUser = IsUser();

  useEffect(() => {
    const fetchLearned = async () => {
      const learnedResponse = await showLearnedWord(userId);
      setLearned(learnedResponse);

      const getUserData = await getUser();
      setUser(getUserData.data.data);

      const fetchSelfActivity = await getSelfActivity();

      setSelfActivities(fetchSelfActivity.data);
    };

    fetchLearned();
  }, []);

  const totalWordLearned = learned.map((learn) => learn.length);
  const followingActivities = selfActivities.filter(
    (activity) => activity.activitiable_type === "App\\Models\\Category"
  );
  if (isUser) {
    return (
      <div>
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
                  <div className="grid text-blue-500 font-semibold">
                    <Link to="/words-learned">
                      Learned {totalWordLearned.length} words
                    </Link>
                    <Link to="/categories">
                      Learned {followingActivities.length} Lessons
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:flex-[2.5] xl:flex-[2] border rounded-lg mt-5 p-5">
              <h1 className="font-bold text-xl mb-3">Activities</h1>
              <div className="h-[2px] bg-blue-700 mb-5"></div>
              <div className="">
                <div className="grid gap-5">
                  {selfActivities.map((activity, index) => {
                    const date = new Date(activity.created_at);
                    const dateString = date.toLocaleString();
                    return (
                      <div
                        key={index}
                        className="flex p-3 bg-gray-100 border border-blue-700 rounded-lg shadow-lg"
                      >
                        <div className="w-20 h-20 flex justify-center items-end bg-blue-200 border border-blue-700 rounded">
                          <img
                            src={user.profile_picture}
                            width={60}
                            height={60}
                          />
                        </div>

                        <div className="relative flex flex-col items-start justify-center gap-3 mr-auto pl-5">
                          <p>
                            <span className="text-lg font-semibold">
                              {activity.description}
                            </span>
                          </p>
                          <p className="absolute -bottom-1 text-sm font-normal">
                            {dateString}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <p>You are not logged in.</p>;
}
