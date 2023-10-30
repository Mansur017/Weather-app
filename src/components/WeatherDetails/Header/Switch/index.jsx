import "./style.scss";

function Switch({ isCelsius, setisCelsius }) {

    const chooseFahrenheit = () => {
        if (isCelsius) {
            setisCelsius(false);
        }
    };

    const chooseCelsius = () => {
        if (!isCelsius) {
            setisCelsius(true);
        }
    };

    return (
        <div className="switch">
            <button 
                onClick={ chooseCelsius } 
                type="button" 
                className={ isCelsius ? "button-c active" : "button-c" }
            >
                C
            </button>
            <button 
                onClick={ chooseFahrenheit } 
                type="button" 
                className={ !isCelsius ? "button-f active" : "button-f" }
            >
                F
            </button>
        </div>
    );
}

export default Switch;
