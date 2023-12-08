import prisma from "@/app/db/prisma";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

const googleId = process.env.GOOGLE_ID!;
const googleSecret = process.env.GOOGLE_SECRET!;
const nextAuthSecret = process.env.NEXTAUTH_SECRET!;

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: googleId,
      clientSecret: googleSecret,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: nextAuthSecret,
};
