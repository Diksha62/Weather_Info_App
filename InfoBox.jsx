import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({ infos }) {
    const INIT_URL = "https://images.unsplash.com/photo-1633458942455-a52fabc1b5fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL= "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    let info = {
        city:  "Greenland",
        humidity: 85,
        temp: 10.17,
        tempMax: 15.44,
        tempMin: 7.26,
        weather: "few clouds",
    };

    return (
        <div className="infoBox">
            <div className='cardcontainer' style={{display:'flex',justifyContent:'center'}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={infos.humidity > 80 ? RAIN_URL : infos.temp > 15 ? HOT_URL : COLD_URL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {infos.city}{
                                infos.humidity > 80 ? <ThunderstormIcon/> : infos.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <span>
                                <p>Temperature={infos.temp}</p>
                                <p>Humidity={infos.humidity}</p>
                                <p>Min_Temperature={infos.tempMin}</p>
                                <p> Max_Temperature={infos.tempMax}</p>
                                <p>The weather can be described as {infos.weather} and feels like {infos.temp}</p>
                            </span>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
