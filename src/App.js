import "./App.css";
// import GetCity from "./Components/GetCity";
// import Weather from "./Components/Weather";
import Weather from "./Components/Weather";
import Bookmarks from "./Components/Bookmarks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./Components/Navbar";
import SearchCity from "./Components/SearchCity";
function App() {
  const [city, setCity] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const getCity = (e) => setCity(e);

  let currentLocUrl =
    "https://api.ipgeolocation.io/ipgeo?apiKey=3b6a4a99261a418394815dfe48a995a8";

  useEffect(() => {
    axios
      .get(currentLocUrl)
      .then((response) => {
        // console.log(response.data.city);
        setCity(response.data.city);
        // Code for handling the response
      })
      .catch((error) => {
        console.log(error);
        // Code for handling the error
      });
  }, []);

  const getBookmarks = (e) => {
    let data = [...bookmarks, e];
    data = data.filter((e) => String(e).trim());
    setBookmarks(data);
    console.log(Array.isArray(bookmarks) && bookmarks.length);
  };
  // console.log(bookmarks);

  return (
    <div className="flex flex-col mx-auto max-w-2xl">
      <BrowserRouter>
        <Navbar />
        <SearchCity onSubmitCity={getCity} />
        <Routes>
          <Route
            path="/"
            element={
              <Weather
                city={city}
                getBookmarks={getBookmarks}
                book={bookmarks}
              />
            }
          />
          <Route path="/bookmarks" element={<Bookmarks book={bookmarks} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
