import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>The weather in Vienna today is</h1>
      <hr />
      <img src="http://openweathermap.org/img/wn/13d@2x.png" alt="snow" />
      <div className="row">
        <div className="col-4">
          <ul>
            <li>0°C</li>
            <li>Humidiy: 100%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
        <div className="col-8">snow</div>
      </div>
      <hr />
      <div>Friday, 26.11, 15:38</div>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
            ></input>
          </div>
          <div className="col-4">
            <button className="btn btn-primary form-control" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
