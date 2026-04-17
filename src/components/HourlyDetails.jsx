import Expandable from "./Expandable";
import "../css/HourlyDetails.css";
import HourlyRow from "./HourlyRow";

export default function HourlyDetails({ weather }) {
  return (
    <div id="hourly-details">
      <Expandable title="48 Hour Hourly Details" default_visibility={true}>
        <div>
          {weather.map((w) => {
            return (
              <Expandable
                title={
                  <HourlyRow
                    time={w.dt}
                    temp={w.temp}
                    weather={w.weather[0].main}
                    desc={w.weather[0].description}
                    icon={w.weather[0].icon}
                  />
                }
                key={w.dt}
              >
                <div className="hourly-expanded">
                  <div className="hourly-grid">
                    <div>
                      <span>Clouds</span>
                      <span>{w.clouds}%</span>
                    </div>

                    <div>
                      <span>Visibility</span>
                      <span>{w.visibility} m</span>
                    </div>

                    <div>
                      <span>UV Index</span>
                      <span>{w.uvi}</span>
                    </div>

                    <div>
                      <span>Pressure</span>
                      <span>{w.pressure} hPa</span>
                    </div>
                  </div>

                  <div className="hourly-grid-3">
                    <div>
                      <span>Wind</span>
                      <span>{w.wind_speed} m/s</span>
                    </div>

                    <div>
                      <span>Humidity</span>
                      <span>{w.humidity}%</span>
                    </div>

                    <div>
                      <span>Dew</span>
                      <span>{w.dew_point}°C</span>
                    </div>
                  </div>

                  {w?.rain && (
                    <div className="hourly-extra">Rain: {w.rain["1h"]} mm</div>
                  )}

                  {w?.snow && (
                    <div className="hourly-extra">Snow: {w.snow["1h"]} mm</div>
                  )}
                </div>
              </Expandable>
            );
          })}
        </div>
      </Expandable>
    </div>
  );
}
