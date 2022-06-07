import SunCalc from "suncalc";

export const getDayTime = () => {
  // координы Москвы широта и долгота
  const coordinatesLatitude = 55.7522;
  const coordinatesLongitude = 37.6156;

  const date = new Date();
  const times = SunCalc.getTimes(
    date,
    coordinatesLatitude,
    coordinatesLongitude
  );

  // восход в минутах
  const sunriseStr = times.sunrise.getHours() * 60 + times.sunrise.getMinutes();
  // закат в минутах
  const sunsetStr = times.sunset.getHours() * 60 + times.sunset.getMinutes();
  // текущее время
  const timesHouse = date.getHours() * 60 + date.getMinutes();

  const dayTime = sunriseStr < timesHouse && timesHouse < sunsetStr;

  return dayTime;
};
