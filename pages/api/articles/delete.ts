import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toLowerCase() !== "delete") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.body;

  try {
    await prisma.article.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Article deleted" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
