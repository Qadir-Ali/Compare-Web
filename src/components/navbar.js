import React from "react";
import logo from "../images/あびる.png";


function Navbar() {
  return (
    <nav className="Header_Component">
      <div className="Left_Component">
        <img src={logo} alt="logo" />
      </div>
      <div className="Mid_Component">
        <input type="text" placeholder="What are you looking for ?" />
        <button>SEARCH</button>
      </div>
      <div className="Right_Component">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-user"></i>
      </div> 
    </nav>
  );
}

export default Navbar;
