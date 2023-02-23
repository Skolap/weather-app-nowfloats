import React, { useEffect, useState } from "react";
import { publicIp, publicIpv4, publicIpv6 } from "public-ip";
import { SETIP } from "../Redux/actions";
import { useSelector, useDispatch } from "react-redux";

const GetIp = () => {
  const myIp = useSelector((state) => state.ip);
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  // Set Current Public IP using public-ip package
  useEffect(() => {
    const getCurrentIp = async () => {
      dispatch(SETIP(await publicIpv4()));
    };
    getCurrentIp();
  }, []);

  // console.log(getCurrentIp);
  // console.log(myIp);
  // console.log(cities);
  return <div>{myIp}</div>;
};

export default GetIp;
