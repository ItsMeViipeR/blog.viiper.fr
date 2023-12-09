"use client";

import ky from "ky";

interface Image {
  src: string | null;
  alt: string | null;
}

interface Article {
  id: number;
  title: string;
  description: string;
  img?: Image;
  content: string;
}

export function EditForm(article: Article) {
  return (
    <div className="w-full max-w-2xl max-h-xl">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            defaultValue={article?.title!}
          ></input>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            defaultValue={article?.description!}
            rows={10}
            cols={10}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="content"
            placeholder="Content"
            defaultValue={article?.content!}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="src"
          >
            Image Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="src"
            type="text"
            placeholder="Image link"
            defaultValue={article?.img?.src!}
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
            defaultValue={article?.img?.alt!}
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
              const description = (
                document.getElementById("description") as HTMLInputElement
              ).value;
              const content = (
                document.getElementById("content") as HTMLInputElement
              ).value;
              const src = (document.getElementById("src") as HTMLInputElement)
                .value;
              const alt = (document.getElementById("alt") as HTMLInputElement)
                .value;

              ky.post(`/api/articles/edit/${article.id}`, {
                json: {
                  id: article.id,
                  title,
                  description,
                  content,
                  img: {
                    src: src !== "" ? src : null,
                    alt: alt !== "" ? alt : null,
                  },
                },
              });
            }}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
