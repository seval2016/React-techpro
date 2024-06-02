import "./experience.css";
import PropTypes from "prop-types";

const Experience = ({ company, title, date, desc, index }) => {
  return (
    <div className="col-md-12 col-sm-12 col-xs-12">
      <div className={`${index === 0 && "top-item"} resume-item`}>
        <h2>{company}</h2>
        <span>
          {title} | {date}
        </span>
        <p>{desc}</p>
      </div>
    </div>
  );
};

Experience.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default Experience;
