import React, { useState } from "react";
import uniqid from "uniqid";

const Tasks = () => {
  const [taskList, setTaskList] = useState([{
    id: uniqid(),
    task: "Task 0",
    visible: true,
  }]);

  const editContent = (e) => {
    setTaskList(
      taskList.map((element) => {
        if (element.id === e.target.id) {
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
    setTaskList(
      taskList.map((element) => {
        if (element.id === e.target.parentElement.id) {
          if(e.target.id === 'task') element.task = e.target.value;
        }
        return element;
      })
    );
  }

  const addNewContent = () => {
    setTaskList([...taskList, {
      id: uniqid(),
      task: "Task " + taskList.length,
      visible: true,
    }])
  }

  const deleteContent = (e) => {
    setTaskList(taskList.filter((element) => element.id !== e.target.id));
  }

  const allTasks = taskList.map((element, index) => {
    return (
      <li key={element.id}>
        <div className="Content" style={{display: taskList[index].visible ? "block" : "none"}}>
          <div className="task">{taskList[index].task}</div>
        </div>
        <div className="task-btnGroup">
          <button id={element.id} onClick={editContent} style={{display: taskList[index].visible ? "inline-block" : "none"}}>E</button>
          <button id={element.id} onClick={deleteContent}>X</button>
        </div>
        <div className="task-form" style={{display: !taskList[index].visible ? "block" : "none"}}>
          <form
            id={element.id}
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