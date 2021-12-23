import React from "react";

import "./style.css";

const MenuBurger = ({ opened, handleClick }) => (
  <div id="menuToggle" onClick={handleClick}>
    <input type="checkbox" defaultChecked={opened} />
    <span id="span1"></span>
    <span id="span2"></span>
    <span id="span3"></span>
  </div>
);

export default MenuBurger;
