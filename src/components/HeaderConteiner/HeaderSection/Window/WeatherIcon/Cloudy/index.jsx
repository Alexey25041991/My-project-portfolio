import React from "react";
// import { observer } from "mobx-react";

// import { store } from '../../../../store';

// import { CloudWrapper } from "./style";
import "./style.css";

const WeatherIconCloudy = () => (
  <div class="containerCloudy">
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 60.7 40"
      // style="enable-background:new 0 0 60.7 40;"
      // xml:space="preserve"
    >
      <g id="Cloud_1">
        <g id="White_cloud_1">
          <path
            id="XMLID_2_"
            class="white"
            d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"
          />
          <circle id="XMLID_3_" class="white" cx="17.4" cy="22.8" r="9.3" />
          <circle id="XMLID_4_" class="white" cx="34.5" cy="21.1" r="15.6" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            dur="6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="translate"
            values="0;5;0"
            calcMode="linear"
          ></animateTransform>
        </g>
        <g id="Gray_cloud_1">
          <path
            id="XMLID_6_"
            class="gray"
            d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"
          />
          <circle id="XMLID_7_" class="gray" cx="45.7" cy="10.7" r="10.7" />
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            dur="6s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="translate"
            values="0;-3;0"
            calcMode="linear"
          ></animateTransform>
        </g>
      </g>
    </svg>
  </div>
);

export default WeatherIconCloudy;
