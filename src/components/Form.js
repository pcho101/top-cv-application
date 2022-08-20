import React from "react";

const Form = (props) => {
  const { option, id, submit, handle, visible, value, name } = props;

  const selectForm = (option) => {
    if (option === "Tasks") {
      return (
        <div className={name} style={{display: !visible ? "block" : "none"}}>
          <form
            id={id}
            onSubmit={submit}
          >
            <label htmlFor="task">task</label>
            <input
              id="task"
              type="text"
              value={value}
              onChange={handle}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    } else if (option === "Exp") {
      return (
        <div className={name} style={{display: !visible ? "block" : "none"}}>
          <form
            id={id}
            onSubmit={submit}
          >
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              value={value.company}
              onChange={handle}
            />
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={value.title}
              onChange={handle}
            />
            <label htmlFor="dateStart">Start Date</label>
            <input
              id="dateStart"
              type="month"
              value={value.dateStart}
              onChange={handle}
              />
            <label htmlFor="dateEnd">End Date</label>
            <input
              id="dateEnd"
              type="month"
              value={value.dateEnd}
              onChange={handle}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    } else if (option === "Skills") {
      return (
        <div className={name} style={{display: !visible ? "block" : "none"}}>
          <form
            id={id}
            onSubmit={submit}
          >
            <label htmlFor="skill">Skill</label>
            <input
              id="skill"
              type="text"
              value={value}
              onChange={handle}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    } else if (option === "Education") {
      return (
        <div className={name} style={{display: !visible ? "block" : "none"}}>
          <form
            id={id}
            onSubmit={submit}
          >
            <label htmlFor="school">School</label>
            <input
              id="school"
              type="text"
              value={value.school}
              onChange={handle}
            />
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              type="text"
              value={value.degree}
              onChange={handle}
            />
            <label htmlFor="dateStart">Start Date</label>
            <input
              id="dateStart"
              type="month"
              value={value.dateStart}
              onChange={handle}
              />
            <label htmlFor="dateEnd">End Date</label>
            <input
              id="dateEnd"
              type="month"
              value={value.dateEnd}
              onChange={handle}
            />
            <label htmlFor="desc">Description</label>
            <textarea
              id="desc"
              value={value.desc}
              onChange={handle}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )
    } else if (option === "General") {
      return (
        <div className={name} style={{display: !visible ? "block" : "none"}}>
          <form
            id={id}
            onSubmit={submit}
          >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={value.name}
            onChange={handle}
          />
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={value.title}
            onChange={handle}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={value.phone}
            onChange={handle}
            />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={value.email}
            onChange={handle}
          />
          <label htmlFor="linkedin">Linkedin</label>
          <input
            id="linkedin"
            type="text"
            value={value.linkedin}
            onChange={handle}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      )
    }
  }

  return (
    selectForm(option)
  );
};

export default Form;