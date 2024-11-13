import PropTypes from "prop-types";
import "./product-card.scss";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <h3>{props.title}</h3>
      <p>{props.children}</p>
      <h5>{props.price}</h5>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProductCard;
