import React from "react";
import "./skill.css";


const Skill = ({title, score}) => {
	return (
		<div className="col-md-6 col-sm-6 col-xs-12 item">
			<div className="skill-info clearfix">
				<h3 className="pull-left">{title}</h3>
				<span className="pull-right">{score}%</span>
			</div>
			<div className="progress">
				<progress
					className="progress-bar"
					aria-valuenow={score}
					aria-valuemin="0"
					aria-valuemax="100"
					style={{ width: `${score}%` }}
				></progress>
			</div>
		</div>
	);
};

export default Skill;