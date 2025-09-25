import type { FC } from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/layouts/app";

export const AppLayout: FC = () => {
  return (
    <div className="min-h-dvh animate-duration-300 animate-fade">
      <Navbar />
      <div className="mt-25">
        <Outlet />
      </div>
    </div>
  );
};
