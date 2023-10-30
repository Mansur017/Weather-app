import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.scss";


function LocationAndSunInfo({city, setCity , weatherData}) {
    return (
        <div className="location-sun-info">
            <Header city={ city } setCity={ setCity } />
            <Main city={ city }  weatherData={ weatherData } />
            <Footer  weatherData={ weatherData } />
        </div>
    );
}

export default LocationAndSunInfo;
