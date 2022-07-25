import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function LogShow() {
  const [logData, setLogData] = useState({});
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLogData(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
        <p>{ logData.captainName }</p>
        <p>{ logData.title }</p>
        <p>{ logData.post }</p>
        <p>{ logData.mistakesWereMadeToday }</p>
        <p>{ logData.daysSinceLastCrisis }</p>
    </div>
  );
}
