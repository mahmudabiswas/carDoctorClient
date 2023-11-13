import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Services from "./Pages/Home/Services";
import Login from "./Login/Login";
import SignUP from "./Login/SignUP";
import BookServices from "./Pages/About/BookServices";
import Bookings from "./Pages/About/Bookings";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUP",
        element: <SignUP />,
      },
      {
        path: "/bookServices/:id",
        element: <BookServices />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
    ],
  },
]);
export default router;
