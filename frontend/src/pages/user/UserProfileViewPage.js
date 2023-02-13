import React, { useState, useEffect } from "react";
import {
  viewUserProfile,
  getUser,
  showLearnedWord,
  followUser,
} from "../../api/api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useToast } from "../../hooks/useToast";

export default function UserProfileViewPage() {
  const [user, setUser] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [learned, setLearned] = useState([]);
  const [followersFollowings, setFollowersFollowings] = useState([]);
  const { userId } = useParams();
  const { showToast } = useToast();

  useEffect(
    () => {
      const fetchUser = async () => {
        const learnedResponse = await showLearnedWord(userId);
        setLearned(learnedResponse);

        const response = await viewUserProfile(userId);
        setUser(response.data.data);

        const current = await getUser();
        setCurrentUser(current.data.data);

        const follows = await followUser(user.id, {
          fetchOnly: true,
        });
        setFollowersFollowings(follows.data);
      };

      fetchUser();
    },
    [user.id],
    [followersFollowings]
  );

  const totalWordLearned = learned.map((learn) => {
    return learn.length;
  });

  const handleFollow = async (follow) => {
    const data = follow ? { follow: true } : { follow: false };
    const followThis = await followUser(user.id, data);
    showToast(follow ? "success" : "warning", followThis.data.message);

    setFollowersFollowings(followThis.data);
  };
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-screen lg:flex p-3 md:mx-10">
          <div className="flex-1">
            <h1 className="text-2xl font-bold py-6">Profile</h1>
            <div className="flex sm:flex-row lg:flex-col gap-5 bg-gray-100 items-center p-5 border-2 border-blue-700 rounded-lg shadow-lg">
              <div className="flex items-end justify-center rounded-full bg-blue-200 overflow-hidden border-2 border-blue-700 shadow-xl">
                <img
                  className="bg-cover object-cover"
                  src={user.profile_picture}
                  width={150}
                  height={150}
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
                      {followersFollowings.followersCountById}
                    </p>
                    <p>followers</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      {followersFollowings.followingsCountById}
                    </p>
                    <p>following</p>
                  </div>
                </div>

                {currentUser.id != userId && (
                  <>
                    {followersFollowings.followed && (
                      <>
                        <div className="grid place-items-center my-5">
                          <button
                            onClick={() => handleFollow(false)}
                            className="py-2 w-48 rounded-full bg-blue-400 hover:bg-blue-500 text-gray-100 font-semibold border-2 border-blue-700 shadow-inner"
                          >
                            Unfollow
                          </button>
                        </div>
                      </>
                    )}
                    {!followersFollowings.followed && (
                      <>
                        <div className="grid place-items-center my-5">
                          <button
                            onClick={() => handleFollow(true)}
                            className="py-2 w-48 rounded-full bg-blue-600 hover:bg-blue-700 text-gray-100 font-semibold border-2 border-blue-700 shadow-lg"
                          >
                            Follow
                          </button>
                        </div>
                      </>
                    )}
                  </>
                )}

                <div className="text-center font-semibold my-5 underline text-blue-800">
                  <Link to="/categories">
                    Learned {totalWordLearned.length} words
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:flex-[2.5] xl:flex-[2] border rounded-lg mt-5 p-5">
            <h1 className="font-bold text-xl mb-3">Images</h1>
            <div className="h-[2px] bg-blue-700 mb-5"></div>
            <div className="">
              <div className="grid gap-5">
                <div className="grid grid-cols-2 items-start gap-3 p-3 bg-gray-100 border border-blue-700 rounded-lg shadow-lg">
                  <div className="flex justify-center items-end bg-blue-200 border border-blue-700 rounded">
                    <img
                      className="w-full"
                      src="https://i.natgeofe.com/n/78f154a9-4c13-47e4-b7c7-8c116334fbeb/33990.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex justify-center items-end bg-blue-200 border border-blue-700 rounded">
                    <img
                      className="w-full"
                      src="https://i.natgeofe.com/n/4e49e05f-bd4c-4862-a751-f168b1e558d8/3694.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex justify-center items-end bg-blue-200 border border-blue-700 rounded">
                    <img
                      className="w-full"
                      src="https://i.pinimg.com/originals/d6/a2/7e/d6a27e9baacbc4f06bc82b13f7c865e2.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex justify-center items-end bg-blue-200 border border-blue-700 rounded">
                    <img
                      className="w-full"
                      src="https://wallpaperboat.com/wp-content/uploads/2020/07/30/51436/national-geographic-10.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
