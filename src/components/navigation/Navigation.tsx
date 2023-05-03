import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icons";
import "./navigation.scss"

function Navigation() {
  const [shown, setShown] = useState(false);

  const toggleMenu = () => {
    setShown(!shown);
  };

  return(
    <>
    {/* Navigation */}
      <div className="nav">
        <div className="nav-wrapper">
          <Link to="/"><img src="/img/logo.svg" alt="Logo" /></Link>
          {/* Search form */}
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

          {/* Mobile menu */}
          <button className="show-menu-button" onClick={toggleMenu}>
            <Icon name="bars" type="fas" color="" />
          </button>

          <div
            className={`overlay ${shown ? 'shown' : ''}`}
            onClick={toggleMenu}>
          </div>

            {/* Opened menu */}
          <div className={`menu ${shown ? 'shown' : ''}`}>
            <button className="close-menu-button" onClick={toggleMenu}>
              <Icon name="xmark" type="fas" color="" />
            </button>
            <div className="menu-wrapper">
              {/* Links */}
              <Link className="menu-link" to="/"><Icon name="home" type="fas" color="" />Home</Link>
              <Link className="menu-link" to="/watchlist"><Icon name="bookmark" type="fas" color="" />Watchlist</Link>
            
              {/* Languages */}
              <label className="language-text">Language:</label>
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

          {/* Links */}
          <div className="links">
            <Link className="link" to="/"><Icon name="home" type="fas" color="" />Home</Link>
            <Link className="link" to="/watchlist"><Icon name="bookmark" type="fas" color="" />Watchlist</Link>
            
            {/* Languages */}
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
    </>
  )
}

export default Navigation;