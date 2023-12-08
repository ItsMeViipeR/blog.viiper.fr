"use client";

import { useSession } from "next-auth/react";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default function Home() {
  const session = useSession();
  const isAdmin = session.data?.user?.email === adminEmail;

  return (
    <>
      {isAdmin ? (
        <div className="flex justify-center items-center pt-6">
          <div className="flex flex-row gap-6">
            <a href="/admin/articles" className="btn btn-primary">
              Articles
            </a>
            <a href="/admin/categories" className="btn btn-primary">
              Categories
            </a>
            <a href="/admin/tags" className="btn btn-primary">
              Tags
            </a>
          </div>
        </div>
      ) : (
        <h1>
          You are not an admin.{" "}
          <a href="/" className="md:text-blue-700 md:p-0 md:dark:text-blue-500">
            Return to home
          </a>
        </h1>
      )}
    </>
  );
}
