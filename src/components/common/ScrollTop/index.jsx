import React, { useLayoutEffect, useState } from "react";

import { ScrollTopWrapper } from "./style";

// import { ReactComponent as RocketScrollToIcon } from "../icon/RocketScrollToIcon.png";

const ScrollTop = () => {
  const [handleScrollTop, setHandleScrollTop] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      let scrolled = window.pageYOffset;
      let coords = document.documentElement.clientHeight;
      setHandleScrollTop(scrolled > coords);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [setHandleScrollTop]);

  return (
    handleScrollTop && (
      <ScrollTopWrapper onClick={handleClick}></ScrollTopWrapper>
    )
  );
};

export default ScrollTop;
