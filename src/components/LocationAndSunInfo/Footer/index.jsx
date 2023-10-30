import "./style.scss";


function Footer({ weatherData }) {
    const uv = weatherData.current && weatherData.current.uv;
    const uvLevel = uv ? Math.round(uv) : 0;

    const airQuality = weatherData.current && weatherData.current.uv;
    const airQualityLevel = airQuality ? Math.round(airQuality / 2) : 0;

    return (
        <div className="additional-info-container">
            <div>
                <h2>Air Quality</h2>
                <div className="colorful-bar">
                    <div className="colorful-container">
                        <div className={ `dot-air air-level-${airQualityLevel}` }></div>
                        <p>{ `${airQualityLevel}/5` } <br />Moderate</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>UV Index</h2>
                <div className="colorful-bar">
                    <div className="colorful-container">
                        <div className={ `dot-uv uv-level-${uvLevel}` }></div>
                        <p>{ `${uv}/10` } <br />High</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Footer;
