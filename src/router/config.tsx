
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Datenschutz from "../pages/datenschutz/page";
import Impressum from "../pages/impressum/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/datenschutz",
    element: <Datenschutz />,
  },
  {
    path: "/impressum",
    element: <Impressum />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;