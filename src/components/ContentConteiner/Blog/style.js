import styled from "styled-components";
import { MOBILE_660, MOBILE_480 } from "../../common/media";

export const BlogCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const MyBlogSection = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  list-style-type: none;
  margin: 0 auto;
  position: relative;
  border-bottom: 3px solid #707980;
  padding-bottom: 15px;

  @media ${MOBILE_660} {
    flex-direction: column-reverse;
  }
`;

export const MyBlog = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 298px;
  margin-right: 40px;

  @media ${MOBILE_660} {
    margin-right: 0;
  }

  @media ${MOBILE_480} {
    width: 100%;
  }
`;

export const BlogCat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 298px;
  height: 192px;
  overflow: hidden;
  position: relative;

  @media ${MOBILE_480} {
    width: 100%;
  }
`;

export const BlogData = styled.div`
  display: flex;
  text-align: left;
  margin-top: 0px;
  background: #707980;
  color: #fff;
  padding: 12px 12px;
  position: relative;
  border-radius: 8px;
`;

export const BlogValue = styled.div`
  font-size: 12px;
  font-family: "Exo 2", sans-serif;
  margin-left: 5px;
`;

export const BlogDataValue = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const BlogTitle = styled.span`
  text-align: left;
  margin-bottom: 10px;
  height: 38px;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  font-family: "Exo 2", sans-serif;
`;

export const BlogText = styled.span`
  text-align: left;
  overflow: hidden;
  color: #000;
  text-decoration: none;
  line-height: 20px;
  font-family: "Exo 2", sans-serif;
  height: 83px;
  font-size: 12px;
  margin-bottom: 10px;
`;
