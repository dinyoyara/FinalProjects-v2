import { FC, Suspense } from "react";
import { AppComponentProps } from "./type";

import useCustomer from "./context/useCustomer";

interface AppProps {
  component: FC<AppComponentProps>;
}

const App: FC<AppProps> = ({ component: Component }) => {
  const { customer } = useCustomer();

  return (
    <Suspense fallback="Loading app ...">
      <Component customer={customer} />
    </Suspense>
  );
};

export default App;
