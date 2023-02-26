import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GetCity from "./GetCity3";
import WeatherCard from "./WeatherCard2";
// import { currentCity } from "./getCity2";

const Weather = () => {
  useEffect(() => {
    GetCity();
  }, [0]);

  const city = useSelector((state) => state.currentCity);
  // console.log(city);

  return (
    <div>
      <WeatherCard city={city} />
    </div>
  );
};

export default Weather;
