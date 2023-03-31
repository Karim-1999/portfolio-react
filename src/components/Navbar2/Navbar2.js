import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../../Context';
import Toggle from '../Toggle/Toggle';
import "../Navbar/Navbar.css"

const Navbar2 = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


  return (
   <div className="App" style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
    }}>
      

    <div className='contenitoree'>
      <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Karim</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="/" spy={true} smooth={true}>
                Home
              </Link>  
            </li>
            <li>
              <Link to="/" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            
            <li>
              <Link to="/" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
           
          </ul>
        </div>
        <a href="#contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </a>
      </div>
    </div>
</div>



          

          

        
        
          
        
          <br/>
      <br />
          
      
          
          
      
      </div>
  )
}

export default Navbar2