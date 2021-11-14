import styled from "styled-components";

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
`;

export const MyBlog = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 298px;
  margin-right: 40px;
`;

export const Allportf = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 290px;
  height: 40px;
  background-color: #2b3037;
  border-radius: 4px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  line-height: 40px;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #ff8560;
  }
`;

export const LinkPortfolio = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  margin-top: 10px;
  margin-left: 10px;
`;

export const BlogCat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 298px;
  height: 192px;
  overflow: hidden;
  position: relative;
`;

export const BlogData = styled.div`
  display: flex;
  text-align: left;
  margin-top: 0px;
  background: #707980;
  color: #fff;
  padding: 12px 12px;
  position: relative;
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
