import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../page/home";
import Layout from "@components/layout";
import ResumePage from "@pages/resume";

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
        {
          path: "resume",
          element: <ResumePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<h1>laoding</h1>} />;
};

export default RootNavigation;
