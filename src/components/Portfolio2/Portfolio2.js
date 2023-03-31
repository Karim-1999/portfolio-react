import React from 'react'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import Contact from '../Contact/Contact';
import Gallary2 from './subProtfolio2/Gallary2';

const Portfolio2 = () => {


    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      
      <Gallary2 /> 
      <Contact/>
      </div>
  )
}

export default Portfolio2