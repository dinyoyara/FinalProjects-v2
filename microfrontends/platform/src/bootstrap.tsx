import React from "react";
import ReactDOM from "react-dom/client";
import Platform from "./Platform.tsx";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import CustomerProvider from "./context/customer.tsx";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CustomerProvider>
        <Platform />
      </CustomerProvider>
    </ApolloProvider>
  </React.StrictMode>
);
