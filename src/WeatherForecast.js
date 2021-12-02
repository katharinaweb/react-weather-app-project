import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
