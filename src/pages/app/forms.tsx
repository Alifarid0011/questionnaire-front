import { AddNewForm, Categories, RecentForms } from "@/components/pages/forms";

export const Forms = () => {
  return (
    <div className="container mx-auto flex flex-col gap-13">
      <AddNewForm />
      <RecentForms />
      <Categories />
    </div>
  );
};
