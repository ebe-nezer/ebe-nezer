import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../page/home";
import Layout from "@components/layout";

const RootNavigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<h1>laoding</h1>} />;
};

export default RootNavigation;
