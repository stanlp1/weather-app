import { useEffect, useState } from "react";
import { getLatLon, getWeatherFromCoord } from "../Services/weatherApi";
import Styles from "./Weather.module.css";
import WeatherDayCard from "./WeatherDayCard";

let Weather = () => {
    const [city, setCity] = useState("Beverly hills");
    const [currentCity, setCurentCity] = useState("Beverly Hils");
    const [selectedWeather, setSelectedWeather] = useState();
    const [weather, setWeather] = useState();
    useEffect(() => {
        getLatLon(city)
                .then( (jsonResponse) => {
                    setCurentCity(jsonResponse.name);
                    getWeatherFromCoord(jsonResponse.coord.lat, jsonResponse.coord.lon).then( (weatherData) =>{
                        setSelectedWeather(weatherData.current);
                        setWeather(weatherData);});
                });
    }, [city]);

    return (
        <div className={Styles['app-container']}>
            <input onKeyDown={(e) => {
                if (e.code === "Enter")
                {
                    console.log("Test");  
                    e.preventDefault();
                    setCity(e.target.value);
                }
            }} placeholder="Search City" className={Styles['city-input']} />
            {weather && 
            <div className={Styles['weather-header']}>
                <div className={Styles['weather-header-temp']}>
                <img alt={selectedWeather.weather[0].description} src={`http://openweathermap.org/img/wn/${selectedWeather.weather[0].icon}@4x.png`}/>
                <span className={Styles['current-weather-temp']}>{typeof selectedWeather.temp === 'object' ? Math.round(selectedWeather.temp.max)  : Math.round(selectedWeather.temp)}°</span>
                </div>
                <div className={Styles['weather-header-info']}>
                    <div className={Styles['current-city']}>{currentCity}</div>
                    <div className={Styles['current-day']}>{new Date (selectedWeather.dt * 1000).toLocaleString('en-US', {month: "long", day: "numeric", weekday: "long"})}</div>
                    <div className={Styles['current-weather-description']}> {selectedWeather.weather[0].description} </div>
                </div>
            </div>}
            <body>
                <div className={Styles['card-container']}>
                {weather && weather.daily.map( (day, index) => <WeatherDayCard key={index} selected={day === selectedWeather} setSelected={setSelectedWeather} dayWeather={day}/>)}
                </div>
            </body>
        </div>
    )
}

export default Weather;