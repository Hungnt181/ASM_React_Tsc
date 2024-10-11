import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";

const LayoutAuth = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayoutAuth;
