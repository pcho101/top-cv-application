import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";

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
        <Experience
        />
      </div>
    )
  }
}

export default App;
