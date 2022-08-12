import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import './styles/App.css';

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
        <Skills
        />
        <Experience
        />
      </div>
    )
  }
}

export default App;
