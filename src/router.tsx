import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AppProvider } from "./providers";
import { AppLayout, AuthLayout } from "./layouts";
import { ROUTE_PATH } from "./constants";
import { CreateForm, FormFiller, Forms, Login, NotFound } from "./pages";

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
        {
          element: <AppLayout />,
          children: [
            {
              element: <Forms />,
              path: ROUTE_PATH.app.forms,
            },
            {
              element: <CreateForm />,
              path: ROUTE_PATH.app.createForm,
            },
            {
              element: <FormFiller />,
              path: ROUTE_PATH.app.formFiller,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
