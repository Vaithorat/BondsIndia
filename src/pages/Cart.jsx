import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const titles = ["Images", "Title", "Price", "Quantity", "Delete"];
  return (
    <div className="flex flex-col">
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
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
              <Tr item={item} key={index} />
            ))}
          </tbody>
        </table>
      )}
      <div className="flex">
        <h4 className="flex items-end w-full ">Total: {totalAmount}</h4>
      </div>
      <button>
        <Link to="/checkout"> Checkout</Link>
      </button>
    </div>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt=""></img>
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <RiDeleteBin6Fill
          className="hover:cursor-pointer"
          onClick={deleteProduct}
        />
      </td>
    </tr>
  );
};

export default Cart;
