import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background-color: #2b3037;
  height: 600px;
`;

export const HeaderTop = styled.div`
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
`;

// export const NavConteinerMenu = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   position: absolute;
//   background-color: #2f3441;
//   margin: 0 auto;
//   width: 96px;
//   // height: 914px;
//   height: 100vh;
//   box-shadow: 0px 0px 4px rgba(100, 101, 105, 0.04),
//     0px 0px 4px rgba(11, 67, 218, 0.08);
// `;

// export const NavConteinerMenuLabel = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 24px 0;
//   & > div {
//     margin-bottom: 26px;
//   }
// `;

// export const NavConteinerLabel = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const NavConteinerText = styled.div`
//   font-style: normal;
//   font-weight: 600;
//   font-size: 11px;
//   line-height: 20px;
//   color: #acb6c3;
//   margin-top: 7px;
//   text-transform: uppercase;
// `;

// export const NavConteinerСontrol = styled.div`
//   position: absolute;
//   width: 100%;
//   border-top: 1px solid #1e222b;
//   padding: 13px 0;
//   bottom: 0;
// `;
