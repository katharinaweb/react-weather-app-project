import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>
        The weather in <span className="city">{props.data.location}</span>{" "}
        today:
      </h1>
      <hr />
      <WeatherIcon code={props.data.icon} alt={props.data.description} />
      <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <WeatherTemperature value={props.data.temperature} />
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
