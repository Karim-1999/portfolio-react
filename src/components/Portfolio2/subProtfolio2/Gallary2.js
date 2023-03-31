import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { themeContext } from "../../../Context";
import Progects from "./Progects";
import "../portfolio2.css";
import Navbar2 from "../../Navbar2/Navbar2";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Gallary2 = () => {
  const [items, setItems] = useState(Progects);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [spring, setSpring] = useSpring(() => ({
    transform: 'translate(0px, 0px)',
  }));

  const handleMouseMove = (e) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 30;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 30;
    setSpring({ transform: `translate(${xPos}px, ${yPos}px)` });
  };

  const handleMouseLeave = () => {
    setSpring({ transform: 'translate(30px, 0px)' });
  };

  return (
    <div
      className=" "
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar2 />
      <h1 style={{ marginTop: "100px", marginBottom: "100px" }}>
        Projects developed
      </h1>

      <div className="container-card2">
        {items.map((elem) => {
          const { id, title, image, description, link, code123, tec } = elem;

          return (
            <div className="cardblog2" key={id} >
              <animated.div className="pointer2" onMouseEnter={handleMouseMove} onMouseLeave={handleMouseLeave} style={spring}>
                <div
                  className="imageshadow2"
                  style={{ transform: "scale(0.8)" }}
                >
                  <img src={image} alt="" />
                </div>

                <div className="divText22">
                  <div className="title">{title}</div>
                  <div className="tec" >Tecnologie utilizzate: {tec}</div>
                  <div className="subtitle22">
                    <br />
                    <div className="research22">{description}</div>
                  </div>
                  <div className="flex">
                  <a
                    target={"_blank"}
                    href={`${code123}`}
                    style={{
                      display: "block",
                    }}
                  >
                    <button className="button">View source code </button>
                  </a>
                  <a
                    target={"_blank"}
                    href={`${link}`}
                    style={{
                      display: "block",
                    }}
                  >
                    <button className="button"> View Live</button>
                  </a></div>
                </div>
              </animated.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallary2;
