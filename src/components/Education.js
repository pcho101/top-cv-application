import React, { useState } from "react";
import uniqid from "uniqid";
import ButtonGroup from "./ButtonGroup";
import Form from "./Form";

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
        <ButtonGroup
          id={element.id}
          edit={editContent}
          del={deleteContent}
          visible={eduList[index].visible}
          name="btnGroup"
        />
        <Form
          option="Education"
          id={element.id}
          submit={onSubmitForm}
          handle={handleInputChange}
          visible={eduList[index].visible}
          value={eduList[index]}
          name="education-form"
        />
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
