import { getSession } from "@/app/getSession";

export default async function Home() {
  const session = await getSession();

  if (session) {
    return <p>{JSON.stringify(session, null, 2)}</p>;
  }

  return (
    <div className="flex justify-center items-center pt-6">
      <div className="flex flex-row gap-6"></div>
    </div>
  );
}
