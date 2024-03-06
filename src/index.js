import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Layout from "./Layout/Layout";
import Contact from "./UI/Contact";
import Services from "./UI/Services";
import Portfolio from "./UI/Portfolio";
import "aos/dist/aos.css";

function AppLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
