import React from "react";

import "./style.css";

// const MenuBurger = ({ handleClick }) => (
//   <label for="check" onClick={handleClick}>
//     <input type="checkbox" id="check" />
//     <span></span>
//     <span></span>
//     <span></span>
//   </label>
// );

const MenuBurger = ({ opened, handleClick }) => (
  <div id="menuToggle" onClick={handleClick}>
    <input type="checkbox" checked={opened} />
    <span id="span1"></span>
    <span id="span2"></span>
    <span id="span3"></span>
  </div>
);

export default MenuBurger;
