import React from "react";

import "./style.css";

import { getMobileOperatingSystem, isAndroid, isIos } from "../utils";

const ProgressBar = () => {
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

  productsHref && window.addEventListener("scroll", progressBar);

  function progressBar(e) {
    const progressTop = document.querySelector(".progress-top");
    const progressRight = document.querySelector(".progress-right");
    const progressBottom = document.querySelector(".progress-bottom");
    const progressLeft = document.querySelector(".progress-left");

    let windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let windowHeight =
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight) /
      4;
    let per = (windowScroll / windowHeight) * 100;

    if (per <= 100) {
      progressTop.style.width = per.toFixed(0) + "%";
      progressRight.style.height = "0%";
      progressBottom.style.width = "0%";
      progressLeft.style.height = "0%";
    }
    if (100 < per && per <= 200) {
      progressTop.style.width = "100%";
      progressRight.style.height = per.toFixed(0) - 100 + "%";
      progressBottom.style.width = "0%";
      progressLeft.style.height = "0%";
    }
    if (200 < per && per <= 300) {
      progressTop.style.width = "100%";
      progressRight.style.height = "100%";
      progressBottom.style.width = per.toFixed(0) - 200 + "%";
      progressLeft.style.height = "0%";
    }
    if (300 < per && per <= 400) {
      progressTop.style.width = "100%";
      progressRight.style.height = "100%";
      progressBottom.style.width = "100%";
      progressLeft.style.height = per.toFixed(0) - 295 + "%";
    }
  }
  return (
    <>
      <div className="progress-top"></div>
      <div className="progress-right"></div>
      <div className="progress-bottom"></div>
      <div className="progress-left"></div>
    </>
  );
};

export default ProgressBar;
