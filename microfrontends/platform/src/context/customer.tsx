import { createContext, FC, PropsWithChildren } from "react";
import jwt from "jwt-decode";

//import { handleAxiosError } from "../helpers";
//import axiosClient from "../../services/axios.service";
import { getToken, removeToken } from "../services/storage.service";

export interface Customer {
  id: string;
  name: string;
  email: string;
}

interface CustomerContextValue {
  customer: Customer | null;
  logout: () => void;
}

interface CustomerProviderProps {
  customerContextValue: CustomerContextValue;
}

const getCustomerFromJWT = (getToken: () => string | null) => {
  const token = getToken();
  if (!token) return null;
  return jwt<Customer>(token);
};

const CustomerContext = createContext<CustomerContextValue>({
  customer: getCustomerFromJWT(getToken),
  logout: () => removeToken(),
});

const CustomerProvider: FC<PropsWithChildren<CustomerProviderProps>> = ({
  children,
  customerContextValue,
}) => (
  <CustomerContext.Provider value={customerContextValue}>
    {children}
  </CustomerContext.Provider>
);

export default CustomerProvider;
export { CustomerContext };
