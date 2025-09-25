import { Outlet } from "react-router-dom";

import ReactQuery from "./reactQuery";

export const AppProvider = () => {
  return (
    <ReactQuery>
      <Outlet />
    </ReactQuery>
  );
};
