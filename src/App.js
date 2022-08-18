import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css';
import ReactToPrint from 'react-to-print';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ReactToPrint
          trigger={() => {
            return <button className="print">Export CV to PDF</button>;
          }}
          content={() => this.componentRef}
          onBeforeGetContent={() => {
            const taskBtns = document.querySelectorAll('.add-task');
            taskBtns.forEach(
              button => button.style.display = 'none'
            )
          }}
          onAfterPrint={() => {
            const taskBtns = document.querySelectorAll('.add-task');
            taskBtns.forEach(
              button => button.style.display = 'block'
            )
          }}
        />
        <div className="cv" ref={el => (this.componentRef = el)}>
          <General />
          <div className="cv-left">
            <Education />
            <Skills />
          </div>
          <Experience />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
