import React from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { Container, Row } from "reactstrap";
import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const links = ["home", "cart"];
const Header = () => {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className="flex ">
      <Container>
        <Row>
          <div className="flex">
            <div>
              <h1>Bonds India</h1>
            </div>
            <div>
              <ul className="flex justify-evenly gap-12">
                {links.map((item, index) => (
                  <li key={index}>
                    <NavLink to={item}>{item.toUpperCase()}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-12 w-20">
              <div>
                <BsCart2
                  onClick={navigateToCart}
                  className="hover:cursor-pointer"
                />
                {totalQuantity}
              </div>
              <span>
                <BiUserCircle />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
