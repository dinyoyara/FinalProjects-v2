import { useNavigate, Outlet } from "react-router-dom";
import Header from "./components/header";

const Shell = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Header handleNavigation={handleNavigation} />
      <Outlet />
    </>
  );
};

export default Shell;
