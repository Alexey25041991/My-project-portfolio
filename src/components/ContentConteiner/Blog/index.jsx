import React from "react";
import { Link } from "react-router-dom";

import {
  BlogWrapper,
  BlogConteiner,
  BlogHeader,
  BlogLabel,
  BlogCustom,
  MyBlogSection,
  MyBlog,
  Allportf,
  LinkPortfolio,
  Label,
  BlogCat,
  BlogData,
  BlogDataValue,
  BlogValue,
  BlogTitle,
  BlogText,
} from "./style.js";

import { ReactComponent as BlogIcon } from "../../common/icon/BlogIcon.svg";
import { ReactComponent as KeyIcon } from "../../common/icon/KeyIcon.svg";
import { ReactComponent as BlogVisitorIcon } from "../../common/icon/VisitorIcon.svg";
import { ReactComponent as BlogTimeIcon } from "../../common/icon/TimeIcon.svg";
import { ReactComponent as BlogLikeIcon } from "../../common/icon/LikeIcon.svg";

import CatCodes from "./CatCodes";

import { propsSlickList } from "../../common/constants";

const Blog = () => (
  <BlogWrapper id="blog">
    <BlogConteiner>
      <BlogHeader>
        <BlogIcon />
        <BlogLabel>Мой Блог</BlogLabel>
      </BlogHeader>
      <BlogCustom>
        <MyBlogSection>
          <MyBlog>
            <BlogTitle>{propsSlickList.BlogTitle}</BlogTitle>
            <BlogText>{propsSlickList.BlogText}</BlogText>
            <BlogData>
              <BlogDataValue>
                <BlogTimeIcon />
                <BlogValue>{propsSlickList.BlogDataTime}</BlogValue>
              </BlogDataValue>
              <BlogDataValue>
                <BlogVisitorIcon />
                <BlogValue>2970</BlogValue>
              </BlogDataValue>
              <BlogDataValue>
                <BlogLikeIcon />
                <BlogValue>10</BlogValue>
              </BlogDataValue>
            </BlogData>
          </MyBlog>
          <BlogCat>
            <CatCodes />
          </BlogCat>
        </MyBlogSection>
        <Link to="/blog" style={{ textDecoration: "none" }}>
          <Allportf>
            <LinkPortfolio>
              <KeyIcon />
              <Label>Открыть блок</Label>
            </LinkPortfolio>
          </Allportf>
        </Link>
      </BlogCustom>
    </BlogConteiner>
  </BlogWrapper>
);

export default Blog;
