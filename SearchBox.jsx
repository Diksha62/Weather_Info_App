import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="d0986670216b3a3710f4a6b580d1dd0a";

    let getWeatherInfo = async() => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse= await response.json();
        
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
    
        };
        console.log(result);
        return result;
    } catch(err) {
       throw err;
    }
    
};
   let handleChnage= (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
        console.log(city);
        setCity("");
        const newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="SearchBox" style={{display:'flex',justifyContent:'center'}} >
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City_Name" variant="outlined" 
        required value={city} onChange={handleChnage}/>
        <br></br><br></br>
        <div></div>
        <Button variant="contained" type='submit' color="success" style={{marginLeft:"55px",marginBottom: "20px", justifyContent: "center"}}>Search</Button>
{error && <p>No such places exist!</p>}
        </form>
        </div>
            
    )

}