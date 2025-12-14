import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Root from '../pages/Root';
import Banner from '../components/Banner';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Apps from '../pages/Apps';
import AppDetails from '../pages/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element:<Home></Home>,
      },
      {
        path:"/apps",
        element:<Apps></Apps>
      },
      {
        path:"/app/:id",
        element:<AppDetails></AppDetails>
      }
    ]
  },
]);