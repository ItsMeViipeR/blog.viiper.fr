import prisma from "@/app/db/prisma";
import { EditForm } from "@/components/ArticleEditForm";

import { useForm } from "react-hook-form";

interface EditProps {
  params: {
    id: number[];
  };
  searchParams: Object;
}

export default async function Edit(props: EditProps) {
  const id = props.params.id[0];

  const article = await prisma.article.findUnique({
    where: {
      id: Number(id),
    },
  });

  return (
    <div className="flex items-center justify-center">
      <EditForm
        img={{ src: article?.imgSrc!, alt: article?.imgAlt! }}
        title={article?.title!}
        description={article?.description!}
        content={article?.content!}
        id={article?.id!}
      />
    </div>
  );
}
