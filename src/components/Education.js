import React, { Component } from "react";

class Education extends Component {
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
        degree: "Bending Degree",
        school: "Bending College",
        dateStart: "2996-02",
        dateEnd: "2996-02",
        desc: "Completed program in 1.5 milliseconds.",

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
        if(e.target.id === 'school') element.school = e.target.value;
        if(e.target.id === 'degree') element.degree = e.target.value;
        if(e.target.id === 'dateStart') element.dateStart = e.target.value;
        if(e.target.id === 'dateEnd') element.dateEnd = e.target.value;
        if(e.target.id === 'desc') element.desc = e.target.value;
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
        school: 'College',
        degree: 'Degree',
        dateStart: "2022-01",
        dateEnd: "2022-01",
        desc: 'Minor in Arts; 3.8 GPA',

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
            <h2 className="school">{this.state.history[index].school}</h2>
            <h2 className="degree">{this.state.history[index].degree}</h2>
            <div className="degree-dates">
              {new Date(this.state.history[index].dateStart).toLocaleString('en-US', {year:'numeric', month:'short'})}
              <span> - </span>
              {new Date(this.state.history[index].dateEnd).toLocaleString('en-US', {year:'numeric', month:'short'})}
            </div>
            <div className="edu-desc">{this.state.history[index].desc}</div>
          </div>
          <div className="btnGroup">
            <button id={index} onClick={this.editContent} style={{display: this.state.history[index].visible ? "inline-block" : "none"}}>E</button>
            <button id={index} onClick={this.deleteContent}>X</button>
          </div>
          <div className="education-form" style={{display: !this.state.history[index].visible ? "block" : "none"}}>
            <form
              id={index}
              onSubmit={this.onSubmitForm}
            >
              <label htmlFor="school">School</label>
              <input
                id="school"
                type="text"
                value={this.state.history[index].school}
                onChange={this.handleInputChange}
              />
              <label htmlFor="degree">Degree</label>
              <input
                id="degree"
                type="text"
                value={this.state.history[index].degree}
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
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                value={this.state.history[index].desc}
                onChange={this.handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          
        </li>
      );
    });
    return (
      <div className="Education">
        <h1>Education</h1>
        <button className="add-Education" onClick={this.addNewContent}>+</button>
        <ul>{moves}</ul>
      </div>
    )
  }
}

export default Education;
