import React, { useState } from "react";

const kDefaultFormState = {
  title: "",
  ownerName: "",
};

const NewBoardForm = ({ createNewBoard }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = {
      ...formData,
      [fieldName]: fieldValue,
    };

    setFormData(newFormData);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    createNewBoard(formData);
    setFormData(kDefaultFormState);
  };

  return (
    <section>
      <h2>Create a New Board</h2>
      <form onSubmit={formSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="name"
            value={formData.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Owner's Name</label>
          <input
            type="text"
            name="name"
            value={formData.ownerName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <p>
            Preview: {formData.title} - {formData.ownerName}
          </p>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </section>
  );
};

export default NewBoardForm;
