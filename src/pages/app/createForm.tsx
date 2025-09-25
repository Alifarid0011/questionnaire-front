import { Input } from "@/components/ui";

export const CreateForm = () => {
  return (
    <div className="container mx-auto">
      <div className="w-[700px] mx-auto">
        <div className="border-t-8 border-primary-20 rounded-t-lg">
          <Input
            className="placeholder:text-2xl text-2xl border-0"
            inputParent={{
              className: "border-0 border-b border-gray-400 rounded-none",
            }}
            placeholder="form title"
          />
          <Input
            className="placeholder:text-sm text-xl border-0"
            inputParent={{
              className: "border-0 border-b border-gray-400 rounded-none",
            }}
            placeholder="form description"
          />
        </div>
      </div>
    </div>
  );
};
