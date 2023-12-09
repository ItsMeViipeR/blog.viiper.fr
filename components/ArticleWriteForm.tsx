"use client";

import ky from "ky";

interface WriteFormProps {
  categories: {
    id: number;
    name: string;
  }[];
}

export function WriteForm(props: WriteFormProps) {
  return (
    <div className="w-full max-w-2xl">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            required
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Author
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Author"
            required
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder="Description"
            required
          ></input>
        </div>
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Content"
            rows={15}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {props.categories.map((category) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="imgUrl"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Image link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="imgUrl"
            placeholder="Image link"
            type="text"
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="alt"
          >
            Image alt
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="alt"
            type="text"
            placeholder="Image alt"
          ></input>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn btn-success text-white"
            type="button"
            onClick={() => {
              const title = (
                document.getElementById("title") as HTMLInputElement
              ).value;
              const author = (
                document.getElementById("author") as HTMLInputElement
              ).value;
              const description = (
                document.getElementById("description") as HTMLInputElement
              ).value;
              const content = (
                document.getElementById("content") as HTMLInputElement
              ).value;
              const src =
                (document.getElementById("imgUrl") as HTMLInputElement) !== null
                  ? (document.getElementById("imgUrl") as HTMLInputElement)
                      .value
                  : null;
              const alt =
                (document.getElementById("alt") as HTMLInputElement) !== null
                  ? (document.getElementById("alt") as HTMLInputElement).value
                  : null;
              const category = document.querySelector("select");

              ky.post(`/api/articles/write`, {
                json: {
                  title,
                  author,
                  description,
                  content,
                  category: category?.selectedOptions[0].value,
                  img: {
                    src: src !== "" ? src : null,
                    alt: alt !== "" ? alt : null,
                  },
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
