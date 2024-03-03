import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Services from "../pages/Services";
import PreviousWork from "../pages/Previous";
import Contact from "../pages/Contact";

export const config = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/gallery", element: <PreviousWork /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
