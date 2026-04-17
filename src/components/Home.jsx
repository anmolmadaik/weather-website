import { useEffect, useState } from "react";
import getCurrentLocation from "../services/getCurrentLocation";
import HomeView from "./HomeView";
import { usePlaceContextObject } from "../context/PlaceContext";
import Loading from "./Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(false);
  const { place, latitude, longitude, weather_id, dispatch } =
    usePlaceContextObject();

  useEffect(() => {
    async function getLocation() {
      await getCurrentLocation(dispatch, setLoading);
    }

    try {
      if (!location) {
        setLoading(true);
        getLocation();
        setLocation(true);
      }
    } catch {
      console.log("Unable to catch location");
    }
  }, []);

  return (
    <>
      {loading ? <Loading text={"Fetching user location..."} /> : <HomeView />}
    </>
  );
}
