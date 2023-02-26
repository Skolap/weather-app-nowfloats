import React from "react";
import Weather from "./Weather";
import { useSelector } from "react-redux";
const Bookmarks = (props) => {
  const city = useSelector((state) => state.bookmarks);
  console.log(props.book);
  return (
    <div className="flex h-screen m-4 flex-wrap basis-full justify-center ">
      <div className="flex flex-wrap">
        {city.length > 0 ? (
          <div className="flex gap-4 min-w-max">
            {city.map((data) => (
              <Weather city={data} />
            ))}
          </div>
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
