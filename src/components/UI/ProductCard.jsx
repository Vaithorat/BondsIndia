import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { BsCartPlus } from "react-icons/bs";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
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
        <BsCartPlus />
      </div>
    </Col>
  );
};

export default ProductCard;
