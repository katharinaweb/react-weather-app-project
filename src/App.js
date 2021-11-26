import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Katharina Weberberger and is{" "}
          <a
            href="https://github.com/katharinaweb/react-weather-app-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://inspiring-austin-a0a9ea.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
