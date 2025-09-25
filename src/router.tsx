import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./providers";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <AppProvider />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
