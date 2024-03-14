import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from "./Pages/Menu/menu";
import Menu2 from "./Pages/Menu2/menu2";
import Contact from './Pages/Contact/contact';
import Order from './Pages/Order/order';
import Order2 from './Pages/Order2/Order2';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/menu2",
      element: <Menu2 />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/order2",
      element: <Order2 />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
  {basename: "/spicy-cupz"}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

