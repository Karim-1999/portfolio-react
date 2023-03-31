import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { UilWhatsapp } from '@iconscout/react-unicons'
import { UilLinkedin } from '@iconscout/react-unicons'
  
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <br />
        <br />
        <div> Karim Zouhir - P. Iva: 01415510450</div>
        <span >zouhirkarim999@gmail.com</span>
        
        <div className="f-icons">
          <a href="https://github.com/Karim-1999" target="_blank"><Gitub color="gray" size={"3rem"} /></a>
          <a href="https://wa.me/qr/N2QHG6EX62BQF1" target="_blank"><UilWhatsapp color="green" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/zouhirkarim1999/" target="_blank"><UilLinkedin color="#0A66C2" size={"3rem"}/></a>
        </div><br />
        <br />
        <div></div>
        <br />
        <br />
      </div>
      <br />
        
    </div>
  );
};

export default Footer;
