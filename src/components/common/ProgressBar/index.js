import React, { useLayoutEffect } from "react";

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

  useLayoutEffect(() => {
    const progressBar = () => {
      const progressTop = document.querySelector(".progress-top");
      const progressRight = document.querySelector(".progress-right");
      const progressBottom = document.querySelector(".progress-bottom");
      const progressLeft = document.querySelector(".progress-left");

      let windowHeight = document.documentElement.scrollHeight;
      let windowWidth = document.documentElement.scrollWidth;
      let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let progressTotal = windowHeight * 2 + windowWidth * 2;
      let scrollPosition =
        document.body.scrollTop || document.documentElement.scrollTop;

      let percentage = scrollPosition / scrollHeight;
      let width = windowWidth / progressTotal;
      let height = windowHeight / progressTotal;

      let progressScrollTop = (percentage / width) * 100;
      let progressScrollRight = ((percentage - width) / height) * 100;
      let progressScrollBottom = ((percentage - width - height) / width) * 100;
      let progressScrollLeft =
        ((percentage - width - height - width) / height) * 100;

      // console.log("progressScrollTop", progressScrollTop);
      // console.log("progressScrollRight", progressScrollRight);
      // console.log("progressScrollBottom", progressScrollBottom);
      // console.log("progressScrollLeft", progressScrollLeft);

      const setProgressScrollValue = (progressScrollValue) => {
        // console.log(111, progressScrollValue);
        return progressScrollValue > 0 ? `${progressScrollValue}%` : 0;
      };

      progressTop.style.width = setProgressScrollValue(progressScrollTop);
      progressRight.style.height = setProgressScrollValue(progressScrollRight);
      progressBottom.style.width = setProgressScrollValue(progressScrollBottom);
      progressLeft.style.height = setProgressScrollValue(progressScrollLeft);

      ///
      //   let windowScroll =
      //     document.body.scrollTop || document.documentElement.scrollTop;
      //   let windowHeight =
      //     (document.documentElement.scrollHeight -
      //       document.documentElement.clientHeight) /
      //     4;
      //   let per = ((windowScroll / windowHeight) * 100).toFixed(0);

      //   let windowHeightPer =
      //     document.documentElement.scrollHeight -
      //     document.documentElement.clientHeight;
      //   let scrollPer = ((windowScroll / windowHeightPer) * 100).toFixed(0);

      //   if (per <= 100) {
      //     progressTop.style.width = per + "%";
      //     progressRight.style.height = "0%";
      //     progressBottom.style.width = "0%";
      //     progressLeft.style.height = "0%";
      //   }
      //   if (100 < per && per <= 200) {
      //     progressTop.style.width = "100%";
      //     progressRight.style.height = per - 100 + "%";
      //     progressBottom.style.width = "0%";
      //     progressLeft.style.height = "0%";
      //   }
      //   if (200 < per && per <= 300) {
      //     progressTop.style.width = "100%";
      //     progressRight.style.height = "100%";
      //     progressBottom.style.width = per - 200 + "%";
      //     progressLeft.style.height = "0%";
      //   }
      //   if (300 < per && per <= 400) {
      //     progressTop.style.width = "100%";
      //     progressRight.style.height = "100%";
      //     progressBottom.style.width = "100%";
      //     progressLeft.style.height = per - 300 + "%";
      //   }
      //   if (97 <= scrollPer) {
      //     progressTop.style.width = "100%";
      //     progressRight.style.height = "100%";
      //     progressBottom.style.width = "100%";
      //     progressLeft.style.height = "100%";
      //   }
    };
    ///

    productsHref && document.addEventListener("scroll", progressBar);
    return () => {
      productsHref && document.removeEventListener("scroll", progressBar);
    };
  });
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
