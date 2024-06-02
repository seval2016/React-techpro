
import PropTypes from "prop-types";

const Welcome = (props) => {
  console.log(props);

  return (
    <div style={{ color: props.textColor }}>
      <h2>
        Welcome {props.firstName} {props.lastName}
      </h2>
    </div>
  );
};

Welcome.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	textColor: PropTypes.string,
  };

export default Welcome;
