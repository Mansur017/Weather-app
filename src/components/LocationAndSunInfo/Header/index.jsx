import { useState } from "react";
import Vector from "../../../assets/vector.png";
import Search from "./Search";
import "./style.scss";


function Header({city, setCity}) {

    const [text, setText] = useState(city);

    const handleChange = (event) => {
        setText(event.target.value);
    };


    const enterPress = (event) => {
        if (text) {
            if (event.key === "Enter") {
                setCity(text);
            }
        }
      
    };

    return (
        <div className="navigation">
            <img src={ Vector } alt="maps" />
            <input onKeyDown={ (event) => enterPress(event) } onChange={ (event) => handleChange(event) } type="text" value={ text } />
            <Search text={ text } setCity={ setCity } />
        </div>
    );
}

export default Header;
