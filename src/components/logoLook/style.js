import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: top;
  padding-top: 12px;
`;

export const LogoSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 25px;
  font-family: "Exo 2", sans-serif;
  font-weight: 800;
  margin-right: 14px;
  white-space: nowrap;
`;

export const LogoCoder = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const LogoCoderLabel = styled(LogoSign)`
  vertical-align: top;
  font-weight: bold;
`;

export const LogoCoderText = styled.div`
  color: white;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  padding-top: 4px;
  display: block;
  font-family: "Exo 2", sans-serif;
`;
