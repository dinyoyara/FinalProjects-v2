interface Customer {
  id: string;
  name: string;
  email: string;
}

export interface AppProps {
  customer?: Customer;
}
