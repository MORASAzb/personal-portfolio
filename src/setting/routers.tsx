import { lazy } from "react";
const Home = lazy(() => import("../components/Home/Home"));
const About = lazy(() => import("../components/About/About"));
const Project = lazy(() => import("../components/Project/Project"));
const Skills = lazy(() => import("../components/Skills/Skills"));
const Contact = lazy(() => import("../components/Contact/Contact"));


interface MyRoute {
  path: string;
  element: React.ReactNode;
}


const routers : MyRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]

export default routers