import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GetCity from "./GetCity";

const Weather = () => {
  const city = useSelector((state) => state.currentCity);

  return (
    <div>
      <GetCity />
      {city}
    </div>
  );
};

export default Weather;
