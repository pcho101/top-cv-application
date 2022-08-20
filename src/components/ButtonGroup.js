import React from "react";

const ButtonGroup = (props) => {
  const { id, edit, del, visible, name } = props;
  
  return (
    <div className={name}>
      <button id={id} onClick={edit} style={{display: visible ? "inline-block" : "none"}}>E</button>
      <button id={id} onClick={del}>X</button>
    </div>
  );
};

export default ButtonGroup;