import React from "react";
import Card from "react-bootstrap/Card"; /*npm install react-bootstrap bootstrap */
import { FaStar } from "react-icons/fa"; /* npm install react-icons */
import "./product.scss";

const Product = ({ title, image, price, discount, rate }) => {

  const renderStars = (rate) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} color={i <= rate ? "#7A9C1C" : "lightgray"} />
      );
    }
    return stars;
  };

  const discountedPrice = price - (price * discount);
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <div>{renderStars(rate)}</div>
        <Card.Title className="my-2">{title}</Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center gap-2 my-3">
            {discount > 0 && (
              <div className="discountedPrice">
                ${price.toFixed(2)}
              </div>
            )}
            <div className="price">
              ${discountedPrice.toFixed(2)}
            </div>
          </div>
          {discount > 0 && <div className="discount">-{discount * 100}%</div>}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
