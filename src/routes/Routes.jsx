import React from 'react'
import Layout from '../layout/Layout';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
     {
          path:"/",
          element:<Home/>,
          
     }
    ]
  },
]);