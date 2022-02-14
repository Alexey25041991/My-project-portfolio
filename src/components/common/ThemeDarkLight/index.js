import React from "react";

import "./style.css";

const ThemeDarkLight = ({ opened, handleClick }) => (
  <main onClick={handleClick}>
    <input
      class="l"
      type="checkbox"
      checked={opened}
      onChange={() => console.log("")}
    />
  </main>
);

export default ThemeDarkLight;
