import React from "react";
import ReactDOM from "react-dom/client";
import Platform from "./components/Platform.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Platform />
    </BrowserRouter>
  </React.StrictMode>
);
