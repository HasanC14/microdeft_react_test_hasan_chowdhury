import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import Blog from "../Component/Blog";
import Layout from "../Layout/Layout";
import BlogCard from "../Component/BlogCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <BlogCard></BlogCard>,
      },
      {
        path: "/login",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
