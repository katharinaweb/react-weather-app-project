import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>
        The weather in <span className="city">Vienna</span> today is
      </h1>
      <hr />
      <img src="http://openweathermap.org/img/wn/13d@2x.png" alt="snow" />
      <div className="row">
        <div className="col-3">
          <ul>
            <li>
              <span className="temperature">0</span>
              <span className="unit">°C</span>
            </li>
            <li>Humidity: 100%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <span className="description">snow</span>
        </div>
      </div>
      <hr />
      <div className="date">Friday, 26.11, 15:38</div>
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
}
