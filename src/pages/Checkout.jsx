import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const orderPlaced = (e) => {
    e.preventDefault();
    alert("Order Placed");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Checkout</h1>
      <form className="flex flex-col items-center" onSubmit={orderPlaced}>
        <div className="flex flex-col">
          <label>
            Name:
            <input type="text" required></input>
          </label>
          <label>
            Address:
            <input type="text" required></input>
          </label>
          <label>
            Email
            <input type="email" required></input>
          </label>
          <label>
            Contact No.
            <input type="number" required></input>
          </label>
          <label>
            Address
            <input type="text" required></input>
          </label>
        </div>
        <button
          className="flex border-2 bg-gray-500 p-2 text-white"
          type="submit"
        >
          Place Order
        </button>
      </form>
      <div>
        <h4>Total Quantity: {totalQuantity}</h4>
        <h4>Total Amount: ₹{totalAmount}</h4>
      </div>
    </div>
  );
};

export default Checkout;
