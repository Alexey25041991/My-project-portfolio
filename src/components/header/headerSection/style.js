import styled from "styled-components";

import myIconComp from "../../common/icon/icon-header/comp.png";
import myIconMap from "../../common/icon/icon-header/map.png";
import myIconWindow from "../../common/icon/icon-header/window.png";
import myIconBook from "../../common/icon/icon-header/books.png";
import myIconPicture from "../../common/icon/icon-header/image.png";
import myIconDay from "../../common/icon/icon-header/day.jpg";
import myIconSun from "../../common/icon/icon-header/sun.png";

export const HeaderSectionWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 506px;
  width: 960px;
  margin: 0 auto;
  padding-top: 20px;
`;

export const HeaderSectionGetsite = styled.div`
  position: absolute;
  left: 411px;
  top: 34px;
`;

export const HeaderSectionConteiner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderSectionLabel = styled.span`
  color: white;
  font-size: 13px;
  font-weight: 400;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin: 7px 0px;
  font-style: italic;
  width: 185px;
  line-height: 18px;
  white-space: nowrap;
`;

export const HeaderSectionContacts = styled.div`
  display: flex;
  width: 232px;
  position: absolute;
  top: 30px;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  color: #fff;
  right: 0px;
`;

export const Phones = styled.div`
  display: flex;
  align-items: center;
`;

export const PhonesConteiner = styled(HeaderSectionConteiner)`
  margin-left: 10px;
`;

export const PhonesNumber = styled.span`
  color: white;
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.1);
  font-family: "Exo 2", sans-serif;
`;

export const PhonesText = styled(PhonesNumber)``;

export const Emails = styled(Phones)`
  margin-bottom: 7px;
`;

export const ContactsText = styled(PhonesNumber)`
  font-size: 15px;
  margin-left: 10px;
`;

export const Skype = styled(Phones)``;

export const HeaderSectionFon = styled.div`
  position: relitive;
`;

export const IconComp = styled.div`
  background: url(${myIconComp}) no-repeat;
  display: flex;
  width: 697px;
  height: 321px;
  position: absolute;
  bottom: 0px;
  left: 115px;
  z-index: 10;
`;

export const IconMap = styled.div`
  background: url(${myIconMap}) no-repeat;
  display: flex;
  width: 183px;
  height: 140px;
  position: absolute;
  top: 160px;
  left: -299px;
`;

export const IconBook = styled.div`
  background: url(${myIconBook}) no-repeat;
  display: flex;
  width: 212px;
  height: 96px;
  position: absolute;
  top: 203px;
  right: 0px;
`;

export const IconPicture = styled.div`
  background: url(${myIconPicture}) no-repeat;
  display: flex;
  width: 233px;
  height: 107px;
  position: absolute;
  top: 160px;
  right: -341px;
`;

export const IconWindow = styled.div`
  background: url(${myIconWindow}) no-repeat;
  display: flex;
  width: 247px;
  height: 307px;
  margin-left: -1px;
  z-index: 5;
  position: relative;
`;

export const IconDay = styled.div`
  background: url(${myIconDay}) 0px 12px no-repeat;
  transition: none !important;
  width: 245px;
  height: 307px;
  position: absolute;
  top: 45px;
  left: 0px;
  overflow: hidden;
`;

export const IconSun = styled.div`
  background: url(${myIconSun}) no-repeat;
  width: 91px;
  height: 94px;
  display: block;
  position: absolute;
  margin: 0 auto;
  right: 0px;
  transition: none !important;
  z-index: 2;
  margin-top: 26px;
  left: 76px;
  top: 10px;
`;
