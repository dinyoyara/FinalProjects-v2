import { useContext } from "react";
import { CustomerContext } from "./customer";

function useCustomerContext() {
  return useContext(CustomerContext);
}

export default useCustomerContext;
