import React, { useState } from "react";
import uniqid from "uniqid";

const Education = () => {
  const [eduList, setEduList] = useState([
    {
      id: uniqid(),
      degree: "Bending Degree",
      school: "Bending College",
      dateStart: "2996-02",
      dateEnd: "2996-02",
      desc: "Completed program in 1.5 milliseconds.",
      visible: true,
    }
  ])

  const editContent = (e) => {
    setEduList(
      eduList.map((element) => {
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
    setEduList(
      eduList.map((element) => {
        if (element.id === e.target.parentElement.id) {
          if(e.target.id === 'school') element.school = e.target.value;
          if(e.target.id === 'degree') element.degree = e.target.value;
          if(e.target.id === 'dateStart') element.dateStart = e.target.value;
          if(e.target.id === 'dateEnd') element.dateEnd = e.target.value;
          if(e.target.id === 'desc') element.desc = e.target.value;
        }
        return element;
      })
    )
  }

  const addNewContent = () => {
    setEduList([...eduList, {
      id: uniqid(),
      school: 'College',
      degree: 'Degree',
      dateStart: "2022-01",
      dateEnd: "2022-01",
      desc: 'Minor in Arts; 3.8 GPA',
      visible: true,
    }])
  }

  const deleteContent = (e) => {
    setEduList(eduList.filter((element) => element.id !== e.target.id))
  }

  const allEdu = eduList.map((element, index) => {
    return (
      <li key={element.id}>
        <div className="Content" style={{display: eduList[index].visible ? "block" : "none"}}>
          <h2 className="school">{eduList[index].school}</h2>
          <h2 className="degree">{eduList[index].degree}</h2>
          <div className="degree-dates">
            {new Date(eduList[index].dateStart).toLocaleString('en-US', {year:'numeric', month:'short'})}
            <span> - </span>
            {new Date(eduList[index].dateEnd).toLocaleString('en-US', {year:'numeric', month:'short'})}
          </div>
          <div className="edu-desc">{eduList[index].desc}</div>
        </div>
        <div className="btnGroup">
          <button id={element.id} onClick={editContent} style={{display: eduList[index].visible ? "inline-block" : "none"}}>E</button>
          <button id={element.id} onClick={deleteContent}>X</button>
        </div>
        <div className="education-form" style={{display: !eduList[index].visible ? "block" : "none"}}>
          <form
            id={element.id}
            onSubmit={onSubmitForm}
          >
            <label htmlFor="school">School</label>
            <input
              id="school"
              type="text"
              value={eduList[index].school}
              onChange={handleInputChange}
            />
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              type="text"
              value={eduList[index].degree}
              onChange={handleInputChange}
            />
            <label htmlFor="dateStart">Start Date</label>
            <input
              id="dateStart"
              type="month"
              value={eduList[index].dateStart}
              onChange={handleInputChange}
              />
            <label htmlFor="dateEnd">End Date</label>
            <input
              id="dateEnd"
              type="month"
              value={eduList[index].dateEnd}
              onChange={handleInputChange}
            />
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              value={eduList[index].desc}
              onChange={handleInputChange}
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
      <button className="add-Education" onClick={addNewContent}>+</button>
      <ul>{allEdu}</ul>
    </div>
  )
}

export default Education;
