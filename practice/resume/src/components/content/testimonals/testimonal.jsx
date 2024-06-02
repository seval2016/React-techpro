import "./testimonal.css";
import PropTypes from "prop-types"; 

const Testimonal = ({ image, name, message }) => {
  return (
    <div className="item">
      <div className="row">
        <div className="col-md-2 col-sm-2 hidden-xs">
          <div className="thumb">
            <img src={`/images/${image}`} alt="testimonial-customer" />
          </div>
        </div>
        <div className="text col-md-10 col-sm-10 col-xs-12">
          <p>{message}</p>
          <span className="author">- {name} -</span>
        </div>
      </div>
    </div>
  );
};
Testimonal.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
  message:PropTypes.string.isRequired
  };
export default Testimonal;
