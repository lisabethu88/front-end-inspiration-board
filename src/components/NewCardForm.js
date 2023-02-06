import React, { useState } from "react";

const kDefaultFormState = {
    message: ""
};

const NewCardForm = ({ addNewCard }) => {
// use state -> card message
// handle message state
    const [message, setMessage] = useState(kDefaultFormState);
    const handleChange = (event) => {
        setMessage(event.target.value);
    }
// handle form validation on submit 
    const tooLong = message.length > 40 ? true : false;
    const tooShort = message.length === 0 ? true : false;

    const newCardSubmit = (event) => {
        event.preventDefault();
        addNewCard(message);
        setMessage("");
    }

    return (
    <section className="new-card">
        <h2>Create a New Card</h2>
            <form onSubmit={newCardSubmit}>
                <label for="message-input">Message</label>
                <input 
                    type="text" 
                    id="message-input" 
                    value={message}/>
                    onChange={handleChange}
                <input type="submit" value="Add New Card"/>
            </form>
    </section>
    )

};

export default NewCardForm;