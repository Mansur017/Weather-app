import { useState, useEffect } from "react";
import Sunny from "../../../assets/WeatherIcons/Sunny.png";
import Snow from "../../../assets/WeatherIcons/Snow.png";
import Storm from "../../../assets/WeatherIcons/Storm.png";
import Cloudy from "../../../assets/WeatherIcons/Cloudy.png";
import PartyCloudy from "../../../assets/WeatherIcons/PartyCloudy.png";
import Mist from "../../../assets/WeatherIcons/Mist.png";
import PatchyRainPossible from "../../../assets/WeatherIcons/PatchyRainPossible.png";
import PatchySnowPossible from "../../../assets/WeatherIcons/PatchySnowPossible.png";
import FreezingDrizzle from "../../../assets/WeatherIcons/FreezingDrizzle.png";
import HeavySnow from "../../../assets/WeatherIcons/HeavySnow.png";
import Blizzard from "../../../assets/WeatherIcons/Blizzard.png";
import FreezingFog from "../../../assets/WeatherIcons/FreezingFog.png";
import PatchyLightDrizzle from "../../../assets/WeatherIcons/PatchyLightDrizzle.png";
import Rain from "../../../assets/WeatherIcons/Rain.png";
import RainWithThunder from "../../../assets/WeatherIcons/RainWithThunder.png";
import Line from "../../../assets/Line 17.svg";

import "./style.scss";

function Footer({ cityProps, setWeatherData, isCelsius }) {
    const [temperaturesArray, setTemperaturesArray] = useState([]);
    const [showRemainingDays, setShowRemainingDays] = useState(false);

    const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const API_KEY = "bcb7715d81e54bb99c7171945231510";
    const city = cityProps;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7`;

    let imgSrc;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    const forecastArray = data.forecast.forecastday.map(item => {
                        switch (item.day.condition.text) {
                            
                        case "Sunny":
                            imgSrc = Sunny;
                            break;
                        case "Partly cloudy":
                            imgSrc = PartyCloudy;
                            break;
                        case "Cloudy":
                            imgSrc = Cloudy;
                            break;
                        case "Overcast":
                            imgSrc = Cloudy;
                            break;
                        case "Mist":
                            imgSrc = Mist;
                            break;
                        case "Patchy rain possible":
                            imgSrc = PatchyRainPossible;
                            break;
                        case "Patchy snow possible":
                            imgSrc = PatchySnowPossible;
                            break;
                        case "Patchy sleet possible":
                            imgSrc = PatchyRainPossible;
                            break;
                        case "Patchy freezing drizzle possible":
                            imgSrc = HeavySnow;
                            break;
                        case "Thundery outbreaks possible":
                            imgSrc = Storm;
                            break;
                        case "Blowing snow":
                            imgSrc = Blizzard;
                            break;
                        case "Blizzard":
                            imgSrc = Blizzard; 
                            break;
                        case "Fog":
                            imgSrc = Mist; 
                            break;
                        case "Freezing fog":
                            imgSrc = FreezingFog;
                            break;
                        case "Patchy light drizzle":
                            imgSrc = PatchyLightDrizzle;
                            break;
                        case "Light drizzle":
                            imgSrc = PatchyLightDrizzle;
                            break;
                        case "Freezing drizzle":
                            imgSrc = FreezingDrizzle;
                            break;
                        case "Heavy freezing drizzle":
                            imgSrc = Snow;
                            break;
                        case "Patchy light rain":
                            imgSrc = FreezingDrizzle;
                            break;
                        case "Light rain":
                            imgSrc = FreezingDrizzle; 
                            break;
                        case "Moderate rain at times":
                            imgSrc = PatchyRainPossible;
                            break;
                        case "Moderate rain":
                            imgSrc = PatchyRainPossible;
                            break;
                        case "Heavy rain at times":
                            imgSrc = Rain;
                            break;
                        case "Heavy rain":
                            imgSrc = Rain;
                            break;
                        case "Light freezing rain":
                            imgSrc = Rain;
                            break;
                        case "Moderate or heavy freezing rain":
                            imgSrc = Rain;
                            break;
                        case "Light sleet":
                            imgSrc = FreezingDrizzle;
                            break;
                        case "Moderate or heavy sleet":
                            imgSrc = FreezingDrizzle;
                            break;
                        case "Patchy light snow":
                            imgSrc = FreezingDrizzle;
                            break;
                        case "Light snow":
                            imgSrc = FreezingDrizzle; 
                            break;
                        case "Patchy moderate snow":
                            imgSrc = Snow;
                            break;
                        case "Moderate snow":
                            imgSrc = Snow;
                            break;
                        case "Patchy heavy snow":
                            imgSrc = HeavySnow;
                            break;
                        case "Heavy snow":
                            imgSrc = HeavySnow;
                            break;
                        case "Ice pellets":
                            imgSrc = HeavySnow;
                            break;
                        case "Light rain shower":
                            imgSrc = PatchyLightDrizzle;
                            break;
                        case "Moderate or heavy rain shower":
                            imgSrc = Rain;
                            break;
                        case "Torrential rain shower":
                            imgSrc = Rain;
                            break;
                        case "Light sleet showers":
                            imgSrc = Rain;
                            break;
                        case "Moderate or heavy sleet showers":
                            imgSrc = Rain;
                            break;
                        case "Light snow showers":
                            imgSrc = FreezingDrizzle;
                            break;
                        case "Moderate or heavy snow showers":
                            imgSrc = FreezingFog;
                            break;
                        case "Light showers of ice pellets":
                            imgSrc = FreezingFog;
                            break;
                        case "Moderate or heavy showers of ice pellets":
                            imgSrc = FreezingFog;
                            break;
                        case "Patchy light rain with thunder":
                            imgSrc = RainWithThunder;
                            break;
                        case "Moderate or heavy rain with thunder":
                            imgSrc = RainWithThunder;
                            break;
                        case "Patchy light snow with thunder":
                            imgSrc = RainWithThunder;
                            break;
                        default:
                            imgSrc = Cloudy;
                        }
                        return {
                            graduis: Math.round(item.day.avgtemp_c),
                            fahrenheit: Math.round(item.day.avgtemp_f),
                            day: new Date(item.date).toLocaleString("en-US", { weekday: "short" }),
                            imgSrc: imgSrc,
                        };
                    });
                    setTemperaturesArray(forecastArray);
                    setWeatherData(data);
                }
            });
    }, [url]);

    const toggleRemainingDays = () => {
        setShowRemainingDays(prevState => !prevState); 
    };

    let daysToDisplay = [];
    
    if (showRemainingDays) {
        daysToDisplay = temperaturesArray.slice(3);
    } else {
        daysToDisplay = temperaturesArray.slice(0, 4);
    }

    return (
        <div className="footer">
            { daysToDisplay.map((item, index) => {
                return (
                    <div className="footer-forecast-box" key={ index }>
                        <p>{ isCelsius ? `${item.graduis}°C` : `${item.fahrenheit}°F` }</p>
                        <img src={ item.imgSrc } alt="cloud" />
                        <span>{ daysOfWeek[index + (showRemainingDays ? 3 : 0)] }</span>
                    </div>
                );
            }) }
            <div>
                <button onClick={ toggleRemainingDays }>
                    <img className="line-icon" src={ Line } alt="#" />
                </button>
            </div>
        </div>
    );
}

export default Footer;
