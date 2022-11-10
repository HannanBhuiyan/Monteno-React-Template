import React from "react";
import './FourZero.css'
import { Link } from "react-router-dom";

const FourZero = () => {
     return(
          <div className="four_zero_area">
               <h2>404 not found</h2>
               <Link className="btnbutton" to="/">Back Home</Link>
          </div> 
     )
}

export default FourZero