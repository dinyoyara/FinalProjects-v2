import { useContext } from "react";
import { CustomerContext } from "./customer";

function useCustomer() {
  return useContext(CustomerContext);
}

export default useCustomer;
