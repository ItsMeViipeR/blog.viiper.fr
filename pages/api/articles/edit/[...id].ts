import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toLowerCase() !== "post") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id, title, description, content, img } = req.body;

  try {
    const article = await prisma.article.findFirst({
      where: {
        id,
      },
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    console.log(article);

    await prisma.article.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        description: description,
        content: content,
        imgSrc: img.src,
        imgAlt: img.alt,
      },
    });

    return res.status(200).json({ message: "Article updated" });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}
