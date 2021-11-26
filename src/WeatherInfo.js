import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        The weather in <span className="city">{props.data.city}</span> today:
      </h1>
      <hr />
      <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="snow" />
      <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <span className="description">{props.data.description}</span>
        </div>
      </div>
      <hr />
      <FormattedDate date={props.data.date} />
    </div>
  );
}
