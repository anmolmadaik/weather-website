import { useReducer, createContext, useContext } from "react";

function reducer(state, action) {
  if (action.type === "PLACE_UPDATE") {
    return {
      ...state,
      place: action.place,
      latitude: action.latitude,
      longitude: action.longitude,
    };
  }
  if (action.type === "WEATHER_UPDATE") {
    return {
      ...state,
      weather_id: action.weather_id,
    };
  } else {
    return {
      ...state,
    };
  }
}

const placeContextObject = createContext();

const initialState = {
  place: undefined,
  latitude: undefined,
  longitude: undefined,
  weather_id: undefined,
};

export function PlaceContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <placeContextObject.Provider value={{ ...state, dispatch }}>
        {" "}
        {children}
      </placeContextObject.Provider>
    </>
  );
}

export function usePlaceContextObject() {
  return useContext(placeContextObject);
}
