import React, { Component } from "react";

class Tasks extends Component {
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
        task: "Task 1",

        visible: true,
      }
      ],
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
        if(e.target.id === 'task') element.task = e.target.value;
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
        task: "task",

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
            <div className="task">{this.state.history[index].task}</div>
          </div>
          <div className="task-btnGroup">
            <button id={index} onClick={this.editContent} style={{display: this.state.history[index].visible ? "inline-block" : "none"}}>E</button>
            <button id={index} onClick={this.deleteContent}>X</button>
          </div>
          <div className="task-form" style={{display: !this.state.history[index].visible ? "block" : "none"}}>
            <form
              id={index}
              onSubmit={this.onSubmitForm}
            >
              <label htmlFor="task">task</label>
              <input
                id="task"
                type="text"
                value={this.state.history[index].task}
                onChange={this.handleInputChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </li>
      );
    });
    return (
      <div className="Tasks">
        <ul>{moves}</ul>
        <button className="add-task" onClick={this.addNewContent}>Add New Task</button>
      </div>
    )
  }
}

export default Tasks;