import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import useAuth from "../../useAuth/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const Header = () => {
  const [logoutButton, setLogoutButton] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigateToCart = () => {
    navigate("/cart");
  };

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="flex justify-around w-full">
        <div className="flex gap-12 w-full mr-16 justify-end items-center">
          {currentUser && (
            <div className="flex items-start text-xl">
              <BsCart2
                onClick={navigateToCart}
                className="hover:cursor-pointer w-8 h-8"
              />
              <div className="bg-red-500 rounded-xl text-white w-6 h-6 flex justify-center items-center">
                {totalQuantity}
              </div>
            </div>
          )}
          <span>
            <BiUserCircle
              className="w-8 h-8 hover:cursor-pointer"
              onClick={() => setLogoutButton(!logoutButton)}
            />
          </span>
          {currentUser && (
            <button
              className={`text-white bg-gray-500 p-2 rounded-xl transition-opacity ${
                logoutButton ? "opacity-100" : "opacity-0"
              }`}
            >
              <Link
                to="/login"
                onClick={logout}
                className="text-white no-underline"
              >
                Logout
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
