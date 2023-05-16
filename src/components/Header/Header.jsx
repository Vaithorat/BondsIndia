import React from "react";

import { NavLink } from "react-router-dom";
import "./header.css";
import { Container, Row } from "reactstrap";
import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

const links = ["home", "shop", "cart"];
const Header = () => {
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
                <BsCart2 />
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
