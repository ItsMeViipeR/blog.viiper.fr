"use client";

import { signIn } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer transition-colors duration-100"
      onClick={() => signIn()}
    >
      Login
    </button>
  );
};
