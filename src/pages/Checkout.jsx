import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div>
      <h1>Checkout</h1>
      <form className="flex">
        <div>
          <label>
            <h5>Name:</h5>
            <input type="text"></input>
          </label>
          <label>
            Address:
            <input type="text"></input>
          </label>
          <label>
            Email
            <input type="email"></input>
          </label>
          <label>
            Contact No.
            <input type="tel"></input>
          </label>
          <label>
            Address
            <input type="text"></input>
          </label>
        </div>
        <div>
          <h4>Total Quantity: {totalQuantity}</h4>
          <h4>Total Amount: {totalAmount}</h4>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
