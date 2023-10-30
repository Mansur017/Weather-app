import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.scss";

function WeatherDetails({city, weatherData, setWeatherData}) {

    const [isCelsius, setisCelsius] = useState(true);

    return (
        <div className="weather-details">
            <Header weatherData={ weatherData } isCelsius={ isCelsius } setisCelsius={ setisCelsius } />
            <Main isCelsius={ isCelsius }  weatherData={ weatherData }  />
            <Footer isCelsius={ isCelsius }  setWeatherData={ setWeatherData } cityProps={ city } />
        </div>
    );
}

export default WeatherDetails;




