import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import { AppProvider } from "./providers";
import { AuthLayout } from "./layouts";
import { ROUTE_PATH } from "./constants";
import { Login, NotFound } from "./pages";

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <AppProvider />,
      children: [
        {
          path: "*",
          element: <Navigate to={ROUTE_PATH.notFound} />,
        },
        {
          path: ROUTE_PATH.notFound,
          element: <NotFound />,
        },
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
