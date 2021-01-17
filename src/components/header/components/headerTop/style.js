import styled from 'styled-components';

export const HeaderTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 74px;
  width: 960px;
  margin: 0 auto;
`;

export const HeaderLog = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: top;
  padding-top: 7px;
`;

export const HeaderLogSign = styled.div`
  color: white;
  line-height: 30px;
  font-size: 25px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 800;
  margin-right: 5px;
  white-space: nowrap;
`;

export const HeaderLogCoder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderLogCoderLabel = styled(HeaderLogSign)`
  vertical-align: top;
  font-weight: bold;
`;

export const HeaderLogCoderText = styled.div`
  color: white;
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  display: block;
  font-family: 'Exo 2', sans-serif;
`;

export const HeaderMenu = styled.div`
  padding-top: 10px;
  float: right;
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-bottom: 16px;

  & :hover {
    cursor: pointer;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px;
  color: palevioletred;
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  color: white;
  line-height: 17px;
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  margin-top: 10px;
  white-space: nowrap;
`;
