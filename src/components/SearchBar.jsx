import { useState, useEffect, useContext } from "react";
import "../css/SearchBar.css";
import { usePlaceContextObject } from "../context/PlaceContext.jsx";
import { v4 as uuidv4 } from "uuid";
import get_place from "../services/getPlace.jsx";

const key = import.meta.env.VITE_API_KEY_PLACE;

export default function SearchBar() {
  let [text, setText] = useState("");
  let [suggestion, setSuggestions] = useState([]);
  let [selected, setSelected] = useState(false);

  const { place, latitude, longitude, weather_id, dispatch } =
    usePlaceContextObject();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!selected) {
        get_place(text, key, setSuggestions);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [text]);

  useEffect(() => {
    setSuggestions([]);
  }, [selected]);

  function setCoords(place, latitude, longitude) {
    setText(place);
    dispatch({
      type: "PLACE_UPDATE",
      place: place,
      latitude: latitude,
      longitude: longitude,
    });
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          required
          placeholder="search"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setSelected(false);
          }}
        ></input>
        <div className="suggestions">
          {suggestion.map((s) => (
            <li
              key={uuidv4()}
              onClick={(e) => {
                setCoords(s.place, s.latitude, s.longitude);
                setSelected(true);
              }}
              className="suggestion-item"
            >
              {" "}
              {s.place}{" "}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}
