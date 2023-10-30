import IconSearch from "../../../../assets/search-icon.png";
import "./style.scss";

function Search( {text, setCity}) {


    const chooseCity = () => {
        if (text) {
            setCity(text);
        }
    };

    return (
        <div className="search-component">
            <button onClick={ chooseCity }><img src={ IconSearch } alt="#" /></button> 
        </div>
    );
}

export default Search;
