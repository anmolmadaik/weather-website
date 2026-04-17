import { convertTimestamptoTime } from "../js/convertUnitToLocalTime";
import "../css/HourlyRow.css";

export default function HourlyRow({ time, temp, weather, icon, desc }) {
  return (
    <div className="hourly-header-left">
      <img
        src={`https://openweathermap.org/payload/api/media/file/${icon}.png`}
        alt="Weather Icon"
      />

      <div className="hourly-row">
        <div className="hourly-main">
          {convertTimestamptoTime(time).slice(15, 21)} • {Math.round(temp)}°C
        </div>

        <div className="hourly-weather">{weather}</div>
        <div className="hourly-desc">{desc}</div>
      </div>
    </div>
  );
}
