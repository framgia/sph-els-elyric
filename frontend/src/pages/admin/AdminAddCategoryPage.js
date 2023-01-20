import React, { useState } from "react";

export default function AdminAddCategoryPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <div className="flex justify-center w-full h-full mt-10">
                <form
                    onSubmit={handleSubmit}
                    className="grid gap-8 bg-white w-[500px] px-7 shadow-lg rounded-xl border"
                >
                    <h3 className="font-semibold text-xl pt-5">Add Category</h3>

                    <label className="text-md font-semibold">Title</label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        className="bg-gray-50 pl-2 py-2 border border-gray-300 rounded-md"
                    />
                    <label className="text-md font-semibold">Description</label>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        rows={5}
                        className="bg-gray-50 pl-2 py-2 border border-gray-300 rounded-md"
                    />
                    <button className="grid bg-blue-500 py-4 rounded-lg my-10 text-xl text-white font-semibold">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
