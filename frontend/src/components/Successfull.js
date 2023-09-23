import React from "react";
import "./Successfull.css";
import { Link } from 'react-router-dom';
import { NavBar } from "./NavBar";

function Successfull() {
  return (
    <div>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="mainbox">
        <div className="box">
          <div className="img"></div>
          <p>SUCCESSFULL SUBMIT</p>
          <p>User Id : {Math.floor(Math.random() * 1000000)}</p>
          <br /><br /><br />
          <Link  to='/' className='homepagebtn' style={{width: "400px"}}>
                <span>Go Home-Page</span>  
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Successfull;
