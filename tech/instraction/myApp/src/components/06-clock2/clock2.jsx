
import "../../styles/clock.scss";
import moment from "moment";
import PropTypes from "prop-types";

const Clock2 = ({ textColor, bgColor, hideTime }) => {
	const dateTime = moment();
	const timeStr = dateTime.format("HH:mm");
	const dateStr = dateTime.format("LL");
	const dayStr = dateTime.format("dddd");
	const hour = dateTime.format("HH");

	let message = "";
	if (hour >= 6 && hour < 11) {
		message = "Morning";
	} else if (hour >= 11 && hour < 14) {
		message = "Noon";
	} else if (hour >= 14 && hour < 19) {
		message = "Afternoon";
	} else if (hour >= 19 && hour < 22) {
		message = "Evening";
	} else {
		message = "Night";
	}

	const style = { color: textColor, backgroundColor: bgColor };

	return (
		<div className="clock-container" style={style}>
			{hideTime || <div className="time">{timeStr}</div>}
			<div>
				<div className="date">{dateStr}</div>
				<div className="day">
					{dayStr}, {message}
				</div>
			</div>
		</div>
	);
};

Clock2.propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  hideTime: PropTypes.bool
};

export default Clock2;