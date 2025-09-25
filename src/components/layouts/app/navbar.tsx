import type { FC } from "react";

import { Icons } from "@/components/ui";

export const Navbar: FC = () => {
  return (
    <div className="fixed top-0 right-0 w-full py-6 bg-natural-300">
      <div className="container mx-auto">
        <Icons.Power className="cursor-pointer" />
      </div>
    </div>
  );
};
