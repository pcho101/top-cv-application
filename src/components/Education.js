import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();

    this.editContent = this.editContent.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      school: "Bending College",
      title: "Bending Degree",
      dateStart: "3000-01-01",
      dateEnd: "3000-01-01",
      
      visible: true,
    };
  }

  editContent() {
    this.setState({
      visible: this.state.visible ? false : true,
    })
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.setState({
      visible: this.state.visible ? false : true,
    })
  }

  handleInputChange(e) {
    if(e.target.id === 'school') this.setState({school: e.target.value});
    if(e.target.id === 'title') this.setState({title: e.target.value});
    if(e.target.id === 'dateStart') this.setState({dateStart: e.target.value});
    if(e.target.id === 'dateEnd') this.setState({dateEnd: e.target.value});
  }

  render() {
    return (
      <div className="General">
        <div
          className="Content"
          style={{display: this.state.visible ? "block" : "none"}}
        >
          <h2>School: {this.state.school}</h2>
          <h2>Title: {this.state.title}</h2>
          <div>Start Date: {this.state.dateStart}</div>
          <div>End Date: {this.state.dateEnd}</div>
          <button onClick={this.editContent}>Edit</button>
        </div>
        <form
          style={{display: !this.state.visible ? "block" : "none"}}
          onSubmit={this.onSubmitForm}
        >
          <label htmlFor="school">School</label>
          <input
            id="school"
            type="text"
            value={this.state.school}
            onChange={this.handleInputChange}
          />
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <label htmlFor="dateStart">Start Date</label>
          <input
            id="dateStart"
            type="date"
            value={this.state.dateStart}
            onChange={this.handleInputChange}
            />
          <label htmlFor="dateEnd">End Date</label>
          <input
            id="dateEnd"
            type="date"
            value={this.state.dateEnd}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Education;
