import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function LogsIndex() {
  const [logsData, setLogsData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => {
        setLogsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      {logsData.map((log, index) => {
        return (
          <section key={index}>
            <Link to={`/logs/${index}`}>
              <p>{log.title}</p>
            </Link>
          </section>
        );
      })}
    </div>
  );
}
