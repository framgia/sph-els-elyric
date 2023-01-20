import React from "react";
import { Link } from "react-router-dom";

export default function AdminCategoriesPage() {
    const tableHeaderClass =
        "text-md font-large text-gray-800 px-6 py-4 text-left border";
    const tableData =
        "text-md text-gray-900 font-lightbold px-6 py-4 whitespace-nowrap border";
    const addWordClass = "px-4 py-2 text-gray-100 bg-blue-400 rounded-full";
    const editClass = "px-4 py-2 text-gray-100 bg-green-400 rounded-full";
    const deleteClass = "px-4 py-2 text-gray-100 bg-red-400 rounded-full";
    const list =
        "grid place-items-center w-12 h-12 text-lg border border-gray-300 hover:bg-blue-200 rounded-full cursor-pointer";
    const selectedList =
        "grid place-items-center w-12 h-12 text-xl font-bold border  bg-blue-500 text-white rounded-full";
    const prevNext =
        "grid place-items-center h-12 px-3 text-lg border border-gray-300 hover:bg-blue-200 cursor-pointer rounded-md";

    return (
        <div>
            <div className="w-full grid place-items-center mb-10">
                <div className="w-full mt-20 px-0 md:px-10 overflow-hidden">
                    <div className="w-full relative bg-gradient-to-b from-[#617EFF] to-[#34B3F9] p-2 rounded-tl-xl rounded-tr-xl overflow-scroll lg:overflow-auto  scrollbar-hide">
                        <div className="font-bold text-xl py-5">Categories</div>
                        <table className="w-full">
                            <thead className="bg-white border-b border">
                                <tr>
                                    <th className={tableHeaderClass}>Title</th>
                                    <th className={tableHeaderClass}>
                                        Description
                                    </th>
                                    <th className={tableHeaderClass}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                                    <td className={tableData}>
                                        <Link>Basic 500</Link>
                                    </td>
                                    <td className={tableData}>
                                        <Link>Lorem ipsum dolor sit amet</Link>
                                    </td>
                                    <td className={tableData}>
                                        <div className="flex gap-3">
                                            <Link className={addWordClass}>
                                                Add Word
                                            </Link>
                                            <Link className={editClass}>
                                                Edit
                                            </Link>
                                            <Link className={deleteClass}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                                    <td className={tableData}>
                                        <Link>Basic 500</Link>
                                    </td>
                                    <td className={tableData}>
                                        <Link>Lorem ipsum dolor sit amet</Link>
                                    </td>
                                    <td className={tableData}>
                                        <div className="flex gap-3">
                                            <Link className={addWordClass}>
                                                Add Word
                                            </Link>
                                            <Link className={editClass}>
                                                Edit
                                            </Link>
                                            <Link className={deleteClass}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                                    <td className={tableData}>
                                        <Link>Basic 500</Link>
                                    </td>
                                    <td className={tableData}>
                                        <Link>Lorem ipsum dolor sit amet</Link>
                                    </td>
                                    <td className={tableData}>
                                        <div className="flex gap-3">
                                            <Link className={addWordClass}>
                                                Add Word
                                            </Link>
                                            <Link className={editClass}>
                                                Edit
                                            </Link>
                                            <Link className={deleteClass}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                                    <td className={tableData}>
                                        <Link>Basic 500</Link>
                                    </td>
                                    <td className={tableData}>
                                        <Link>Lorem ipsum dolor sit amet</Link>
                                    </td>
                                    <td className={tableData}>
                                        <div className="flex gap-3">
                                            <Link className={addWordClass}>
                                                Add Word
                                            </Link>
                                            <Link className={editClass}>
                                                Edit
                                            </Link>
                                            <Link className={deleteClass}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                                    <td className={tableData}>
                                        <Link>Basic 500</Link>
                                    </td>
                                    <td className={tableData}>
                                        <Link>Lorem ipsum dolor sit amet</Link>
                                    </td>
                                    <td className={tableData}>
                                        <div className="flex gap-3">
                                            <Link className={addWordClass}>
                                                Add Word
                                            </Link>
                                            <Link className={editClass}>
                                                Edit
                                            </Link>
                                            <Link className={deleteClass}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                                    <td className={tableData}>
                                        <Link>Basic 500</Link>
                                    </td>
                                    <td className={tableData}>
                                        <Link>Lorem ipsum dolor sit amet</Link>
                                    </td>
                                    <td className={tableData}>
                                        <div className="flex gap-3">
                                            <Link className={addWordClass}>
                                                Add Word
                                            </Link>
                                            <Link className={editClass}>
                                                Edit
                                            </Link>
                                            <Link className={deleteClass}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b transition duration-200 ease-in-out hover:bg-gray-100">
                                    <td className={tableData}>
                                        <Link>Basic 500</Link>
                                    </td>
                                    <td className={tableData}>
                                        <Link>Lorem ipsum dolor sit amet</Link>
                                    </td>
                                    <td className={tableData}>
                                        <div className="flex gap-3">
                                            <Link className={addWordClass}>
                                                Add Word
                                            </Link>
                                            <Link className={editClass}>
                                                Edit
                                            </Link>
                                            <Link className={deleteClass}>
                                                Delete
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="relative flex items-center justify-end bg-blue-300 py-10 shadow-lg">
                        <div className="flex gap-2 p-2 bg-gray-50 mx-2 overflow-scroll  scrollbar-hide rounded-lg">
                            <div className={prevNext}>Previous</div>
                            <div className={list}>1</div>
                            <div className={selectedList}>2</div>
                            <div className={list}>3</div>
                            <div className={list}>4</div>
                            <div className={list}>5</div>
                            <div className={list}>6</div>
                            <div className={list}>7</div>
                            <div className={list}>8</div>
                            <div className={list}>9</div>
                            <div className={list}>10</div>
                            <div className={prevNext}>Next</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
