import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Services from "./Pages/Home/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Services />,
      },
    ],
  },
]);
export default router;
