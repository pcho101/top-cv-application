import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <General
        />
        <Education
        />
      </div>
    )
  }
}

export default App;
