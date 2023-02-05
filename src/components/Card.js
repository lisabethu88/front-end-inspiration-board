import React from "react";
import "./Card.css";
import PropTypes from "prop-types";
// when we submit a new card it appears in card list 
/*

    card_id, int, primary key
    message, string
    likes_count, int
    board_id, int, foreign key to board_id in board

*/
const Card = ({card_id, message, likes_count, board_id}) => {
    return (
    <section className="sticky">
        <ul>
            <li>{message}</li>
            <li>{likes_count}</li>
        </ul>
    </section>
    )
    

}

export default Card;