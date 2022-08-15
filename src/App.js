import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header
        />
        <div className="cv">
          <General
          />
          <Education
          />
          <Skills
          />
          <Experience
          />
        </div>
        <Footer
        />
      </div>
    )
  }
}

export default App;
