import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound/index";

const routerLinks = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const router = createBrowserRouter([...routerLinks]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
