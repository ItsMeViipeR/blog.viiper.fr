import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, name } = req.body as { id: number; name: string };

  try {
    const category = await prisma?.category.findFirst({
      where: {
        id,
      },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    await prisma?.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return res.status(200).json({ message: "Category edited." });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
