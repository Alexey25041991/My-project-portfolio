import React, { useLayoutEffect, useState } from "react";

import {
  PortfolioHeaderValue,
  PortfolioHeaderValueWrapper,
  PortfolioTagText,
  PortfolioHeaderValueInvisible,
} from "./style";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const getButtonList = (propsList, setPortfoliosValue, handleClick, open) => {
  return propsList.map((item) => (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "inherit" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      key={item.id}
      color="red"
    >
      {item.id !== "JavaScript" && (
        <ListItemButton
          onClick={() => setPortfoliosValue(item?.value)}
          sx={{
            color: "white",
            backgroundColor: "#65696f",
            borderRadius: "8px",
            boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              color: "#ff8560",
              "& .MuiListItemIcon-root": {
                color: "#ff8560",
              },
            },
          }}
        >
          <ListItemText primary={item.portfolioButtonText} />
        </ListItemButton>
      )}

      {item.id === "JavaScript" && (
        <>
          <ListItemButton
            onClick={handleClick}
            sx={{
              color: "white",
              backgroundColor: "#65696f",
              borderRadius: "8px",
              boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.1)",
              margin: "8px 0",
              "&:hover": {
                backgroundColor: "#1976d214",
                color: "#ff8560",
                "& .MuiListItemIcon-root": {
                  color: "#ff8560",
                },
              },
            }}
          >
            <ListItemText primary={item.portfolioButtonText} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {item.value.map((itemJS) => (
            <Collapse key={itemJS.id} in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  // sx={{ pl: 4 }}
                  onClick={() => setPortfoliosValue(itemJS?.value)}
                  sx={{
                    pl: 4,
                    color: "white",
                    backgroundColor: "#65696f",
                    borderRadius: "8px",
                    boxShadow: "5px 5px 0px rgba(0, 0, 0, 0.1)",
                    margin: "8px 0",
                    "&:hover": {
                      backgroundColor: "#1976d214",
                      color: "#ff8560",
                      "& .MuiListItemIcon-root": {
                        color: "#ff8560",
                      },
                    },
                  }}
                >
                  <ListItemText primary={itemJS.value} />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </>
      )}
    </List>
  ));
};

const NavPortfolioDecstop = ({ propsList, setPortfoliosValue }) => {
  const [handleScrollNav, setHandleScrollNav] = useState(false);
  const [handleScrollFilter, setHandleScrollFilter] = useState(false);
  const [handleHeightFilter, setHandleHeightFilter] = useState(312);
  const [handleWrapperHeight, setHandleWrapperHeight] = useState(300);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      const boxNavValue = document
        .querySelector("[data-select-container]")
        .getBoundingClientRect();
      const topNav = boxNavValue.top;
      const bottomNav = boxNavValue.bottom;

      const boxPortfolioFilterInvisible = document
        .querySelector("[data-portfolio-bottom]")
        .getBoundingClientRect();
      const bottomFilter = boxPortfolioFilterInvisible.bottom;

      const boxPortfolioFilter = document
        .querySelector("[data-portfolio-height]")
        .getBoundingClientRect();
      const heightFilter = boxPortfolioFilter.height;

      const boxPortfolioWrapperHeight = document
        .querySelector("[data-portfolio-wrapper-height]")
        .getBoundingClientRect();
      const portfolioWrapperHeight = boxPortfolioWrapperHeight.height;

      const filterBottom = 65;
      const dataSelectContainerMarginTop = 25;

      setHandleHeightFilter(heightFilter);
      // Добавил 16 чтобы все 4 блока вильтрации помещались полностью и не нужно был скролл
      setHandleWrapperHeight(portfolioWrapperHeight + 16);

      if (topNav + dataSelectContainerMarginTop <= 0) {
        setHandleScrollNav(true);
      } else {
        setHandleScrollNav(false);
      }
      if (bottomNav - bottomFilter > filterBottom) {
        setHandleScrollFilter(true);
      } else {
        setHandleScrollFilter(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [
    setHandleScrollNav,
    handleScrollNav,
    setHandleScrollFilter,
    handleScrollFilter,
  ]);

  return (
    <PortfolioHeaderValueWrapper data-portfolio-wrapper-height>
      <PortfolioHeaderValueInvisible
        handleHeightFilter={handleHeightFilter}
        data-portfolio-bottom
      />
      <PortfolioHeaderValue
        handleScrollNav={handleScrollNav}
        handleScrollFilter={handleScrollFilter}
        handleWrapperHeight={handleWrapperHeight}
        data-portfolio-height
      >
        <PortfolioTagText>ПОПУЛЯРНЫЕ ТЕГИ</PortfolioTagText>
        {getButtonList(propsList, setPortfoliosValue, handleClick, open)}
      </PortfolioHeaderValue>
    </PortfolioHeaderValueWrapper>
  );
};

export default NavPortfolioDecstop;
