import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return <p>{JSON.stringify(session, null, 2)}</p>;
  }

  return (
    <div className="flex justify-center items-center pt-6">
      <div className="flex flex-row gap-6"></div>
    </div>
  );
}
