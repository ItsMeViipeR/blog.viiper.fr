"use client";

import ky from "ky";

interface CategoryPreviewProps {
  id: number;
  name: string;
}

export const CategoryPreviewAdmin = (props: CategoryPreviewProps) => {
  return (
    <div className="card w-96 bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <div className="card-actions justify-end mt-2">
          <a
            className="btn btn-primary"
            href={`/admin/categories/edit/${props.id}`}
          >
            Edit
          </a>
          <button
            className="btn btn-error"
            onClick={() => {
              ky.delete("/api/categories/delete", { json: { id: props.id } });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
