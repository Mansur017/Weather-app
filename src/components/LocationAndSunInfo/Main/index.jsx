import { useState, useEffect } from "react";
import moment from "moment";
import Clock from "../../../assets/clock.svg";
import "./style.scss";

function Main({ city, weatherData }) {
    const [sunData, setSunData] = useState({});

    useEffect(() => {
        const fetchSunData = () => {
            fetch(
                `https://api.sunrise-sunset.org/json?lat=${weatherData.location.lat}&lng=${weatherData.location.lon}&date=today`
            )
                .then(response => response.json())
                .then(data => setSunData(data.results));
        };

        if (weatherData.location) {
            fetchSunData();
        }
    }, [city, weatherData]);

    
    const formatTime = (time) => {
        if (!time) return "";
        const date = moment(time, "h:mm:ss A").toDate();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    };
    
    
    return (
        <div className="main-block">
            <div className="times-of-day">
                <span>Sunrise</span>
                <p>Golden Hour</p>
                <span>Sunset</span>
            </div>
            <div className="clocks">
                <div>
                    <img src={ Clock } alt="clock" />
                    <p>{ formatTime(sunData.sunrise) }</p>
                    <span>{ formatTime(sunData.sunrise) }</span>
                </div>
                <div className="golden-hour">
                    <img src={ Clock } alt="clock" />
                    <p>{ formatTime(sunData.solar_noon) }</p>
                    <span>{ formatTime(sunData.solar_noon) }</span>
                </div>
                <div>
                    <img src={ Clock } alt="clock" />
                    <p>{ formatTime(sunData.sunset) }</p>
                    <span>{ formatTime(sunData.sunset) }</span>
                </div>
            </div>
            <hr />
            <nav>i</nav>
        </div>
    );
}

export default Main;
