import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    return ( 
        <div className="header">
            <div className="search-box">
                <button className="search-button">
                <FontAwesomeIcon icon={faSearch} className="icon"/>
                </button>
                <input type="text" className="input-search" placeholder="Search messages" name="search"/>
            </div>
        </div>
    );
}
 
export default SearchBar;