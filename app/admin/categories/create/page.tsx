import { CategoryCreateForm } from "@/components/CategoryCreateForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

export default async function AdminCategoriesCreate() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.email === adminEmail;

  return (
    <>
      {isAdmin ? (
        <CategoryCreateForm></CategoryCreateForm>
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
