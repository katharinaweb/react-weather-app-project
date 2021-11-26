import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>
          The weather in <span className="city">{weatherData.city}</span> today:
        </h1>
        <hr />
        <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="snow" />
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <span className="description">{weatherData.description}</span>
          </div>
        </div>
        <hr />
        <FormattedDate date={weatherData.date} />
        <form>
          <div className="row">
            <div className="col-8">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                autoFocus
              ></input>
            </div>
            <div className="col-4">
              <button className="btn btn-primary form-control" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    let city = props.defaultCity;
    const apiKey = "80d8e0053992211ca4b83bad1f404359";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
