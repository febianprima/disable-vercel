import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://d-is-able.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": `WT9sL6pGzoGhrsimm001JI0rMrB37d901kDFnMX5yuKWKmleLnZz2nQjrgiq7IcQ`,
  },
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
    <Routes />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
