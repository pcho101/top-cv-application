import React, { useState } from "react";
import uniqid from "uniqid";
import ButtonGroup from "./ButtonGroup";
import Form from "./Form";

const Skills = () => {
  const [skillList, setSkillList] = useState([
    {
      id: uniqid(),
      skill: "Bending",
      visible: true,
    },
    {
      id: uniqid(),
      skill: "Stealing",
      visible: true,
    },
    {
      id: uniqid(),
      skill: "Drinking",
      visible: true,
    },
    {
      id: uniqid(),
      skill: "Smoking",
      visible: true,
    },
  ])

  const editContent = (e) => {
    setSkillList(
      skillList.map((element) => {
        if (element.id === e.target.id) {
          element.visible = !element.visible;
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
    setSkillList(
      skillList.map((element) => {
        if (element.id === e.target.parentElement.id) {
          if(e.target.id === 'skill') element.skill = e.target.value;
        }
        return element;
      })
    )
  }

  const addNewContent = () => {
    setSkillList([...skillList, {
      id: uniqid(),
      skill: "Skill",
      visible: true,
    }])
  }

  const deleteContent = (e) => {
    setSkillList(skillList.filter((element) => element.id !== e.target.id));
  }

  const allSkills = skillList.map((element, index) => {
    return (
      <li key={element.id}>
        <div className="Content" style={{display: skillList[index].visible ? "block" : "none"}}>
          <h2>{skillList[index].skill}</h2>
        </div>
        <ButtonGroup
          id={element.id}
          edit={editContent}
          del={deleteContent}
          visible={skillList[index].visible}
          name="btnGroup"
        />
        <Form
          option="Skills"
          id={element.id}
          submit={onSubmitForm}
          handle={handleInputChange}
          visible={skillList[index].visible}
          value={skillList[index].skill}
          name="skill-form"
        />
      </li>
    );
  });

  return (
    <div className="Skills">
      <h1>Skills</h1>
      <button className="add-Skill" onClick={addNewContent}>+</button>
      <ul>{allSkills}</ul>
    </div>
  )
}

export default Skills;