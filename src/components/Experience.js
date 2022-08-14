import React, { Component } from "react";
import Tasks from "./Tasks";

class Experience extends Component {
  constructor() {
    super();

    this.editContent = this.editContent.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.addNewContent = this.addNewContent.bind(this);
    this.deleteContent = this.deleteContent.bind(this);

    this.state = {
      history: [{
        id: 0,
        company: "Planet Express",
        title: "Chef",
        dateStart: "3000-01",
        dateEnd: "3000-01",

        visible: true,
      }],
    };
  }

  editContent(e) {
    const i = Number(e.target.id);
    const history = this.state.history.map((element, index) => {
      if (index === i) {
        element.visible = element.visible ? false : true;
      }
      return element;
    })
    this.setState({
      history: history,
    })
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.editContent(e);
  }

  handleInputChange(e) {
    const i = Number(e.target.parentElement.id);
    const history = this.state.history.map((element, index) => {
      if (index === i) {
        if(e.target.id === 'company') element.company = e.target.value;
        if(e.target.id === 'title') element.title = e.target.value;
        if(e.target.id === 'dateStart') element.dateStart = e.target.value;
        if(e.target.id === 'dateEnd') element.dateEnd = e.target.value;
      }
      return element;
    })
    this.setState({
      history: history,
    })
  }

  addNewContent(e) {
    const history = this.state.history;
    const number = this.state.history.length;
    this.setState({
      history: history.concat([{
        id: number,
        company: 'Company',
        title: 'Role',
        dateStart: '2022-01',
        dateEnd: '2022-01',

        visible: true,
      }]),
    });
  }

  deleteContent(e) {
    const history = this.state.history.filter((element, index) => index !== Number(e.target.id));
    this.setState({
      history: history,
    });
  }

  render() {
    const history = this.state.history;
    const moves = history.map((element, index) => {
      return (
        <li key={index}>
          <div className="Content" style={{display: this.state.history[index].visible ? "block" : "none"}}>
            <h2 className="company">{this.state.history[index].company}</h2>
            <div className="title-date">
              <h2 className="title">{this.state.history[index].title}</h2>
              <div className="company-dates">
                {new Date(this.state.history[index].dateStart).toLocaleString('en-US', {year:'numeric', month:'short'})}
                <span> - </span>
                {new Date(this.state.history[index].dateEnd).toLocaleString('en-US', {year:'numeric', month:'short'})}
              </div>
            </div>
            <div className="tasks"><Tasks /></div>
          </div>
          <div className="btnGroup">
            <button id={index} onClick={this.editContent} style={{display: this.state.history[index].visible ? "inline-block" : "none"}}>E</button>
            <button id={index} onClick={this.deleteContent}>X</button>
          </div>
          <div className="exp-form" style={{display: !this.state.history[index].visible ? "block" : "none"}}>
            <form
              id={index}
              onSubmit={this.onSubmitForm}
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                value={this.state.history[index].company}
                onChange={this.handleInputChange}
              />
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={this.state.history[index].title}
                onChange={this.handleInputChange}
              />
              <label htmlFor="dateStart">Start Date</label>
              <input
                id="dateStart"
                type="month"
                value={this.state.history[index].dateStart}
                onChange={this.handleInputChange}
                />
              <label htmlFor="dateEnd">End Date</label>
              <input
                id="dateEnd"
                type="month"
                value={this.state.history[index].dateEnd}
                onChange={this.handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          
        </li>
      );
    });
    return (
      <div className="Experience">
        <h1>Experience</h1>
        <button className="add-Exp" onClick={this.addNewContent}>+</button>
        <ul>{moves}</ul>
      </div>
    )
  }
}

export default Experience;
