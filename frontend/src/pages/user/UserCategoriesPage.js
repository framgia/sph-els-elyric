import { getUserCategories, getTakenCategory } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [taken, setTaken] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await getUserCategories();
      setCategories(response);

      const responseTaken = await getTakenCategory();
      setTaken(responseTaken.data);
    };
    fetch();
  }, []);

  return (
    <div>
      <div className="sm:w-full grid place-items-center bg-blue-100">
        <div className="w-full lg:flex lg:flex-col lg:items-center px-0 md:px-10 overflow-hidden bg-blue-200 border border-l-gray-400 border-r-gray-400 rounded-xl">
          <div className="w-full relative bg-gradient-to-b from-[#617EFF] to-[#34B3F9] mt-20 p-2 rounded-tl-xl rounded-tr-xl border-2 border-blue-400 overflow-scroll lg:overflow-auto  scrollbar-hide">
            <h1 className="text-2xl font-bold">Categories</h1>
          </div>
          <div className="w-full border border-l-blue-400 border-r-blue-400 rounded-bl-lg rounded-br-lg mb-10">
            <div className="grid lg:gap-1 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
              {categories.map((category, index) => (
                <div
                  className="bg-gray-100 sm:max-w-[500px] md:max-w-[400px] lg:max-w-[500px] p-5 m-5 border border-gray-400 rounded-lg shadow-lg"
                  key={index}
                >
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p>{category.description}</p>
                  <div className="flex justify-end">
                    <Link
                      to={`${category.id}/answer`}
                      className="text-2xl font-semibold text-gray-200 hover:text-gray-100 mt-7 px-12 py-2 bg-blue-400 hover:bg-blue-500 border border-blue-500 rounded-lg"
                    >
                      Start
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
