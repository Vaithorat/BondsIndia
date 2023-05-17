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
    <div className="flex flex-col">
      <h1>Checkout</h1>
      <form className="flex" onSubmit={orderPlaced}>
        <div className="flex flex-col">
          <label>
            <h5>Name:</h5>
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
            <input type="tel" required></input>
          </label>
          <label>
            Address
            <input type="text" required></input>
          </label>
        </div>
        <div>
          <h4>Total Quantity: {totalQuantity}</h4>
          <h4>Total Amount: ₹{totalAmount}</h4>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
