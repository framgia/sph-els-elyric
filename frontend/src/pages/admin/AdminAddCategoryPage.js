import React, { useState } from "react";
import { useToast } from "../../hooks/useToast";
import { addCategory } from "../../api/api";

export default function AdminAddCategoryPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addCategory(title, description);
      setTitle("");
      setDescription("");
      showToast("success", response.message);
    } catch (error) {
      showToast("error", error);
    }
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            className="bg-gray-50 pl-2 py-2 border border-gray-300 rounded-md"
          />
          <label className="text-md font-semibold">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            rows={5}
            className="bg-gray-50 pl-2 py-2 border border-gray-300 rounded-md"
          />
          <button className="grid bg-blue-400 hover:bg-blue-500 py-4 rounded-lg my-10 text-xl text-white font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
