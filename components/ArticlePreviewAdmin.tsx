"use client";

import ky from "ky";
import { redirect } from "next/navigation";

interface Image {
  src: string | null;
  alt: string | null;
}

interface ArticlePreviewProps {
  id: number;
  title: string;
  description: string;
  img?: Image;
  category: string;
}

export const ArticlePreviewAdmin = (props: ArticlePreviewProps) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      {props.img !== undefined && (
        <figure className="h-64">
          <img
            src={props.img?.src!}
            alt={props.img?.alt!}
            className="object-cover aspect-video h-full"
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <span className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-center px-2.5 py-0.5">
          <p className="whitespace-nowrap text-sm">{props.category}</p>
        </span>
        <div className="card-actions justify-end mt-2">
          <a
            className="btn btn-primary"
            href={`/admin/articles/edit/${props.id}`}
          >
            Edit
          </a>
          <button
            className="btn btn-error"
            onClick={() => {
              ky.delete("/api/articles/delete", { json: { id: props.id } });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
