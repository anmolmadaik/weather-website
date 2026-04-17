import { usePlaceContextObject } from "../context/PlaceContext";
import DayDetails from "./DayDetails";
import HourlyDetails from "./HourlyDetails";
import WeeklyDetails from "./WeeklyDetails";
import { convertTimestamptoTime } from "../js/convertUnitToLocalTime";
import "../css/InformationTile.css";

export default function InformationTile({ weather }) {
  const { place } = usePlaceContextObject();

  return (
    <div className="info-wrapper">
      <div className="info-top-row">
        <div className="info-side info-left">
          <HourlyDetails weather={weather.hourly} />
        </div>

        <div className="info-main-tile">
          <div className="info-main-top">
            <img
              className="info-weather-icon"
              src={`https://openweathermap.org/payload/api/media/file/${weather.current.weather[0].icon}.png`}
              alt="Weather Icon"
            />

            <div className="info-location">{place}</div>

            <div className="info-temp-section">
              <div className="info-temp">
                {Math.round(weather.current.temp)}°C
              </div>
              <div className="info-feels">
                Feels like {Math.round(weather.current.feels_like)}°C
              </div>
            </div>
          </div>

          <div className="info-time">
            {convertTimestamptoTime(weather.current.dt).slice(15, 21)}
          </div>

          <div className="info-weather-details">
            <div className="info-main-desc">
              {weather.current.weather[0].main}
            </div>
            <div className="info-sub-desc">
              {weather.current.weather[0].description}
            </div>
          </div>
        </div>

        <div className="info-side info-right">
          <WeeklyDetails weather={weather.daily} />
        </div>
      </div>

      <div className="info-bottom">
        <DayDetails weather={weather.current} />
      </div>
    </div>
  );
}
