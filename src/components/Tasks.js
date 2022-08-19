import React, { useState } from "react";

const Tasks = () => {
  const [taskList, setTaskList] = useState([{
    id: 0,
    task: "Task 0",
    visible: true,
  }]);

  const editContent = (e) => {
    const i = Number(e.target.id);
    setTaskList(
      taskList.map((element, index) => {
        if (index === i) {
          element.visible = element.visible ? false : true;
        }
        return element;
      })
    );
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    editContent(e);
  }

  const handleInputChange = (e) => {
    const i = Number(e.target.parentElement.id);
    setTaskList(
      taskList.map((element, index) => {
        if (index === i) {
          if(e.target.id === 'task') element.task = e.target.value;
        }
        return element;
      })
    );
  }

  const addNewContent = () => {
    setTaskList([...taskList, {
      id: taskList.length,
      task: "Task " + taskList.length,
      visible: true,
    }])
  }

  const deleteContent = (e) => {
    setTaskList(taskList.filter((element, index) => index !== Number(e.target.id)));
  }

  const allTasks = taskList.map((element, index) => {
    return (
      <li key={index}>
        <div className="Content" style={{display: taskList[index].visible ? "block" : "none"}}>
          <div className="task">{taskList[index].task}</div>
        </div>
        <div className="task-btnGroup">
          <button id={index} onClick={editContent} style={{display: taskList[index].visible ? "inline-block" : "none"}}>E</button>
          <button id={index} onClick={deleteContent}>X</button>
        </div>
        <div className="task-form" style={{display: !taskList[index].visible ? "block" : "none"}}>
          <form
            id={index}
            onSubmit={onSubmitForm}
          >
            <label htmlFor="task">task</label>
            <input
              id="task"
              type="text"
              value={taskList[index].task}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </li>
    )
  });
  
  return (
    <div className="Tasks">
      <ul>{allTasks}</ul>
      <button className="add-task" onClick={addNewContent}>Add New Task</button>
    </div>
  );
};

export default Tasks;