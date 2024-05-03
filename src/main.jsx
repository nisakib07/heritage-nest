import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Buyer from "./Pages/Buyer/Buyer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchResult from "./Pages/SearchResult/SearchResult";
import Details from "./Pages/Details/Details";
import AboutUs from "./Pages/AboutUs/AboutUs";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/buyer",
        element: <Buyer></Buyer>,
      },
      {
        path: "/search-result",
        element: <SearchResult></SearchResult>,
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>{" "}
  </React.StrictMode>
);
