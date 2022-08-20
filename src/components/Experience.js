import React, { useState } from "react";
import Tasks from "./Tasks";
import uniqid from "uniqid";
import ButtonGroup from "./ButtonGroup";
import Form from "./Form";

const Experience = () => {
  const [expList, setExpList] = useState([
    {
      id: uniqid(),
      company: "Planet Express",
      title: "Assistant Manager of Sales",
      dateStart: "3010-02",
      dateEnd: "3010-02",
      visible: true,
    },
    {
      id: uniqid(),
      company: "Planet Express",
      title: "Chef",
      dateStart: "3000-02",
      dateEnd: "3009-02",
      visible: true,
    }
  ]);

  const editContent = (e) => {
    setExpList(
      expList.map((element) => {
        if (element.id === e.target.id) {
          element.visible = element.visible ? false : true;
        }
        return element;
      })
    )
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    editContent(e);
  }

  const handleInputChange = (e) => {
    setExpList(
      expList.map((element) => {
        if (element.id === e.target.parentElement.id) {
          if(e.target.id === 'company') element.company = e.target.value;
          if(e.target.id === 'title') element.title = e.target.value;
          if(e.target.id === 'dateStart') element.dateStart = e.target.value;
          if(e.target.id === 'dateEnd') element.dateEnd = e.target.value;
        }
        return element;
      })
    )
  }

  const addNewContent = (e) => {
    setExpList([...expList, {
      id: uniqid(),
      company: 'Company',
      title: 'Role',
      dateStart: '2022-01',
      dateEnd: '2022-01',
      visible: true,
    }]);
  }

  const deleteContent = (e) => {
    setExpList(expList.filter((element) => element.id !== e.target.id));
  }

  const allExp = expList.map((element, index) => {
    return (
      <li key={element.id}>
        <div className="Content" style={{display: expList[index].visible ? "block" : "none"}}>
          <h2 className="company">{expList[index].company}</h2>
          <div className="title-date">
            <h2 className="title">{expList[index].title}</h2>
            <div className="company-dates">
              {new Date(expList[index].dateStart).toLocaleString('en-US', {year:'numeric', month:'short'})}
              <span> - </span>
              {new Date(expList[index].dateEnd).toLocaleString('en-US', {year:'numeric', month:'short'})}
            </div>
          </div>
          <div className="tasks"><Tasks /></div>
        </div>
        <ButtonGroup
          id={element.id}
          edit={editContent}
          del={deleteContent}
          visible={expList[index].visible}
          name="btnGroup"
        />
        <Form
          option="Exp"
          id={element.id}
          submit={onSubmitForm}
          handle={handleInputChange}
          visible={expList[index].visible}
          value={expList[index]}
          name="exp-form"
        />
      </li>
    )
  });

  return (
    <div className="Experience">
      <h1>Experience</h1>
      <button className="add-Exp" onClick={addNewContent}>+</button>
      <ul>{allExp}</ul>
    </div>
  )
}

export default Experience;
