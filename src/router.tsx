import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppProvider } from "./providers";
import { AuthLayout } from "./layouts";
import { ROUTE_PATH } from "./constants";
import { Login } from "./pages";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <AppProvider />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              element: <Login />,
              path: ROUTE_PATH.auth.login,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
