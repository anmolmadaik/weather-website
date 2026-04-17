import Expandable from "./Expandable";
import { DOWN } from "../js/constants";
import "../css/DayDetails.css";
import { convertTimestamptoTime } from "../js/convertUnitToLocalTime";

export default function DayDetails({ weather }) {
  console.log(weather);
  return (
    <div id="day-details">
      {" "}
      <Expandable title="Detailed View" direction={DOWN}>
        <div className="day-details">
          <div className="day-grid">
            <div className="day-item">
              <div className="day-label">Sunrise</div>
              <div className="day-value">
                {convertTimestamptoTime(weather.sunrise).slice(15, 21)}
              </div>
            </div>

            <div className="day-item">
              <div className="day-label">Sunset</div>
              <div className="day-value">
                {convertTimestamptoTime(weather.sunset).slice(15, 21)}
              </div>
            </div>

            {weather?.rain && (
              <div className="day-item">
                <div className="day-label">Rain</div>
                <div className="day-value">{weather.rain["1h"]} mm/h</div>
              </div>
            )}

            {weather?.snow && (
              <div className="day-item">
                <div className="day-label">Snow</div>
                <div className="day-value">{weather.snow["1h"]} mm/h</div>
              </div>
            )}

            <div className="day-item">
              <div className="day-label">Clouds</div>
              <div className="day-value">{weather.clouds}%</div>
            </div>

            <div className="day-item">
              <div className="day-label">Visibility</div>
              <div className="day-value">{weather.visibility} m</div>
            </div>

            <div className="day-item">
              <div className="day-label">UV Index</div>
              <div className="day-value">{weather.uvi}</div>
            </div>

            <div className="day-item">
              <div className="day-label">Pressure</div>
              <div className="day-value">{weather.pressure} hPa</div>
            </div>
          </div>

          {/* 3 column row */}
          <div className="day-grid-3">
            <div className="day-item">
              <div className="day-label">Wind Speed</div>
              <div className="day-value">{weather.wind_speed} m/s</div>
            </div>

            <div className="day-item">
              <div className="day-label">Humidity</div>
              <div className="day-value">{weather.humidity}%</div>
            </div>

            <div className="day-item">
              <div className="day-label">Dew</div>
              <div className="day-value">{weather.dew_point}°C</div>
            </div>
          </div>
        </div>
      </Expandable>
    </div>
  );
}
