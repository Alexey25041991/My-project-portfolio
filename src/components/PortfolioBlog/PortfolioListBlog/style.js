import styled from "styled-components";
import { TABLET_959, MOBILE_660 } from "../../common/media";

export const PortfolioCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  border-right: 1px solid #ddd;
  width: 760px;

  @media ${TABLET_959} {
    width: 100%;
  }

  @media ${MOBILE_660} {
    border-right: none;
  }
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  width: 760px;
  margin: 0 auto;
  position: relative;

  @media ${TABLET_959} {
    width: 100%;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 100% !important;
  margin-bottom: 15px;
  margin-top: 15px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const SlickList = styled.div`
  margin: 0px 12px !important;
  overflow: hidden;
  position: relative;
  padding: 0;
`;

export const SlickTrack = styled.div`
  display: flex;
  flex-wrap: wrap;
  opacity: 1;
  margin-left: -13px;
  position: relative;
  top: 0;
`;

export const PortfolioImg = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
`;

export const PortfolioImgUrl = styled.img`
  display: flex;
  position: relative;
`;

export const TextBlog = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 20px;
`;

export const TextBlogValue = styled.div`
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  margin-top: 12px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

export const TextBlogHeader = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: "Exo 2", sans-serif;
  margin-left: 20px;
  text-transform: uppercase;

  @media ${MOBILE_660} {
    text-align: center;
  }
`;

export const TextBlogWrapper = styled.div`
  display: flex;
  margin: 20px 0;

  @media ${TABLET_959} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PortfolioDataText = styled.div`
  color: #707980;
  font-size: 14px;
  font-weight: 700;
  font-family: "Exo 2", sans-serif;
  margin-left: 5px;
`;

export const PortfolioDataTime = styled.div`
  display: flex;
`;

export const PortfolioName = styled.div`
  display: flex;
  color: #2b2a29;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 12px;
  & :hover {
    font-size: 18px;
  }
`;

export const PortfolioNameList = styled.div`
  font-size: 14px;
  border-bottom: 1px dashed #000;
  color: #000;
  cursor: pointer;
`;
