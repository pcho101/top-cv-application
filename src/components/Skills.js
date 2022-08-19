import React, { useState } from "react";

const Skills = () => {
  const [skillList, setSkillList] = useState([
    {
      id: 0,
      skill: "Bending",
      visible: true,
    },
    {
      id: 1,
      skill: "Drinking",
      visible: true,
    },
    {
      id: 2,
      skill: "Gambling",
      visible: true,
    },
  ])

  const editContent = (e) => {
    const i = Number(e.target.id);
    setSkillList(
      skillList.map((element, index) => {
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
    setSkillList(
      skillList.map((element, index) => {
        if (index === i) {
          if(e.target.id === 'skill') element.skill = e.target.value;
        }
        return element;
      })
    )
  }

  const addNewContent = () => {
    setSkillList([...skillList, {
      id: skillList.length,
      skill: "Skill",
      visible: true,
    }])
  }

  const deleteContent = (e) => {
    setSkillList(skillList.filter((element, index) => index !== Number(e.target.id)));
  }

  const allSkills = skillList.map((element, index) => {
    return (
      <li key={index}>
        <div className="Content" style={{display: skillList[index].visible ? "block" : "none"}}>
          <h2>{skillList[index].skill}</h2>
        </div>
        <div className="btnGroup">
          <button id={index} onClick={editContent} style={{display: skillList[index].visible ? "inline-block" : "none"}}>E</button>
          <button id={index} onClick={deleteContent}>X</button>
        </div>
        <div className="skill-form" style={{display: !skillList[index].visible ? "block" : "none"}}>
          <form
            id={index}
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