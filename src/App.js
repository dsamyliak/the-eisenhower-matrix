// import logo from "./logo.svg";
import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="First-block">
          <ul className="First-quarter-list">
            <h1 className="Quarter-header">1. Urgent Important</h1>
            <li>Task</li>
          </ul>
          <ul className="Second-quarter-list">
            <h1 className="Quarter-header">2. Less Urgent Important</h1>
            <li>Task</li>
          </ul>
        </div>
        <div className="Second-block">
          <ul className="Third-quarter-list">
            <h1 className="Quarter-header">3. Urgent Less Important</h1>
            <li>Task</li>
          </ul>
          <ul className="Fourth-quarter-list">
            <h1 className="Quarter-header">4. Less Urgent Less Important</h1>
            <li>Task</li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
