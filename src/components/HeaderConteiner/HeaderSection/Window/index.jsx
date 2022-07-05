import React from "react";
// import { store } from "../../../../store";

// import { ClockWrapper, Hour, Min, Sec } from "./style";
import "./style.css";

const Window = () => {
  // const sunMoon = document.
  // const [hour, setHour] = useState(0);
  // const [min, setMin] = useState(0);
  // const [sec, setSec] = useState(0);
  // const deg = 6;

  // setInterval(() => {
  //   let day = new Date();
  //   setHour(day.getHours() * 30);
  //   setMin(day.getMinutes() * deg);
  //   setSec(day.getSeconds() * deg);
  // });

  // useEffect(() => {
  //   store.setTime({ hourValue: hour / 30, minValue: min / deg });
  // }, [hour, min]);

  return (
    <div className="window-scene">
      <div className="window">
        <div className="window-view">
          <div className="heavenly-body"></div>
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          <div className="cloud cloud-4"></div>
          <div className="cloud cloud-5"></div>
          <div className="star star-1"></div>
          <div className="star star-2"></div>
          <div className="star star-3"></div>
          <div className="star star-4"></div>
          <div className="star star-5"></div>
          <div className="star star-6"></div>
          <div className="star star-7"></div>
          <div className="ground-light"></div>
          <div className="ground"></div>
          <div className="tree tree-big"></div>
          <div className="tree tree-small tree-small-1"></div>
          <div className="tree tree-small tree-small-2"></div>
          <div className="tree tree-long"></div>
        </div>
        <div className="window-hotspot"></div>
        <div className="window-frame"></div>
        <div className="window-sill"></div>
      </div>
      <div className="window-light window-light-left"></div>
      <div className="window-light window-light-right"></div>
    </div>
  );
};

export default Window;
