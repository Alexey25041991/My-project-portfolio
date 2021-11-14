import styled from "styled-components";

export const FooterCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Link = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const LabelText = styled.span`
  display: flex;
  align-items: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: "Exo 2", sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
`;

export const Label = styled(LabelText)`
  text-transform: uppercase;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-bottom: 16px;
`;

export const FooterValue = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 900px;
  padding: 35px 25px;
  border-bottom: 1px solid #ffff;
  padding-bottom: 25px;
`;

export const HeaderTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 74px;
  width: 960px;
  margin: 0 auto;
  border-bottom: 1px solid #ffff;
  padding-bottom: 25px;
`;

export const HeaderLogCoderText = styled.div`
  color: white;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  display: block;
  font-family: "Exo 2", sans-serif;
`;

export const FooterValueIt = styled.div`
  display: flex;
  padding: 35px 25px 0px 25px;
`;

export const FooterHh = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 20px;
  line-height: 40px;
  border-radius: 25px;
  text-align: center;
  background-color: #ffffff;
  color: #000;
  font-weight: 700;
  font-style: normal;
  text-indent: 1px;
  font-family: "PT Sans", Arial, sans-serif;
  text-decoration: none;
`;
