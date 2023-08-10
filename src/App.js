import React from "react";
import "./App.css";
import Feed from "./compo/Feed";
import { data } from "./compo/data";
import Intro from "./compo/intro";
import ButtonGroup from "./compo/Join";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from "./compo/Footer";
import NewsletterSubscription from "./compo/JoinUS";
import JoinAteam from "./compo/JoinAteam";
import Hacker from "./compo/Hacker";
import Home from "./Home";
import UserAuthModal from "./compo/authentication";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/join",
    element: <JoinAteam />,
  },
  {
    path: "/hacker",
    element: <Hacker />,
  },
  {
    path: "/auth",
    element: <UserAuthModal />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
