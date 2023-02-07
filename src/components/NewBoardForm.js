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
        createNewBoard(title, owner);
        setTitle("");
        setOwner("");
    };
    
    return (
            <form onSubmit={formSubmit}>
                <section>
                    <label for="title-input">Title</label><br/>
                    <input 
                        type="text" 
                        id="title-input" 
                        value={title}
                        maxlength="40"
                        onChange={handleTitle}/><br/>
                    <label for="owner-input">Owner</label><br/>
                    <input 
                        type="text" 
                        id="owner-input" 
                        value={owner}
                        maxlength="40"
                        onChange={handleOwner}/><br/>
                </section>     
                <input type="submit" value="Submit"/>
            </form>
    )

};

export default NewBoardForm;