"use client";

import ky from "ky";

interface Image {
  src: string | null;
  alt: string | null;
}

interface ArticlePreviewProps {
  id: number;
  title: string;
  description: string;
  img?: Image;
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
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary">Edit</button>
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
