import React from 'react'
import Gallary from './subCertifications/Gallary'
import './certifications.css'
import { useContext } from "react";
import { themeContext } from '../../Context';
import '../../App.css'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Toggle from '../Toggle/Toggle';
import Contact from '../Contact/Contact';
import Navbar2 from '../Navbar2/Navbar2';

const Certifications = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


  return (
      <div className="App" style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
    }}>
      





          

          
          <Navbar2/> 
          <Gallary /> 
          <br /><br />
          
          <div>
              <h3 style={{fontSize:"xx-large"}}>Profilo pubblico su start2impact in basso si possono vedere le competenze che la piattaforma mi riconosce </h3>
              <iframe width={"100%"} height={"500px"} src="https://talent.start2impact.it/profile/zouhir-karim#pills-skills" title="profilo pubblico su start to impact" > </iframe>
          </div>
          <br/>
      <br />
        <Contact/>  
      <Footer />
      
          
          
      
      </div>
  )
}

export default Certifications