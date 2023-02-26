import React from "react";

const WeatherForecast = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}`;

  return <div>WeatherForecast</div>;
};

export default WeatherForecast;
