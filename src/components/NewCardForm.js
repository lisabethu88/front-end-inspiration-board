import React, { useState } from "react";
import "./NewCardForm.css"; 

const NewCardForm = ({ addNewCard }) => {
// use state -> card message
// handle message state
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
        setMessage(event.target.value);
    }
// handle form validation on submit 
    const tooLong = message.length > 40 ? true : false;
    const tooShort = message.length === 0 ? true : false;

    const formSubmit = (event) => {
        event.preventDefault();
        if (tooLong || tooShort){
            alert("Input length must be between 1-40 characters.");
        }
        else{
            addNewCard(message);
            setMessage("");
        }
    }

    return (
    <section className="new-card-form">
        <h2 className="card-form-label" >Create a New Card</h2>
            <form className="card-form" onSubmit={formSubmit}>
                <label for="message-input">Message</label><br/>
                <textarea className="new-card-form-input"
                    value={message}
                    onChange={handleChange}>
                    </textarea><br/><br/>
                    
                <input className="button-class" type="submit" value="Add New Card"/>
            </form>
    </section>
    )

};

export default NewCardForm;