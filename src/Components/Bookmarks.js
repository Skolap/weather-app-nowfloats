import React from "react";
import Weather from "./Weather";
import { useSelector } from "react-redux";
const Bookmarks = (props) => {
  const city = useSelector((state) => state.bookmarks);
  console.log(props.book);
  return city.length > 1 ? (
    <div>
      {city.map((data) => (
        <p>
          <Weather city={data} />
        </p>
      ))}
    </div>
  ) : (
    <div>No Data Found</div>
  );
};

export default Bookmarks;
