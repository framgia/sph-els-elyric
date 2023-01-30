import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories, updateCategoryData } from "../../api/api";
import _ from "lodash";
import { useToast } from "../../hooks/useToast";
import { useParams } from "react-router-dom";

const pageSize = 5;

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [paginatedCategories, setPaginatedCategories] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [showEdit, setShowEdit] = useState(false);
  const [title, setTitle] = useState("New Title");
  const [description, setDescription] = useState("New Description");
  const { showToast } = useToast();
  const { categoryID } = useParams();

  useEffect(() => {
    getCategories().then((category) => {
      setCategories(category);
      setPaginatedCategories(_(category).slice(0).take(pageSize).value());
    });
  }, []);

  const pageCount = categories ? Math.ceil(categories.length / pageSize) : 0;
  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);

  const tableHeaderClass =
    "text-md font-large text-gray-800 px-6 py-4 text-left border";
  const tableData =
    "text-md text-gray-900 font-lightbold px-6 py-4 whitespace-nowrap border";
  const addWordClass =
    "px-4 py-2 text-gray-100 bg-blue-400 hover:bg-blue-600 rounded-full";
  const editClass =
    "px-4 py-2 text-gray-100 bg-green-400 hover:bg-green-600 rounded-full";
  const deleteClass =
    "px-4 py-2 text-gray-100 bg-red-400 hover:bg-red-600 rounded-full";
  const list =
    "grid place-items-center w-12 h-12 text-lg border border-gray-300 hover:bg-blue-200 rounded-full cursor-pointer";
  const selectedList =
    "grid place-items-center w-12 h-12 text-xl font-bold border  bg-blue-500 text-white rounded-full";
  const prevNext =
    "grid place-items-center h-12 px-3 text-lg border border-gray-300 hover:bg-blue-200 cursor-pointer rounded-md";

  const pagination = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const paginatedCategory = _(categories)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedCategories(paginatedCategory);
  };
  const previousPage = () => {
    const thisPage = currentPage - 1;
    setCurrentPage(thisPage);
    const startIndex = (thisPage - 1) * pageSize;
    const paginatedCategory = _(categories)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedCategories(paginatedCategory);
  };
  const nextPage = () => {
    const thisPage = currentPage + 1;
    setCurrentPage(thisPage);
    const startIndex = (thisPage - 1) * pageSize;
    const paginatedCategory = _(categories)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginatedCategories(paginatedCategory);
  };

  const handleEdit = (e) => {
    setShowEdit(true);
  };
  const handleUpdate = async () => {
    const data = {
      title,
      description,
    };
    const response = await updateCategoryData(categoryID, data);
    setShowEdit(false);
    showToast("success", response.message);
  };
  return (
    <div className="relative">
      <div className="w-full grid place-items-center">
        <div className="w-full lg:flex lg:flex-col lg:items-center px-0 md:px-10 overflow-hidden bg-blue-100">
          <div className="sm:w-full lg:w-[1000px] xl:w-[1200px] relative bg-gradient-to-b from-[#617EFF] to-[#34B3F9] p-2 rounded-tl-xl rounded-tr-xl overflow-scroll lg:overflow-auto  scrollbar-hide mt-20 mb-3">
            <div className="relative flex items-center justify-evenly py-8">
              <div className="absolute left-5 font-bold text-xl">
                Categories
              </div>
              <div className="absolute right-5 font-semibold text-lg py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-md shadow-lg cursor-pointer">
                <Link to="/admin/categories/add">Add Category</Link>
              </div>
            </div>
            <table className="w-full">
              <thead className="bg-white border-b border">
                <tr>
                  <th className={tableHeaderClass}>Title</th>
                  <th className={tableHeaderClass}>Description</th>
                  <th className={tableHeaderClass}>Action</th>
                </tr>
              </thead>
              {/* DATA LIST  */}
              {!showEdit && (
                <tbody>
                  {categories.length > 0 ? (
                    paginatedCategories.map((category) => (
                      <tr
                        key={category.id}
                        className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100"
                      >
                        <td className={tableData}>
                          <Link>{category.title}</Link>
                        </td>
                        <td className={tableData}>
                          <Link>{category.description}</Link>
                        </td>
                        <td className={tableData}>
                          <div className="flex gap-3">
                            <Link
                              to={`/admin/categories/${category.id}/question/add`}
                              className={addWordClass}
                            >
                              Add Word
                            </Link>
                            <Link
                              to={`/admin/categories/${category.id}/edit`}
                              className={editClass}
                              value={category.title}
                              onClick={handleEdit}
                            >
                              Edit
                            </Link>
                            <Link className={deleteClass}>Delete</Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-center">
                      <td className="py-4" colSpan={3}>
                        No Categories created please create one.
                      </td>
                    </tr>
                  )}
                </tbody>
              )}

              {/* EDIT TABLE  */}
              {showEdit && (
                <tbody>
                  <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                    <td className={tableData}>
                      <input
                        className="w-full pl-2 py-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </td>
                    <td className={tableData}>
                      <input
                        className="w-full pl-2 py-2"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </td>
                    <td className="flex items-center gap-3 pl-5 py-5">
                      <Link className={addWordClass} onClick={handleUpdate}>
                        Update Category
                      </Link>
                      <Link
                        to="/admin/categories"
                        className={deleteClass}
                        onClick={() => setShowEdit(!showEdit)}
                      >
                        X
                      </Link>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
            <div className="w-full relative flex items-center justify-end py-5">
              <div className="left-auto flex gap-2 p-2 bg-gray-50 overflow-scroll  scrollbar-hide rounded-lg">
                <div onClick={() => previousPage()} className={prevNext}>
                  Previous
                </div>
                {!showEdit && (
                  <>
                    {pages.map((page, index) => (
                      <div
                        onClick={() => pagination(page)}
                        key={index}
                        className={page === currentPage ? selectedList : list}
                      >
                        {page}
                      </div>
                    ))}
                  </>
                )}
                {showEdit && (
                  <>
                    <div className={selectedList}>1</div>
                  </>
                )}
                <div onClick={() => nextPage()} className={prevNext}>
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
