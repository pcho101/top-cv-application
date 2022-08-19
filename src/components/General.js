import React, { useState } from "react";

const General = () => {
  const [name, setName] = useState("Bender Bending Rodriguez");
  const [title, setTitle] = useState("Bending Unit");
  const [phone, setPhone] = useState("010-100-101");
  const [email, setEmail] = useState("bend@planex.xyz");
  const [linkedin, setLinkedin] = useState("bend@linkedin.com");
  const [isVisible, setIsVisible] = useState(true);

  const editContent = () => {
    setIsVisible(isVisible ? false : true);
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    editContent();
  }

  const handleInputChange = (e) => {
    if(e.target.id === 'name') setName(e.target.value);
    if(e.target.id === 'title') setTitle(e.target.value);
    if(e.target.id === 'phone') setPhone(e.target.value);
    if(e.target.id === 'email') setEmail(e.target.value);
    if(e.target.id === 'linkedin') setLinkedin(e.target.value);
  }

  return (
    <div className="General">
      <div
        className="Content"
        style={{display: isVisible ? "block" : "none"}}
      >
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div className="contact-info">
          <div><span>Phone: </span>{phone}</div>
          <div><span>Email: </span>{email}</div>
          <div><span>Linkedin: </span>{linkedin}</div>
        </div>
        <button className="edit-general" onClick={editContent}>Edit</button>
      </div>
      <div className="general-form" style={{display: !isVisible ? "block" : "none"}}>
        <form onSubmit={onSubmitForm}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleInputChange}
          />
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handleInputChange}
            />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
          />
          <label htmlFor="linkedin">Linkedin</label>
          <input
            id="linkedin"
            type="text"
            value={linkedin}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default General;
