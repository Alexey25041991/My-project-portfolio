import styled from "styled-components";
import "./style.css";

const Holder = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: -20px;
`;

const Ellipse = styled.div`
  position: absolute;
  background: radial-gradient(
    ellipse,
    transparent,
    transparent 7px,
    #fff 8px,
    black 10px,
    transparent 11px
  );
  background-size: 36px 40px;
  width: 100%;
  height: 20px;
`;

const Ellipse1 = styled(Ellipse)`
  top: 0;
  left: 0;
  background-position: 18px 0px;
`;

const Ellipse2 = styled(Ellipse)`
  top: 20px;
  left: 0;
  background-position: 0px -20px;
`;

const HorizontalLine = () => (
  <Holder>
    <Ellipse1 />
    <Ellipse2 />
  </Holder>
);

export default HorizontalLine;
