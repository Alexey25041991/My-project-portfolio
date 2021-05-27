import React from 'react';

import {
  BlogWrapper,
  BlogConteiner,
  BlogHeader,
  BlogLabel,
  BlogCustom,
  Ul,
  Li,
  ButtonL,
  ButtonR,
  Allportf,
  Link,
  Label,
  SlickList,
  SlickTrack,
  BlogImg,
  BlogList,
  BlogImgUrl,
  BlogData,
  BlogDataValue,
  BlogValue,
  BlogShow,
  BlogListShow,
  BlogTitle,
  BlogText,
} from './style.js';

import { ReactComponent as BlogIcon } from './icon/BlogIcon.svg';
import { ReactComponent as KeyIcon } from './icon/KeyIcon.svg';
import { ReactComponent as BlogVisitorIcon } from './icon/BlogVisitorIcon.svg';
import { ReactComponent as BlogTimeIcon } from './icon/BlogTimeIcon.svg';
import { ReactComponent as BlogLikeIcon } from './icon/BlogLikeIcon.svg';

import { propsSlickList } from './constants';

const getSlickList = (propsSlickList) =>
  propsSlickList.map((item) => (
    <Li key={item.id}>
      <BlogImg>
        <BlogList href={`${item.hrefBlog}`}>
          <BlogImgUrl
            src={item.icon}
            width={item.widthIcon}
            height={item.heightIcon}
          />
        </BlogList>
      </BlogImg>
      <BlogData>
        <BlogDataValue>
          <BlogTimeIcon />
          <BlogValue>{item.BlogDataTime}</BlogValue>
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
      <BlogTitle>{item.BlogTitle}</BlogTitle>
      <BlogText>{item.BlogText}</BlogText>
      <BlogShow>
        <BlogListShow href={`${item.hrefNameList}`}>
          {item.BlogListShow}
        </BlogListShow>
      </BlogShow>
    </Li>
  ));

const Blog = () => (
  <BlogWrapper id="blog">
    <BlogConteiner>
      <BlogHeader>
        <BlogIcon />
        <BlogLabel>Мой Блог</BlogLabel>
      </BlogHeader>
      <BlogCustom>
        <Ul>
          <ButtonL />
          <SlickList>
            <SlickTrack>{getSlickList(propsSlickList)}</SlickTrack>
          </SlickList>
          <ButtonR />
        </Ul>
        <Allportf>
          <Link href={`${'#'}`}>
            <KeyIcon />
            <Label>Открыть блок</Label>
          </Link>
        </Allportf>
      </BlogCustom>
    </BlogConteiner>
  </BlogWrapper>
);

export default Blog;
