"use client";

import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default function Home() {
  const session = useSession();
  const isAdmin = session.data?.user?.email === adminEmail;

  return (
    <>
      {isAdmin ? (
        <div className="flex justify-center items-center pt-6">
          <div className="flex flex-row gap-6"></div>
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
