import { lazy } from "react";

const apps = [
  {
    id: "home",
    name: "Home",
    Component: lazy(() => import("app-auth/Component")),
  },
];

export default apps;
