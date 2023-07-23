import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signin } from "../Pages/Signin";
import { Signup } from "../Pages/Signup";
import Cart from "../Pages/Cart";
import MyLearningPage from "../Pages/myLearning/MyLearninigPage";
import SingleVideoPage from "../Pages/singleVideo/SingleVideoPage";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";
import { SingleDetailPage } from "../Pages/SingleDetailPage";
import { AdminHomepage } from "../Pages/Admin/AdminPage";
import Footer from "../Components/Footer";
import { Navbar } from "../Components/Navbar";

import Homepage from "../Pages/Homepage";

import { AdminSignup } from "../Pages/AdminSignup";
import { AdminSignin } from "../Pages/AdminSignin";


export const MainRoutes = () => {
  const PageRoutes = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/mylearning",
      element: <MyLearningPage />,
    },
    {
      path: "/singlevideo/:id",
      element: <SingleVideoPage />,
    },
    {
      path: "/detail/:courseId",
      element: <SingleDetailPage />,
    },

    {
      path: "/homepage",
      element: <Homepage />,
    },
  ];

  const AdminPath = [
    {
      path: "/admin",
      element: <AdminHomepage />,
    },

    {
      path: "/admin-signup",
      element: <AdminSignup />,
    },
    {
      path: "/admin-signin",
      element: <AdminSignin />,
    },
  ];

  return (
    <Routes>
      {PageRoutes.map((ele, key) => (
        <Route
          key={key}
          path={ele.path}
          element={
            <>
              <Navbar /> {ele.element} <Footer />
              {/* {ele.element}  */}
            </>
          }
        />
      ))}

      {AdminPath.map((ele, key) => (
        <Route key={key} path={ele.path} element={
          <>
            {ele.element}
          </>
        } 
        />
      ))}
    </Routes>
  );
};
