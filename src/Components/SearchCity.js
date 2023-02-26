import React, { useState } from "react";

const SearchCity = (props) => {
  const [city, setCity] = useState("");

  const bookmark = () => {};

  const formSubmit = (e) => {
    e.preventDefault();
    props.onSubmitCity(city);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={formSubmit}>
        <input
          className="w-full text-center border-2 border-cyan-400"
          type="text"
          placeholder="Search City"
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchCity;
