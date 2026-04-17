export default async function get_place(value, key, setSuggestions) {
    if (value === "") {
      setSuggestions([]);
      return;
    }
    const result = await fetch(
      `https://api.maptiler.com/geocoding/${value}.json?key=${key}&limit=7&autocomplete=true&fuzzyMatch=false`,
    );
    const result_json = await result.json();
    let places = result_json?.features.map((feature) => ({
      place: feature.place_name,
      latitude: feature.center[1],
      longitude: feature.center[0],
    }));
    setSuggestions(places);
  }
