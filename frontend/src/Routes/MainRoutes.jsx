import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signin } from "../Pages/Signin";
import { Signup } from "../Pages/Signup";
import Cart from "../Pages/Cart";
import MyLearningPage from "../Pages/myLearning/MyLearninigPage";
import SingleVideoPage from "../Pages/singleVideo/SingleVideoPage";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";

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

      {/* <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/buyproduct" element={<Buyproduct />} />
      <Route path="/buyproduct/:id" element={<SingleProduct />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="/adminsignin" element={<AdminSignin />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/adminProperty" element={<Property />} />
      <Route path="/addProperty" element={<AddProperty />} />
      <Route path="/editProperty/:id" element={<EditProperty />} /> */}
    </Routes>
  );
};
