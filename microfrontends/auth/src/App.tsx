import { FC } from "react";
import Home from "./components/Home";
import { AppProps } from "./type";

const App: FC<AppProps> = ({ customer }) => {
  return (
    <>
      <Home customer={customer} />
    </>
  );
};

export default App;
