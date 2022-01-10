import React, { useLayoutEffect, useState } from "react";

import { animate } from "../utils";

import { ScrollTopWrapper } from "./style";

import "./style.css";

// import { ReactComponent as RocketScrollToIcon } from "../icon/RocketScrollToIcon.png";

const ScrollTop = () => {
  const [handleScrollTop, setHandleScrollTop] = useState(false);

  const boxScrollTop = document?.querySelector(".scroll-top");

  const handleClick = () => {
    animate({
      duration: 2000,
      timing(timeFraction) {
        return Math.pow(timeFraction, 5);
      },
      draw(progress) {
        if (boxScrollTop && boxScrollTop.style.bottom)
          boxScrollTop.style.bottom = progress * 110 + "%";
        window.scrollBy(0, -progress * 1000);
      },
    });
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;
      setHandleScrollTop(scrolled > coords);

      if (boxScrollTop && boxScrollTop.style.bottom)
        boxScrollTop.style.bottom = "30px";
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    handleScrollTop && (
      <ScrollTopWrapper
        onClick={handleClick}
        className="scroll-top"
      ></ScrollTopWrapper>
    )
  );
};

export default ScrollTop;
