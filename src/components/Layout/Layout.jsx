import React from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";

const Layout = () => {
  const hideHeader = window.location.pathname === "/login";
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
