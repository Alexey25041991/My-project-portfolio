import React from "react";

import {
  BlogCustom,
  MyBlogSection,
  MyBlog,
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

import CatCodes from "./CatCodes";

import { propsSlickList } from "../../common/constants";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";
import Button from "../../common/Button";
import ButtonLink from "../../common/ButtonLink";
import ButtonLike from "../../common/ButtonLike";

const Blog = () => (
  <PageWrapper id="blog">
    <PageConteiner>
      <HeaderTitle title="Мой Блог">
        <BlogIcon />
      </HeaderTitle>
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
              <ButtonLike />
            </BlogData>
          </MyBlog>
          <BlogCat>
            <CatCodes />
          </BlogCat>
        </MyBlogSection>
        <ButtonLink navMenuLink="blog">
          <Button title="Открыть блок">
            <KeyIcon />
          </Button>
        </ButtonLink>
      </BlogCustom>
    </PageConteiner>
  </PageWrapper>
);

export default Blog;
