const API_KEY = process.env.REACT_APP_WEATHERAPIKEY;
console.log(API_KEY);

const getLatLon = async (city) => {
    let url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", city);
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("units", "imperial");

    const response = await fetch(url);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
}

const getWeatherFromCoord = async (lat, lon) => {
    let url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", lon);
    url.searchParams.append("exclude", "minutely");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("units", "imperial");

    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
}

const cityFromCoord = async (lat ,lon) => {
    let url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("lat", lat);
    url.searchParams.append("lon", lon);
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("units", "imperial");

    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse.name;
}

const getCityWeather = async (city) => {
    const [lon, lat] = await getLatLon(city);
    return getWeatherFromCoord(lat, lon);
}


export {getLatLon, getWeatherFromCoord, getCityWeather, cityFromCoord};