export default async function get_weather(latitude, longitude, key, dispatch, setWeather,setLoading) {
    const weather_result = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}&exclude=minutely,alerts`,
    );
    const result = await weather_result.json();
    dispatch({
        type:"WEATHER_UPDATE",
        weather_id:  result.current.weather[0].id,
    })
    setWeather(result);
    setLoading(false);
  }