import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

import PortfolioHeader from "../../PortfolioHeader";

import {
  PortfolioWrapper,
  PortfolioConteiner,
  PortfolioHeaderValue,
  PortfolioCustom,
  Ul,
  Li,
  // PortfolioButtom,
  // PortfolioButtomText,
  SlickList,
  SlickTrack,
  PortfolioImg,
  PortfolioImgUrl,
  PortfolioDataText,
  PortfolioTagText,
  PortfolioDataTime,
  PortfolioName,
  PortfolioNameList,
  PortfolioHeaderValueWrapper,
  TextBlog,
  TextBlogValue,
  TextBlogHeader,
  TextBlogWrapper,
} from "./style.js";
import styled from "styled-components/macro";
import "./index.css";

import { ReactComponent as PortfolioTimeIcon } from "./icon/PortfolioTimeIcon.svg";

import { propsButtonList } from "./constants";
import {
  propsPortfolioListBlog,
  propsPortfolioBlogHome,
} from "../../common/constants";

// import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import DraftsIcon from "@mui/icons-material/Drafts";
// import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import StarBorder from "@mui/icons-material/StarBorder";
// import Typography from "@mui/material/Typography";

const PortfolioListData = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  // top: 20px;
  text-decoration: none;
`;

const PortfolioListDataText = styled(Link)`
  display: flex;
  // justify-content: center;
  overflow: hidden;
  text-decoration: none;
`;

const getButtonList = (
  propsButtonList,
  setPortfoliosValue,
  handleClick,
  open
) => {
  return propsButtonList.map((item) => (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      key={item.id}
      color="red"
    >
      {item.id !== "JavaScript" && (
        <ListItemButton
          onClick={() => setPortfoliosValue(item?.value)}
          sx={{
            color: "black",
            "&:hover": {
              backgroundColor: "#1976d214",
              borderRadius: "8px",
              color: "#ff8560",
              "& .MuiListItemIcon-root": {
                color: "#ff8560",
              },
            },
          }}
        >
          {/* <ListItemIcon>
            <SendIcon />
          </ListItemIcon> */}
          <ListItemText primary={item.portfolioButtonText} />
        </ListItemButton>
      )}

      {item.id === "JavaScript" && (
        <>
          <ListItemButton
            onClick={handleClick}
            sx={{
              color: "black",
              "&:hover": {
                backgroundColor: "#1976d214",
                borderRadius: "8px",
                color: "#ff8560",
                "& .MuiListItemIcon-root": {
                  color: "#ff8560",
                },
              },
            }}
          >
            {/* <ListItemIcon>
              <InboxIcon />
            </ListItemIcon> */}
            <ListItemText primary={item.portfolioButtonText} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {item.value.map((itemJS) => (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  // sx={{ pl: 4 }}
                  onClick={() => setPortfoliosValue(itemJS?.value)}
                  sx={{
                    pl: 4,
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#1976d214",
                      borderRadius: "8px",
                      color: "#ff8560",
                      "& .MuiListItemIcon-root": {
                        color: "#ff8560",
                      },
                    },
                  }}
                >
                  {/* <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon> */}
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

const getSlickList = (propsPortfolioList, portfoliosValue) => {
  const filterPropsPortfolioList =
    portfoliosValue !== propsButtonList[0].value
      ? propsPortfolioList.filter((item) =>
          item.technologies.includes(portfoliosValue)
        )
      : propsPortfolioList;
  return filterPropsPortfolioList?.map((item) => (
    <Li key={item.id} className>
      <TextBlogHeader>{item.textBlogHeader}</TextBlogHeader>
      <TextBlogWrapper>
        <PortfolioImg>
          <PortfolioListData to={`/blog/${item.hrefNameList}`}>
            <PortfolioImgUrl
              src={item.icon}
              width={item.widthIcon}
              height={item.heightIcon}
            />
          </PortfolioListData>
        </PortfolioImg>
        <TextBlog>
          <PortfolioDataTime>
            <PortfolioTimeIcon />
            <PortfolioDataText>{item.portfolioDataTime}</PortfolioDataText>
          </PortfolioDataTime>
          <TextBlogValue>{item.portfolioText}</TextBlogValue>
          <PortfolioName>
            <PortfolioListDataText to={`/blog/${item.hrefNameList}`}>
              <PortfolioNameList>Показать больше</PortfolioNameList>
            </PortfolioListDataText>
          </PortfolioName>
        </TextBlog>
      </TextBlogWrapper>
    </Li>
  ));
};
const PortfolioListBlog = () => {
  const [portfoliosValue, setPortfoliosValue] = useState(
    propsButtonList[0].value
  );
  const [handleScrollNav, setHandleScrollNav] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      const boxNavValue = document
        .querySelector("[data-select-container]")
        .getBoundingClientRect();
      const topNav = boxNavValue.top;

      if (topNav <= 10) {
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
    <>
      <PortfolioHeader item={propsPortfolioBlogHome} />
      <PortfolioWrapper>
        <PortfolioConteiner data-select-container>
          <PortfolioCustom>
            <Ul>
              <SlickList>
                <SlickTrack>
                  {getSlickList(propsPortfolioListBlog, portfoliosValue)}
                </SlickTrack>
              </SlickList>
            </Ul>
          </PortfolioCustom>
          <PortfolioHeaderValueWrapper>
            <PortfolioHeaderValue handleScrollNav={handleScrollNav}>
              <PortfolioTagText>ПОПУЛЯРНЫЕ ТЕГИ</PortfolioTagText>
              {getButtonList(
                propsButtonList,
                setPortfoliosValue,
                handleClick,
                open
              )}
            </PortfolioHeaderValue>
          </PortfolioHeaderValueWrapper>
        </PortfolioConteiner>
      </PortfolioWrapper>
    </>
  );
};

export default PortfolioListBlog;
