import { getServerSession as NextAuthGetServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react";

export const getServerSession = async () => {
  return await NextAuthGetServerSession(authOptions);
};

export const getSession = () => {
  return useSession();
};
