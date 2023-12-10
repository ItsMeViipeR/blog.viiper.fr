import prisma from "@/app/db/prisma";
import { ArticlePreview } from "./ArticlePreview";

export async function ArticleLoader() {
  const articles = await prisma.article.findMany();

  return (
    <>
      {articles.map(async (article) => {
        const articleCategory = await prisma?.category.findFirst({
          where: { id: article.categoryId },
        });

        return (
          <ArticlePreview
            key={article.id}
            id={article.id}
            title={article.title}
            description={article.description}
            img={
              article.imgSrc !== null
                ? { src: article.imgSrc, alt: article.imgAlt }
                : undefined
            }
            category={articleCategory?.name!}
          />
        );
      })}
    </>
  );
}
