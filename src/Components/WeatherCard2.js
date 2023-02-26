import React, { useState, useEffect } from "react";

const WeatherCard = (props) => {
  const [apiData, setApiData] = useState({});
  const [city, setCity] = useState("pune");
  // const apiKey = process.env.REACT_APP_API_KEY;
  const apiKey = "fe040a917fb3fc71f6538dc8f6d23ead";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  if (props.city.length > 0) {
    setCity(props.city);
  }

  // console.log(apiUrl);

  // console.log(`City: ${city}`);
  // if (props.city.length > 0) {
  //   setCity(props.city);
  //   apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  // }

  // fetch(apiUrl)
  //   .then((res) => res.json())
  //   .then((data) => setApiData(data));

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  // console.log(apiData);
  // console.log(`WEDSJKNKJSN${apiData.weather[0]["icon"]}`);
  // console.log(`https://openweathermap.org/img/wn/${apiData.weather.icon}.png`);
  return (
    <div>
      <h1>City:{apiData.name}</h1>
      <div>
        <img
          // src={`https://openweathermap.org/img/wn/${apiData.weather[0]["icon"]}.png`}
          alt=""
        />
        {/* <p>{apiData.weather[0]["description"]}</p> */}
      </div>
      {/* <p>Temp: {apiData.main.temp} </p> */}
    </div>
  );
};

export default WeatherCard;
