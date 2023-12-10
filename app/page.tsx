import { ArticleLoader } from "@/components/ArticleLoader";

export default async function Home() {
  return (
    <div className="flex justify-center items-center pt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"></div>
    </div>
  );
}
