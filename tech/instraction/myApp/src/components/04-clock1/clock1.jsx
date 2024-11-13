import "../../styles/clock.scss";
import moment from "moment";

const Clock1 = () => {
  const dateTime = moment();
  const timeStr = dateTime.format("HH:mm");//saat ve dakika
  const dateStr = dateTime.format("LL"); //tarih
  const dayStr = dateTime.format("dddd");//yıl
  const hour = dateTime.format("HH");//saat

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

  return (
    <div className="clock-container">
      <div className="time">{timeStr}</div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr}, {message}
        </div>
      </div>
    </div>
  );
};

export default Clock1;
