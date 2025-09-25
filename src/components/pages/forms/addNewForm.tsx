import { Icons, Paragraph } from "@/components/ui";
import { ROUTE_PATH } from "@/constants";
import { useNavigate } from "react-router-dom";

export const AddNewForm = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Paragraph variant="title2" className="mb-3">
        add new form
      </Paragraph>
      <div
        onClick={() => navigate(ROUTE_PATH.app.createForm)}
        className="size-20 transition rounded-lg flex items-center justify-center border border-natural-300 bg-natural-300 cursor-pointer hover:border-natural-700"
      >
        <Icons.Plus size={35} className="" />
      </div>
    </div>
  );
};
