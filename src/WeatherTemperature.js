import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.value)}</span>
      <span className="unit">°C</span>
    </div>
  );
}
