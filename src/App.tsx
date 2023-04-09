import "./App.css";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<LandingPage />}></Route>)
);

export default router;
