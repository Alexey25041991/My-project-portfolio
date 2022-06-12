import React from "react";
import { observer } from "mobx-react";

import { store } from "../../../store";

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

import { ReactComponent as BlogDarkIcon } from "../../common/icon/BlogIcon.svg";
import { ReactComponent as BlogIcon } from "../../common/icon/BlogLightIcon.svg";
import { ReactComponent as KeyIcon } from "../../common/icon/KeyIcon.svg";
import { ReactComponent as BlogVisitorIcon } from "../../common/icon/VisitorIcon.svg";
import { ReactComponent as BlogTimeIcon } from "../../common/icon/TimeIcon.svg";

import CatCodes from "./CatCodes";

import PageWrapper from "../../common/PageWrapper";
import PageConteiner from "../../common/PageConteiner";
import HeaderTitle from "../../common/HeaderTitle";
import Button from "../../common/Button";
import ButtonLink from "../../common/ButtonLink";
import ButtonLike from "../../common/ButtonLike";

const Blog = observer(() => {
  const { blog } = store.getToggleLang();
  const { name } = store.getToggleTheme();
  const Icon = name === "light" ? BlogDarkIcon : BlogIcon;

  return (
    <PageWrapper id="blog">
      <PageConteiner>
        <HeaderTitle title={blog.title}>
          <Icon />
        </HeaderTitle>
        <BlogCustom>
          <MyBlogSection>
            <MyBlog>
              <BlogTitle>{blog.blogTitle}</BlogTitle>
              <BlogText>{blog.blogText}</BlogText>
              <BlogData>
                <BlogDataValue>
                  <BlogTimeIcon />
                  <BlogValue>{blog.blogDataTime}</BlogValue>
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
            <Button title={blog.buttonText}>
              <KeyIcon />
            </Button>
          </ButtonLink>
        </BlogCustom>
      </PageConteiner>
    </PageWrapper>
  );
});

export default Blog;
