import Expandable from "./Expandable";
import { RIGHT, DOWN } from "../js/constants";
import "../css/WeeklyDetails.css";
import WeeklyRow from "./WeeklyRow";
import { convertTimestamptoTime } from "../js/convertUnitToLocalTime";

export default function WeeklyDetails({ weather }) {
  return (
    <div className="weekly-list">
      <Expandable
        title="8 Days Hourly Details"
        direction={RIGHT}
        default_visibility={true}
      >
        {weather.map((w) => {
          return (
            <Expandable
              key={w.dt}
              direction={DOWN}
              title={
                <WeeklyRow
                  time={w.dt}
                  temp={w.temp.day}
                  min={w.temp.min}
                  max={w.temp.max}
                  weather={w.weather[0].main}
                  icon={w.weather[0].icon}
                />
              }
            >
              <div className="weekly-expanded">
                <div className="weekly-summary">{w.summary}</div>

                <div className="weekly-grid">
                  <div>
                    <span>Morning</span>
                    <span>{Math.round(w.temp.morn)}°C</span>
                  </div>
                  <div>
                    <span>Day</span>
                    <span>{Math.round(w.temp.day)}°C</span>
                  </div>
                  <div>
                    <span>Evening</span>
                    <span>{Math.round(w.temp.eve)}°C</span>
                  </div>
                  <div>
                    <span>Night</span>
                    <span>{Math.round(w.temp.night)}°C</span>
                  </div>

                  <div>
                    <span>Sunrise</span>
                    <span>
                      {convertTimestamptoTime(w.sunrise).slice(15, 21)}
                    </span>
                  </div>
                  <div>
                    <span>Sunset</span>
                    <span>
                      {convertTimestamptoTime(w.sunset).slice(15, 21)}
                    </span>
                  </div>

                  <div>
                    <span>Moonrise</span>
                    <span>
                      {convertTimestamptoTime(w.moonrise).slice(15, 21)}
                    </span>
                  </div>
                  <div>
                    <span>Moonset</span>
                    <span>
                      {convertTimestamptoTime(w.moonset).slice(15, 21)}
                    </span>
                  </div>

                  <div>
                    <span>Clouds</span>
                    <span>{w.clouds}%</span>
                  </div>
                  <div>
                    <span>UV Index</span>
                    <span>{w.uvi}</span>
                  </div>
                </div>

                {w?.rain && (
                  <div className="weekly-extra">Rain: {w.rain["1h"]} mm</div>
                )}

                {w?.snow && (
                  <div className="weekly-extra">Snow: {w.snow["1h"]} mm</div>
                )}
              </div>
            </Expandable>
          );
        })}
      </Expandable>
    </div>
  );
}
