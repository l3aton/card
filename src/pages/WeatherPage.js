import { useEffect, useState } from "react";
import WeatherComponent from "../components/WeatherComponent";
import "../css/WeatherPage.css";

const WeatherPage = () => {
  const [data, setData] = useState(null);
  const [dataFuture, setDataFuture] = useState(null);
  const [value, setValue] = useState('Brovary');

  const handleClick = (e) => {
    setValue(e.target.value);
  }

    useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=4a1a929839839eb7ce329a18170a1f96&lang=ua`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Ошибка:", err));
  }, [value]);
    useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=4a1a929839839eb7ce329a18170a1f96&lang=ua`)
      .then((res) => res.json())
      .then((json) => setDataFuture(json))
      .catch((err) => console.error("Ошибка:", err));
  }, [value]);

  console.log(data);
  console.log(dataFuture)
    return(
        <div>
          <div  className="page-w-cont">
            <h1 className="header-1">Виберіть місто</h1>
              <select value={value} onChange={handleClick} className="selecter">
                <option value="Brovary">Бровари</option>
                <option value="Odesa">Одеса</option>
                <option value="Kyiv">Київ</option>
                <option value="Kharkiv">Харків</option>
                <option value="Cherkasy">Черкаси</option>
              </select>
          </div>
           <WeatherComponent data = {data} dataFuture = {dataFuture}/>
        </div>
    )
}

export default WeatherPage;