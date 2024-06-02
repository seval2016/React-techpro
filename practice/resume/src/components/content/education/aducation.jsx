import "./education.css";
import PropTypes from "prop-types";

const Education = ({ title, date, desc, index }) => {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className={`${index === 0 && "top-item"} resume-item`}>
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

Education.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default Education;
