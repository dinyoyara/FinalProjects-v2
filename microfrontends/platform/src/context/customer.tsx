import { createContext, FC, PropsWithChildren, useState } from "react";
import jwt from "jwt-decode";

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

const CustomerContext = createContext<CustomerContextValue>({
  customer: null,
  logout: () => null,
});

const getCustomerFromJWT = (getToken: () => string | null): Customer | null => {
  const token = getToken();
  if (!token) return null;
  return jwt<Customer>(token);
};

const CustomerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [customer, setCustomer] = useState(getCustomerFromJWT(getToken));

  const logout = () => {
    removeToken();
    setCustomer(null);
  };

  const customerContextValue: CustomerContextValue = {
    customer,
    logout,
  };
  return (
    <CustomerContext.Provider value={customerContextValue}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerProvider;
export { CustomerContext };
