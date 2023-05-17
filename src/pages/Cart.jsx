import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const titles = ["Images", "Title", "Price", "Quantity", "Delete"];

  const disableCheckout = cartItems.length === 0;

  const deleteProduct = (itemId) => {
    dispatch(cartActions.deleteItem(itemId));
  };

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      {cartItems.length === 0 ? (
        <h1 className="flex justify-center">Cart is empty</h1>
      ) : (
        <table className="w-full mx-24">
          <thead>
            <tr>
              {titles.map((title, index) => (
                <th className="px-4 py-2" key={index}>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.imgUrl} alt="" />
                </td>
                <td>{item.productName}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <RiDeleteBin6Fill
                    className="hover:cursor-pointer"
                    onClick={() => deleteProduct(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex">
        <h4 className="flex justify-evenly w-full">Total: ₹{totalAmount}</h4>
      </div>
      {!disableCheckout && (
        <button>
          <Link
            className="text-white bg-gray-500 p-2 no-underline"
            to="/checkout"
          >
            Checkout
          </Link>
        </button>
      )}
    </div>
  );
};

export default Cart;
