import React from "react";
import Weather from "./Weather";

const Bookmarks = (props) => {
  console.log(props.book);
  return props.book.length > 1 ? (
    <div>
      {props.book.map((data) => (
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
