import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={25} />
      <div className="forecast-temperature">
        <span className="forecast-temperature-min">{minTemperature()}°</span>
        <span className="forecast-temperature-max">{maxTemperature()}°</span>
      </div>
    </div>
  );
}
