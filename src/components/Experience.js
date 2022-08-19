import React, { useState } from "react";
import Tasks from "./Tasks";

const Experience = () => {
  const [expList, setExpList] = useState([
    {
      id: 0,
      company: "Planet Express",
      title: "Assistant Manager of Sales",
      dateStart: "3010-02",
      dateEnd: "3010-02",
      visible: true,
    },
    {
      id: 1,
      company: "Planet Express",
      title: "Chef",
      dateStart: "3000-02",
      dateEnd: "3009-02",
      visible: true,
    }
  ]);

  const editContent = (e) => {
    const i = Number(e.target.id);
    setExpList(
      expList.map((element, index) => {
        if (index === i) {
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
    const i = Number(e.target.parentElement.id);
    setExpList(
      expList.map((element, index) => {
        if (index === i) {
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
      id: expList.length,
      company: 'Company',
      title: 'Role',
      dateStart: '2022-01',
      dateEnd: '2022-01',
      visible: true,
    }]);
  }

  const deleteContent = (e) => {
    setExpList(expList.filter((element, index) => index !== Number(e.target.id)));
  }

  const allExp = expList.map((element, index) => {
    return (
      <li key={index}>
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
        <div className="btnGroup">
          <button id={index} onClick={editContent} style={{display: expList[index].visible ? "inline-block" : "none"}}>E</button>
          <button id={index} onClick={deleteContent}>X</button>
        </div>
        <div className="exp-form" style={{display: !expList[index].visible ? "block" : "none"}}>
          <form
            id={index}
            onSubmit={onSubmitForm}
          >
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={expList[index].company}
              onChange={handleInputChange}
            />
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={expList[index].title}
              onChange={handleInputChange}
            />
            <label htmlFor="dateStart">Start Date</label>
            <input
              id="dateStart"
              type="month"
              value={expList[index].dateStart}
              onChange={handleInputChange}
              />
            <label htmlFor="dateEnd">End Date</label>
            <input
              id="dateEnd"
              type="month"
              value={expList[index].dateEnd}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
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
