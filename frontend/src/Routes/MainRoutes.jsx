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
      path: "/detail/:id",
      element: <SingleDetailPage />,
    }

  ];

  const AdminPath = [];

  return (
    <Routes>
      {PageRoutes.map((ele, key) => (
        <Route
          key={key}
          path={ele.path}
          element={
            <>
              {/* <Navbar /> {ele.element} <Footer /> */}
              {ele.element}
            </>
          }
        />
      ))}

      {AdminPath.map((ele, key) => (
        <Route key={key} path={ele.path} element={<>{ele.element}</>} />
      ))}

    </Routes>
  );
};
