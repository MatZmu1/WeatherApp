import React from "react";
import "./Result.css";

const Result = props => {
  const {
    date,
    city,
    sunrise,
    sunset,
    temp,
    pressure,
    wind,
    err
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    content = (
      <>
        <div className="data">
          <h2>{city}</h2>
          <p>Date: {date}</p>
          <p>Actual temperature: {temp} &#176;C</p>
          <p>Sunrise time: {sunriseTime}</p>
          <p>Sunset time: {sunsetTime}</p>
          <p>Wind: {wind} m/s</p>
          <p>Pressure: {pressure} hPa</p>
        </div>
      </>
    );
  }

  return (
    <div className="result">
      {err ? `Not found at data base ${city}` : content}
    </div>
  );
};

export default Result;
