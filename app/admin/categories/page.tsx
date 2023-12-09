import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/app/db/prisma";
import { CategoryPreviewAdmin } from "@/components/CategoryPreviewAdmin";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default async function AdminCategories() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.email === adminEmail;
  const categories = await prisma.category.findMany();

  return (
    <>
      {isAdmin ? (
        <div className="flex justify-center items-center pt-6">
          <div className="grid gap-6">
            <a href="/admin/categories/create" className="btn btn-primary">
              Create a new category
            </a>

            <div className="flex justify-center items-center pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <CategoryPreviewAdmin
                    id={category.id}
                    name={category.name}
                    key={category.id}
                  />
                ))}
              </div>
            </div>
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
