import { Paragraph } from "@/components/ui";
import type { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 mb-8">
      <div className="size-24 rounded-full flex items-center justify-center bg-gray-50">
        {/* <Image src={MainLogo} alt="logo" className="w-[71px] animate-jump-in" /> */}
      </div>
      <div className="flex flex-col items-center gap-2">
        <Paragraph className="text-gray-500" variant="body2">
          Welcome to the questionnaire website
        </Paragraph>

        <Paragraph variant="body2">Login to your account</Paragraph>
      </div>
    </div>
  );
};
