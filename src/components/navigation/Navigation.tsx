import { Link } from "react-router-dom";
import Icon from "../Icon/Icons";
import "./navigation.scss"

function Navigation() {
  return(
    <div className="nav">
      <div className="nav-wrapper">
        <Link to="/"><img src="/img/logo.svg" alt="Logo" /></Link>
        <form className="search-form">
          <input 
            type="text"
            className="search-field"
            //value={}
            placeholder="Hledat..."
            //onChange={}
           />
           <button type="submit" className="search-button">
            <Icon name="search" type="fas" color="" />
          </button>
        </form>
        <div className="links">
          <Link className="link" to="/"><Icon name="home" type="fas" color="" />Home</Link>
          <Link className="link" to="/watchlist"><Icon name="bookmark" type="fas" color="" />Watchlist</Link>
          <div className="languages">
            <label>
              <input 
                type="radio"
                name="language"
                value="cs"
                //checked={language === 'cs'}
                //onChange={}
               />
               cz
            </label>
            <label>
              <input 
                type="radio"
                name="language"
                value="en"
                //checked={language === 'en'}
                //onChange={}
               />
               en
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;