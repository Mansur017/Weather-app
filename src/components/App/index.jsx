import { useState, useEffect } from "react";
import LocationAndSunInfo from "../LocationAndSunInfo";
import WeatherDetails from "../WeatherDetails";
import "./style.scss";
import "./reset.css";

function App() {
    const [city, setCity] = useState("Moscow");
    const [weatherData, setWeatherData] = useState({});
    const [loader, setLoader] = useState(true); 

    const fetchWeatherData = (city) => {
        const API_KEY = "a07c89a41ec748feb57161415230111";
        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    setWeatherData(data);
                    setLoader(false);
                }
            });
    };

    useEffect(() => {
        fetchWeatherData(city);
    }, [city]);

    return (
        <div className="App">
            { loader ? (
                <div style={ {
                    display: "flex", 
                    width: "100%", 
                    justifyContent: "center", 
                    alignItems: "center",
                    height: "100vh"
                } }>
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                    <WeatherDetails city={ city } weatherData={ weatherData } setWeatherData={ setWeatherData } />
                    <LocationAndSunInfo city={ city } setCity={ setCity } weatherData={ weatherData } />
                </>
            ) }
        </div>
    );
}

export default App;









