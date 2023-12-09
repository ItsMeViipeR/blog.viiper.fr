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

            {articles.map((article) => (
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
              />
            ))}
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
