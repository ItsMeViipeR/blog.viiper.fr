import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/app/db/prisma";
import { ArticlePreviewAdmin } from "@/components/ArticlePreviewAdmin";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default async function AdminArticles() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.email === adminEmail;
  const articles = await prisma.article.findMany();

  return (
    <>
      {isAdmin ? (
        <div className="flex justify-center items-center pt-6">
          <div className="grid gap-6">
            <a href="/admin/articles/write" className="btn btn-primary">
              Write a new article
            </a>

            {articles.map(async (article) => {
              const articleCategory = await prisma?.category.findFirst({
                where: { id: article.categoryId },
              });

              return (
                <div className="flex justify-center items-center pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <ArticlePreviewAdmin
                      id={article.id}
                      key={article.id}
                      title={article.title}
                      description={article.description}
                      img={
                        article.imgSrc !== null
                          ? { src: article.imgSrc, alt: article.imgAlt }
                          : undefined
                      }
                      category={articleCategory?.name!}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>
          You are not an admin.{" "}
          <a href="/" className="md:text-blue-700 md:p-0 md:dark:text-blue-500">
            Return to home
          </a>
        </h1>
      )}
    </>
  );
}
