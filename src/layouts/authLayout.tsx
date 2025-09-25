import type { FC } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = () => {
  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden animate-fade animate-duration-300 bg-natural-200">
      <Outlet />
    </div>
  );
};
