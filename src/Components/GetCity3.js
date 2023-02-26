import React, { useEffect, useState } from "react";
import { publicIp, publicIpv4, publicIpv6 } from "public-ip";
import { SETLOCATION } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

const GetCity = () => {
  // Define States
  const [ip, setIp] = useState("");
  const [city, setCity] = useState("");

  // For dispatch actions to reducer
  const dispatch = useDispatch();

  // Function for dispatch action for update current City
  const currentCity = async () => {
    // Get IP
    try {
      await setIp(await publicIpv4());
    } catch (err) {
      console.log(err);
    }

    // Get City From Ip and save using setCity()
    fetch(`https://ipapi.co/${ip}/json/`)
      .then(function (response) {
        response.json().then((jsonData) => {
          // console.log(jsonData.city);
          setCity(jsonData.city);
        });
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  // Calling Current City Function
  currentCity();

  // Save city in redux store
  dispatch(SETLOCATION(city));
};

export default GetCity;
