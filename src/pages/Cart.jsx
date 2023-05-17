import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <table className="w-full mx-24">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <Tr item={item} key={index} />
            ))}
          </tbody>
        </table>
      )}
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
