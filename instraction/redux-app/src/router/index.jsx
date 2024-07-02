import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import HomePage from "../pages/home-page";
import AboutPage from "../pages/about-page";
import BlogPage from "../pages/blog-page";
import ContactPage from "../pages/contact-page";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage/>
      },
      {
        path: "blog",
        element: <BlogPage/>
      },
      {
        path: "contact",
        element: <ContactPage/>
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />
};

export default AppRouter
