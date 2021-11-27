import styled from "styled-components";
import { TABLET_959 } from "../../common/media";

export const AdvantagesCustom = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Ul = styled.ul`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  vertical-align: top;
  width: 296px;
  margin-right: 17px;
  margin-top: 40px;

  @media ${TABLET_959} {
    flex-direction: column;
    width: 235px;
    text-align: center;
    margin-right: 0;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0 20px;
  }
`;

export const Span = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 20px;
`;

export const Link = styled.div`
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media ${TABLET_959} {
    margin-top: 12px;
  }
`;

export const LabelTitle = styled.div`
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const LabelText = styled.div`
  margin-top: 12px;
  text-shadow: 0 1px 1px rgba(37, 101, 167, 0.47);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;
