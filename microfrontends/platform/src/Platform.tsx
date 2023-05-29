import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import apps from "./apps";
import App from "./App";
import Shell from "./Shell";

const Platform = () => {
  const fallback = <Navigate to={apps[0].id} />;

  const appRoutes = (
    <>
      {apps.map(({ id, Component }) => (
        <Route key={id} path={id} element={<App component={Component} />} />
      ))}
      <Route index element={fallback} />
      <Route path="*" element={fallback} />
    </>
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Shell />}>
          {appRoutes}
        </Route>
      </>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Platform;
