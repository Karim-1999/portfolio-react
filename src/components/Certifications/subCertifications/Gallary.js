import React, { useState } from "react";
import { useContext } from "react";

import { themeContext } from "../../../Context";
import Articles from "./Articles";

const Gallary = () => {
  const [items, setItems] = useState(Articles);



  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        className=" App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
       <h1 style={{marginTop: "100px"}}>Certificates</h1>
      </div>
<a target={"_blank"} href={"https://www.credential.net/b2931d45-9de2-4037-8d61-1779c2190f15#gs.ljqymk"}>
      <div style={{display: "flex", justifyContent: "center", marginBottom: "120px"}} > 
         </div></a>

      <div className="container-card ">
        {items.map((elem) => {
          const { id, title, image, data, category, link } = elem;

          return (
            <>
              <div className="cardblog" key={id}>
                {" "}
                
                  <div className="pointer"><a target={"_blank"} href={`${link}`}>
                    <div className="imageshadow">
                      <img src={image} alt="" />
                    </div>  </a>
                    <div className="divText">
                      <div className="title">{title}</div>
                      <div className="subtitle">
                        <div className="research">{category}</div>
                        <div className="data">{data}</div>
                      </div>
                    </div>
                  </div>{" "}
              
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Gallary;