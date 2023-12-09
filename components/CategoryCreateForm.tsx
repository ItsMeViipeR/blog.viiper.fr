"use client";

import ky from "ky";

export function CategoryCreateForm() {
  return (
    <div className="w-full max-w-2xl">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            required
          ></input>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn btn-success text-white"
            type="button"
            onClick={() => {
              const name = (document.getElementById("name") as HTMLInputElement)
                .value;

              ky.post("/api/categories/create", {
                json: {
                  name,
                },
              });
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
