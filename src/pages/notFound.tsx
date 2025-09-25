import { Button, Paragraph } from "@/components/ui";
import { ROUTE_PATH } from "@/constants";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center flex-col justify-center h-dvh gap-7">
      <Paragraph>this page does not exist</Paragraph>
      <Button
        onClick={() => navigate(ROUTE_PATH.app.questions)}
        className="p-3 h-12"
      >
        back to home
      </Button>
    </div>
  );
};
