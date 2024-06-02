
import "./section-header.css"

import PropTypes from "prop-types";

const SectionHeader = ({title}) => {
	return (
		<div className="section-header">
			<h2>{title}</h2>
		</div>
	);
};


SectionHeader.propTypes = {
	title: PropTypes.string.isRequired,
	score: PropTypes.string.isRequired
  };

export default SectionHeader;