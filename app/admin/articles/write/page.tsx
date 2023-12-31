import prisma from "@/app/db/prisma";
import { WriteForm } from "@/components/ArticleWriteForm";

export default async function AdminArticleWrite() {
  const categories = await prisma.category.findMany();

  return <WriteForm categories={categories} />;
}
