import React, { useRef } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles/App.css';
import ReactToPrint from 'react-to-print';

const App = () => {
  const componentRef = useRef();

  return (
    <div className="App">
      <Header />
      <ReactToPrint
        trigger={() => <button className="print">Export CV to PDF</button>}
        content={() => componentRef.current}
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
      <div className="cv" ref={componentRef}>
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

export default App;
