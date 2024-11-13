import React, { useEffect, useState } from "react";
import "../../styles/clock.scss";
import moment from "moment";

const Clock3 = ({ textColor, bgColor, hideTime }) => {
	const [dateTime, setDateTime] = useState(moment());

	const dateStr = dateTime.format("LL");
	const dayStr = dateTime.format("dddd");
	const hour = dateTime.format("HH");
	const minute = dateTime.format("mm");
	const second = dateTime.format("ss");

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

	useEffect(() => { //mounting de çalışacak
		const timer = setInterval(() => {
			setDateTime(moment());
		}, 1000);

		return () => { //unmounting de çalışacak  
			clearInterval(timer);
		};
	}, []);

	console.log("Hello");

	return (
		<div className="clock-container" style={style}>
			{hideTime || (
				<div className="time">
					{hour}
					<span style={{ opacity: second % 2 }}>:</span>
					{minute}
				</div>
			)}
			<div>
				<div className="date">{dateStr}</div>
				<div className="day">
					{dayStr}, {message}
				</div>
			</div>
		</div>
	);
};

export default Clock3;