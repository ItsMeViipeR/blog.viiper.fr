import prisma from "@/app/db/prisma";
import { ArticlePreview } from "./ArticlePreview";

export async function ArticleLoader() {
  const articles = await prisma.article.findMany();

  return (
    <div className="articles">
      {articles.map((article) => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          description={article.description}
          img={
            article.imgSrc !== null
              ? { src: article.imgSrc, alt: article.imgAlt }
              : undefined
          }
        />
      ))}
    </div>
  );
}
