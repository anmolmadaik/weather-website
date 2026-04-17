import SearchBar from "./SearchBar";
import { usePlaceContextObject } from "../context/PlaceContext";
import InformationTile from "./InformationTile";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { set_background } from "../js/setBackground";
import get_weather from "../services/getWeather";
import "../css/HomeView.css";

const key = import.meta.env.VITE_API_KEY_WEATHER;

export default function HomeView() {
  const { place, latitude, longitude, weather_id, dispatch } =
    usePlaceContextObject();
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    set_background(String(weather_id));
  }, [weather_id]);

  useEffect(() => {
    if (latitude && longitude) {
      setLoading(true);
      get_weather(latitude, longitude, key, dispatch, setWeather, setLoading);
    }
  }, [place]);

  return (
    <div className="home-container">
      <SearchBar />

      {loading ? (
        <Loading text="Fetching weather details" />
      ) : (
        place &&
        weather?.current && (
          <div className="layout-container">
            <InformationTile weather={weather} />
          </div>
        )
      )}
    </div>
  );
}
