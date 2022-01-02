import React, { useLayoutEffect, useState } from "react";

import {
  PortfolioHeaderValue,
  PortfolioHeaderValueWrapper,
  PortfolioTagText,
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

      const boxPortfolioFilter = document
        .querySelector("[data-portfolio-filter]")
        .getBoundingClientRect();
      const bottomFilter = boxPortfolioFilter.bottom;

      if (topNav <= 10 && bottomNav - bottomFilter > 16) {
        setHandleScrollNav(true);
      } else {
        setHandleScrollNav(false);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [setHandleScrollNav, handleScrollNav]);

  return (
    <PortfolioHeaderValueWrapper>
      <PortfolioHeaderValue
        handleScrollNav={handleScrollNav}
        data-portfolio-filter
      >
        <PortfolioTagText>ПОПУЛЯРНЫЕ ТЕГИ</PortfolioTagText>
        {getButtonList(propsList, setPortfoliosValue, handleClick, open)}
      </PortfolioHeaderValue>
    </PortfolioHeaderValueWrapper>
  );
};

export default NavPortfolioDecstop;
