import Styles from "./WeatherDayCard.module.css";


let WeatherDayCard = ({selected, setSelected, dayWeather}) => {
    console.log(dayWeather.dt);
    const date = new Date (dayWeather.dt * 1000);
    const day = date.toLocaleString('en-US', {weekday: 'short'});
    console.log(dayWeather);
    return (
        <div onClick={ () => setSelected(dayWeather)} className={`${Styles['card-container']} ${selected && Styles['card-selected']}`}>
            <span className={Styles['card-day-heading']}>{day}</span>
            <img className={Styles['card-icon']} alt={dayWeather.weather[0].description} src={`http://openweathermap.org/img/wn/${dayWeather.weather[0].icon}@4x.png`} />
            <div className={Styles['card-temp-footer']}>
                <h3>{Math.round(dayWeather.temp.max)}°</h3>
                <h5>{Math.round(dayWeather.temp.min)}°</h5>
            </div>
        </div>
    )
}

export default WeatherDayCard;