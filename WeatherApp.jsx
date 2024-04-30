import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
useState
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:  "Greenland",
        humidity: 85,
        temp: 10.17,
        tempMax: 15.44,
        tempMin: 7.26,
        weather: "few clouds",
    });

let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);

}

return(
    <div>
        <h2 style={{display:'flex',justifyContent:'center'}}>Weather App By Diksha</h2>
        <SearchBox  updateInfo={updateInfo}/>
        <InfoBox infos={weatherInfo}/>
        </div>
); 
}