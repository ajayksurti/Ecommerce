import React, {useState, useEffect} from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { IconContext } from "react-icons";

function BasketIcon(props) {

    return (
      <IconContext.Provider value={{ className: "global-class-name", size: "2em" }}>
          <div style={{ margin: "0px 10px", height: "50px", width: "100%", display: "block" }} >
              <div style={{ width: "32px", height: "32px", float: "right", border: "1px solid red", borderRadius: "8px", margin: "10px 0px", background: "red" }}>
                  <h5 style={{ textAlign: "center", verticalAlign: "middle", lineHeight: "32px", color: "white" }}>{props.count}</h5>
              </div>
              <FaShoppingBasket style={{ size: "100px" , margin: "10px", float: "right" }}/>
          </div>
      </IconContext.Provider>
    )
}

export default BasketIcon;
