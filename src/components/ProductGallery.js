import React, { useEffect } from "react";

const ProductGallery = (props) => {
  const { item } = props;

  return (
    <>
      <div>
        <img className="cardImg" src={item.thumbnail} />
      </div>
      <div>
        <h3 style={{ margin: "0" }}>{item.productName}</h3>
        <h6 style={{ margin: "0" }}>{item.description}</h6>
        <h4 style={{ margin: "0 0 30px 0" }}>{item.price}</h4>
      </div>
    </>
  );
};

export default ProductGallery;
