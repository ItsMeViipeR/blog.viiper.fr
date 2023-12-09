import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name } = req.body as { name: string };

  await prisma?.category.create({
    data: {
      name,
    },
  });
}
