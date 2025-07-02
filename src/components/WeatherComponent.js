import '../css/WeatherComponent.css'
import FutureWeather from './FutureWeather';

const WeatherComponent = ({data, dataFuture}) => {
    if (!data) return <p>Завантаження...</p>;
    const imgLink = `https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`
    const temp = ((data.main['temp'])-273.15).toFixed(1);
    const feelsTemp = ((data.main['feels_like'])-273.15).toFixed(1);
    const preasure = data.main['pressure'];
    const humidity = data.main['humidity'];
    const windSpeed = data.wind['speed'];


    console.log(data.weather[0]['icon'])



    return(
        <div className="weather-main">
            <img src={imgLink} alt="icon"  className='weather-img'/>
            <div>
                <p>{data.weather[0]['description']}</p>
                <p>температура: {temp + ' °C'}</p>
                <p>відчувається як: {feelsTemp + ' °C'}</p>
                <p>тиск: {preasure + ' Pa'}</p>
                <p>вологість: {humidity + ' %'}</p>
                <p>швидкість вітру: {windSpeed + ' м/с'}</p>
            </div>
            <FutureWeather data = {dataFuture} className = 'weather-slider'/>

        </div>
    )
}

export default WeatherComponent;