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
const Card = ({card}) => {
    return (
    <section className="sticky">
        <ul>
            <li>{card.message}</li>
            <li>{card.likes_count}</li>
        </ul>
    </section>
    )
    

}
Card.propTypes = {
    card_id: PropTypes.number.isRequired,
    board_id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likes_count: PropTypes.number.isRequired
}
/* 
Card.defaultProps = {
    likes_count: 0,
    board_id: null
} */
export default Card;