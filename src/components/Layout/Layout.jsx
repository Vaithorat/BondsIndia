import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";

const Layout = () => {
  const location = useLocation();
  const hideHeader =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideHeader && <Header />}
      <div>
        <Routers />
      </div>
    </div>
  );
};

export default Layout;
