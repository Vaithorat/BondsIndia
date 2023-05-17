import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
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
        <div>
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </div>
        <h2>{item.price}</h2>
        <div>
          <button onClick={addToCart}>Buy Now</button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
