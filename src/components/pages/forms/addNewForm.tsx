import { Icons, Paragraph } from "@/components/ui";

export const AddNewForm = () => {
  return (
    <div>
      <Paragraph variant="title2" className="mb-3">add new form</Paragraph>
      <div className="size-20 transition rounded-lg flex items-center justify-center border border-natural-300 bg-natural-300 cursor-pointer hover:border-natural-700">
        <Icons.Plus size={35} className="" />
      </div>
    </div>
  );
};
