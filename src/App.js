// import logo from "./logo.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="First-block">
          <ul className="First-quarter-list">
            <h1>
              1 <span>Urgent Important</span>
            </h1>
            <li>Task</li>
          </ul>
          <ul className="Second-quarter-list">
            <h1>
              2 <span>Less Urgent Important</span>
            </h1>
            <li>Task</li>
          </ul>
        </div>
        <div className="Second-block">
          <ul className="Third-quarter-list">
            <h1>
              3 <span>Urgent Less Important</span>
            </h1>
            <li>Task</li>
          </ul>
          <ul className="Fourth-quarter-list">
            <h1>
              4 <span>Less Urgent Less Important</span>
            </h1>
            <li>Task</li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
