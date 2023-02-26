import { useState, useEffect } from "react";
import axios from "axios";

const Weather = (props) => {
  // console.log(`PropData: ${props.city}`);
  const [apiData, setApiData] = useState({});
  const [bookmark, setBookmark] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        // console.log(`API1: ${response.data}`);
        setApiData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiUrl]);

  // console.log(apiData.name);

  const saveToBook = (e) => {
    // console.log(`E${e}`);
    const data = [...bookmark, e];

    setBookmark(data);

    props.getBookmarks(bookmark);
  };

  return (
    <div className="mx-auto text-center my-4 bg-slate-400 p-4 w-full">
      {apiData.name != undefined ? (
        <div>
          <h1 className="text-2xl">{apiData.name}</h1>
          <div className="flex justify-center">
            <img
              src={`https://openweathermap.org/img/wn/${apiData.weather[0]["icon"]}@2x.png`}
              alt=""
            />
            <p className="text-center my-auto">
              {apiData.weather[0]["description"]}
            </p>
          </div>
          <p>Temp: {apiData.main.temp} </p>
          <button onClick={() => saveToBook(apiData.name)}>
            Add To Bookmark
          </button>
        </div>
      ) : (
        <h1>Still Loading</h1>
      )}
    </div>
  );
};

export default Weather;
