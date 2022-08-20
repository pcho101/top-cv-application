import React, { useState } from "react";
import uniqid from "uniqid";

const Skills = () => {
  const [skillList, setSkillList] = useState([
    {
      id: uniqid(),
      skill: "Bending",
      visible: true,
    },
    {
      id: uniqid(),
      skill: "Drinking",
      visible: true,
    },
    {
      id: uniqid(),
      skill: "Gambling",
      visible: true,
    },
  ])

  const editContent = (e) => {
    setSkillList(
      skillList.map((element) => {
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
        <div className="btnGroup">
          <button id={element.id} onClick={editContent} style={{display: skillList[index].visible ? "inline-block" : "none"}}>E</button>
          <button id={element.id} onClick={deleteContent}>X</button>
        </div>
        <div className="skill-form" style={{display: !skillList[index].visible ? "block" : "none"}}>
          <form
            id={element.id}
            onSubmit={onSubmitForm}
          >
            <label htmlFor="skill">Skill</label>
            <input
              id="skill"
              type="text"
              value={skillList[index].skill}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
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