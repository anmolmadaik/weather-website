import { convertTimestamptoTime } from "../js/convertUnitToLocalTime";
import "../css/WeeklyRow.css";

export default function WeeklyRow({ time, temp, min, max, weather, icon }) {
  return (
    <div className="weekly-card">
      <div className="weekly-left">
        <div className="weekly-day">
          {convertTimestamptoTime(time).slice(0, 11)}
        </div>

        <div className="weekly-main">
          <img
            src={`https://openweathermap.org/payload/api/media/file/${icon}.png`}
            alt="Weather Icon"
          />
          <div className="weekly-temp">{Math.round(temp)}°C</div>
        </div>

        <div className="weekly-weather-text">{weather}</div>
      </div>

      <div className="weekly-right">
        <div className="weekly-max">↑ {Math.round(max)}°</div>
        <div className="weekly-min">↓ {Math.round(min)}°</div>
      </div>
    </div>
  );
}
