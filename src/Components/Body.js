import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Sigin from "./Signin";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Sigin></Sigin>
    },
    {
      path: '/browse',
      element: <Browse></Browse>
    }
  ]);
  return (
    <div>
     <RouterProvider router ={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
