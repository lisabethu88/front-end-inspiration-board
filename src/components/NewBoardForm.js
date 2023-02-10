import React, { useState } from "react";
import "./NewBoardForm.css";

const NewBoardForm = ({ createNewBoard }) => {
    const [title, setTitle] = useState("");
    const [owner, setOwner] = useState("");
    const handleTitle = (event) => {
        setTitle(event.target.value);
    };
    const handleOwner = (event) => {
        setOwner(event.target.value);
    };

    const formSubmit = (event) => {
        event.preventDefault();
        if ((title.length >0 && title.length <=20) && (owner.length >0 && owner.length <=20) ) {
            createNewBoard(title, owner);}
        else {alert("Input length must be between 1-40 characters.");}
        setTitle("");
        setOwner("");
    };

    return (
            <form onSubmit={formSubmit}>
                <section>
                    <label for="title-input">Title</label><br/>
                    <input className="input"
                        type="text" 
                        id="title-input" 
                        value={title}
                        onChange={handleTitle}/><br/>
                    <label for="owner-input">Owner</label><br/>
                    <input className="input"
                        type="text" 
                        id="owner-input" 
                        value={owner}
                        minlength="1"
                        maxlength="40"
                        onChange={handleOwner}/><br/><br/>
                </section>     
                <input className="button-class" type="submit" value="Submit"/><br/><br/>
            </form>
    )

};

export default NewBoardForm;