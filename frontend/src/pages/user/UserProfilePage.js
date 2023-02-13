import React, { useState, useEffect } from "react";
import { getUser, getSelfActivity, followUser } from "../../api/api";
import { Link } from "react-router-dom";

export default function UserProfilePage() {
  const [user, setUser] = useState([]);
  const [selfActivities, setSelfActivities] = useState([]);
  const [followersFollowings, setFollowersFollowings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const getUserData = await getUser();
      setUser(getUserData.data.data);

      const fetchSelfActivity = await getSelfActivity();
      setSelfActivities(fetchSelfActivity.data);

      const follows = await followUser(user.id, {
        fetchOnly: true,
      });
      setFollowersFollowings(follows.data);
    };

    fetchData();
  }, [user.id]);

  const followingActivities = selfActivities.filter(
    (activity) => activity.activitiable_type === "App\\Models\\Category"
  );

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-screen lg:flex p-3 md:mx-10">
          <div className="flex-1">
            <h1 className="text-2xl font-bold py-6">Profile</h1>
            <div className="flex sm:flex-row lg:flex-col gap-5 bg-gray-100 items-center p-5 border-2 border-blue-700 rounded-lg shadow-lg">
              <div className="w-32 h-32 flex items-end justify-center rounded-full bg-blue-200 overflow-hidden border-2 border-blue-700 shadow-xl">
                <img
                  className=""
                  src={user.profile_picture}
                  width={95}
                  height={95}
                />
              </div>
              <div className="sm:flex-1 lg:flex-0">
                <h2 className="text-xl font-semibold text-center">
                  {user.name}
                </h2>
                <div className="h-[2px] bg-blue-700 my-5"></div>
                <div className="sm:flex sm:gap-5 sm:justify-center w-full id text-blue-500 font-semibold text-center my-7">
                  <div>
                    <p className="text-xl font-semibold">
                      {followersFollowings.followersCount}
                    </p>
                    <p>followers</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      {followersFollowings.followingsCount}
                    </p>
                    <p>following</p>
                  </div>
                </div>
                <div className="text-center font-semibold my-5 underline text-blue-800">
                  <Link to="/categories">
                    Learned {followingActivities.length}{" "}
                    {followingActivities.length > 1 ? "Lessons" : "Lesson"}
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
