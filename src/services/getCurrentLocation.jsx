
const key = import.meta.env.VITE_API_KEY_PLACE;

export default async function getCurrentLocation(dispatch,setLoading) {
    setLoading(true);
  try {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const result = await fetch(
        `https://api.maptiler.com/geocoding/${position.coords.longitude},${position.coords.latitude}.json?key=${key}`,
        {
          headers: {
            Origin: "localhost:5173",
          },
        },
      );
      const result_json = await result.json();
      dispatch({
        type: "PLACE_UPDATE",
        place: result_json.features[0].place_name,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setLoading(false);
      return true;
    });
  } catch {
    setLoading(false);
    return false;
  }
}
