import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method?.toLowerCase() !== "delete") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.body as { id: number };

  const articlesInCategory = await prisma?.article.findMany({
    where: {
      categoryId: id,
    },
  });

  try {
    try {
      articlesInCategory?.forEach(async (article) => {
        await prisma?.article.delete({
          where: {
            id: article.id,
          },
        });
      });
    } catch (error: any) {
      return res.status(500).json({ message: "Failed to delete article" });
    }

    await prisma?.category.delete({
      where: {
        id,
      },
    });
  } catch (error: any) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
}
