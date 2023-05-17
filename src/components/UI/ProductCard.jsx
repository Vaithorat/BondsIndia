import React from "react";
import { Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    alert("Product Added to Cart");
  };
  return (
    <Col lg="3">
      <div>
        <div>
          <img src={item.imgUrl} alt="" />
        </div>
        <h4>{item.productName}</h4>
        <h6>₹{item.price}</h6>
        <div>
          <button onClick={addToCart} className="bg-gray-500 text-white p-2">
            Buy Now
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
