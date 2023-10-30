import Wind from "../../../assets/Wind.svg";
import Hum from "../../../assets/Hum.svg";
import Rain from "../../../assets/Rain.svg";
import "./style.scss";
import { useState, useEffect } from "react";

function Main({ weatherData, isCelsius }) {
    const [weather, setWeather] = useState(weatherData);

    useEffect(() => {
        setWeather(weatherData);
    }, [weatherData]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear().toString().slice(-2);
        return `${day}${getOrdinalSuffix(day)} ${month} ‘${year}`;
    };

    const getOrdinalSuffix = (number) => {
        if (number >= 11 && number <= 13) {
            return "th";
        }
        const lastDigit = number % 10;
        switch (lastDigit) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
        }
    };

    const formatTime = (timeString) => {
        return new Date(timeString).toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: false });
    };

    return (
        <div className="main">
            <div className="temperature">
                <p>{ weather.current && (isCelsius ? Math.round(weather.current.temp_c) : Math.round(weather.current.temp_f) ) }</p>
                <span> { isCelsius ? "° C" : " ° F" }</span>
            </div>
            <div className="date">
                <p>{ weather.location && weather.location.localtime ? formatDate(weather.location.localtime) : "Date N/A" }</p>
            </div>
            <div className="day-time">
                <p>
                    { weather.location && weather.location.localtime
                        ? `Thursday | ${formatTime(weather.location.localtime)}`
                        : "Time N/A" }
                </p>
            </div>
            <div className="additional-info">
                <ul>
                    <li>
                        <img src={ Wind } alt="wind" />
                        { weather.current && weather.current.wind_kph
                            ? `Wind ${weather.current.wind_kph} km/h`
                            : "Wind N/A" }
                    </li>
                    <li>
                        <img src={ Hum } alt="hum" />
                        { weather.current && weather.current.humidity
                            ? `Hum ${weather.current.humidity} %`
                            : "Hum N/A" }
                    </li>
                    <li className="last-li">
                        <img src={ Rain } alt="rain" />
                        { weather.current && weather.current.precip_mm
                            ? `Rain ${weather.current.precip_mm} %`
                            : "Rain N/A" }
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Main;
