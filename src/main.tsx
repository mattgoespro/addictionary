import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={App} />
);
