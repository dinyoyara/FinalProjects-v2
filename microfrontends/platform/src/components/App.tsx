import { FC, Suspense } from "react";
import { AppComponentProps } from "../type";

interface AppProps {
  component: FC<AppComponentProps>;
}

const App: FC<AppProps> = ({ component: Component }) => {
  return (
    <Suspense fallback="Loading app ...">
      <Component />
    </Suspense>
  );
};

export default App;
