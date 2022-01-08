import React, { useLayoutEffect, useState } from "react";

import "./style.css";

import { getMobileOperatingSystem, isAndroid, isIos } from "../utils";

const ProgressBar = () => {
  const [preValue, setPreValue] = useState(0);
  const [scrollPerValue, setScrollPerValue] = useState(0);

  function getProductsHref() {
    let userAgent = getMobileOperatingSystem();

    if (isAndroid(userAgent)) {
      return true;
    }

    if (isIos(userAgent) && !window.MSStream) {
      return true;
    }

    return false;
  }

  const productsHref = getProductsHref();

  useLayoutEffect(() => {
    const progressBar = () => {
      const progressTop = document.querySelector(".progress-top");
      const progressRight = document.querySelector(".progress-right");
      const progressBottom = document.querySelector(".progress-bottom");
      const progressLeft = document.querySelector(".progress-left");

      let windowScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      let windowHeight =
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight) /
        4;
      let per = ((windowScroll / windowHeight) * 100).toFixed(0);

      let windowHeightPer =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollPer = ((windowScroll / windowHeightPer) * 100).toFixed(0);
      setScrollPerValue(scrollPer);

      console.log("windowScroll", windowScroll);
      console.log("pageYOffset", window.pageYOffset);
      console.log("windowHeight", windowHeightPer);
      console.log("scrollHeight", document.documentElement.scrollHeight);
      console.log("clientHeight", document.documentElement.clientHeight);

      if (per <= 100) {
        progressTop.style.width = per + "%";
        progressRight.style.height = "0%";
        progressBottom.style.width = "0%";
        progressLeft.style.height = "0%";
      }
      // if (100 < per && per <= 200) {
      //   progressTop.style.width = "100%";
      //   progressRight.style.height = per - 100 + "%";
      //   progressBottom.style.width = "0%";
      //   progressLeft.style.height = "0%";
      // }
      if (200 < per && per <= 300) {
        progressTop.style.width = "100%";
        // progressRight.style.height = "100%";
        progressBottom.style.width = per - 200 + "%";
        progressLeft.style.height = "0%";
      }
      // if (300 < per && per <= 390) {
      //   progressTop.style.width = "100%";
      //   progressRight.style.height = "100%";
      //   progressBottom.style.width = "100%";
      //   progressLeft.style.height = per - 300 + "%";
      // }
      // if (390 < per && per <= 400) {
      //   progressTop.style.width = "100%";
      //   progressRight.style.height = "100%";
      //   progressBottom.style.width = "100%";
      //   progressLeft.style.height = per - 280 + "%";
      // }
      if (300 < per && per <= 400) {
        setPreValue(per - 300 + "%");
        progressTop.style.width = "100%";
        // progressRight.style.height = "100%";
        progressBottom.style.width = "100%";
        progressLeft.style.height = per - 300 + "%";
      }
      // if (per === 400) {
      //   progressTop.style.width = "100%";
      //   progressRight.style.height = "100%";
      //   progressBottom.style.width = "100%";
      //   progressLeft.style.height = "120%";
      // }
    };

    productsHref && document.addEventListener("scroll", progressBar);
    return () => {
      productsHref && document.removeEventListener("scroll", progressBar);
    };
  });
  return (
    <>
      <div className="progress-top">{scrollPerValue}</div>
      <div className="progress-right"></div>
      <div className="progress-bottom"></div>
      <div className="progress-left">{preValue}</div>
    </>
  );
};

export default ProgressBar;
