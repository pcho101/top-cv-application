import React, { Component } from "react";

class General extends Component {
  constructor() {
    super();

    this.editContent = this.editContent.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      name: "Bender Bending Rodriguez",
      title: "Bending Unit",
      phone: "010-100-101",
      email: "bend@planex.xyz",
      linkedin: "bend@linkedin.com",
      
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
    if(e.target.id === 'name') this.setState({name: e.target.value});
    if(e.target.id === 'title') this.setState({title: e.target.value});
    if(e.target.id === 'phone') this.setState({phone: e.target.value});
    if(e.target.id === 'email') this.setState({email: e.target.value});
    if(e.target.id === 'linkedin') this.setState({linkedin: e.target.value});
  }

  render() {
    return (
      <div className="General">
        <div
          className="Content"
          style={{display: this.state.visible ? "block" : "none"}}
        >
          <h1>{this.state.name}</h1>
          <h2>{this.state.title}</h2>
          <div className="contact-info">
            <div><span>Phone: </span>{this.state.phone}</div>
            <div><span>Email: </span>{this.state.email}</div>
            <div><span>Linkedin: </span>{this.state.linkedin}</div>
          </div>
          <button className="edit-general" onClick={this.editContent}>Edit</button>
        </div>
        <div className="general-form" style={{display: !this.state.visible ? "block" : "none"}}>
          <form onSubmit={this.onSubmitForm}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              value={this.state.phone}
              onChange={this.handleInputChange}
              />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label htmlFor="linkedin">Linkedin</label>
            <input
              id="linkedin"
              type="text"
              value={this.state.linkedin}
              onChange={this.handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default General;
