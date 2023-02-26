import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { BOOKMARKS } from "../Redux/actions";
import { useLocation } from "react-router-dom";
const Weather = (props) => {
  const [apiData, setApiData] = useState({});
  const [bookmark, setBookmark] = useState([]);

  const book = useSelector((state) => state.bookmarks);
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_API_KEY;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}`;
  const location = useLocation();

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
    dispatch(BOOKMARKS(e));
    console.log(`PAYLOAD: ${e}`);

    const data = [...bookmark, e];

    setBookmark(data);

    // props.getBookmarks(bookmark);
  };
  console.log(book);

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

          {location.pathname == "/" && (
            <button
              className="px-3 py-2 bg-cyan-400 rounded-lg"
              onClick={() => saveToBook(apiData.name)}
            >
              Add To Bookmark
            </button>
          )}
        </div>
      ) : (
        <Box sx={{ display: "flex" }} className="flex justify-center">
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default Weather;
