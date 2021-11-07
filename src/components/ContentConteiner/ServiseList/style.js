import styled from "styled-components";

import myIconLinet from "../../common/icon/linet.png";
import myIconLinem from "../../common/icon/linem.png";
import myIconLineb from "../../common/icon/lineb.png";

export const ServiseListHeader = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 35px;
  margin-bottom: 30px;
`;

export const ServiseListLabel = styled.div`
  color: #2b2a29;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-left: 12px;
`;

export const ServiseListCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffff;
  margin: 0;
  padding: 0;
`;

export const ServiseListOptions = styled.div`
  display: flex;
  vertical-align: top;
  width: 450px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const LiFir = styled.li`
  display: flex;
  background: url(${myIconLinet}) no-repeat !important;
  background-position: 0px 9px !important;
  padding-left: 35px !important;
  padding-bottom: 20px !important;
`;

export const Li = styled.li`
  display: flex;
  background: url(${myIconLinem}) no-repeat !important;
  background-position: 0px -9px !important;
  padding-left: 35px !important;
  padding-bottom: 20px !important;
`;

export const LiLas = styled.li`
  display: flex;
  background: url(${myIconLineb}) no-repeat !important;
  background-position: 0px -75px !important;
  padding-left: 35px !important;
  padding-bottom: 20px !important;
`;
