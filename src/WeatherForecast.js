import React from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let apiKey = "80d8e0053992211ca4b83bad1f404359";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Fri</div>
          <WeatherIcon code="09d" size={25} />
          <div className="forecast-temperature">
            <span className="forecast-temperature-min"> 12°</span>
            <span className="forecast-temperature-max">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
