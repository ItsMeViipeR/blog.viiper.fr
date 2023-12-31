import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/app/db/prisma";

interface Image {
  src: string;
  alt: string;
}

interface RequestBody {
  title: string;
  author: string;
  description: string;
  content: string;
  img: Image;
  category: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toLowerCase() !== "post") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { title, author, description, content, img, category } =
    req.body as RequestBody;

  const categoryId = (await prisma?.category.findFirst({
    where: {
      name: category,
    },
  }))!.id;

  try {
    await prisma.article.create({
      data: {
        title,
        author,
        description,
        content,
        imgSrc: img.src,
        imgAlt: img.alt,
        categoryId,
      },
    });

    return res.status(200).json({ message: "Article created" });
  } catch (error: any) {
    console.log(`Error message: ${error.message}`);
    return res.status(500).json({ message: error.message });
  }
}
