import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../layout/Root";
import PreviousWork from "../pages/Previous";
import Contact from "../pages/Contact";

export const config = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <PreviousWork /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
