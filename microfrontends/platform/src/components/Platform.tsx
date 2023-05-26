import { useNavigate } from "react-router-dom";
import Header from "./header";

const Platform = () => {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      <Header handleNavigation={handleNavigation} />
      <h1>Help</h1>
    </div>
  );
};

export default Platform;
