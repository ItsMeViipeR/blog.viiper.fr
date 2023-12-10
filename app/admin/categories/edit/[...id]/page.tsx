import { CategoryEditForm } from "@/components/CategoryEditForm";

interface EditProps {
  params: {
    id: number[];
  };
  searchParams: Object;
}

export default async function Edit(props: EditProps) {
  const id = props.params.id[0];

  const category = await prisma?.category.findUnique({
    where: {
      id: Number(id),
    },
  });

  return (
    <div className="flex items-center justify-center">
      <CategoryEditForm id={category?.id!} name={category?.name!} />
    </div>
  );
}
