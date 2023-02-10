import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ card, deleteCardCb, updateLikes }) => {
  const deleteCard = () => {
    console.log(card.card_id);
    deleteCardCb(card.card_id);
  };

  const updateCard = () => {
    updateLikes(card.card_id)
  }
  return (
    <section className="sticky">
        <p>{card.message}</p>
        <ul>
        <li className="like-button" onClick={updateCard}>👍</li>
        <li>{card.likes_count} 💞</li>
        <li className="delete-btn" onClick={deleteCard}>🗑️</li>
        </ul>
    </section>
  );
};

Card.propTypes = {
  card_id: PropTypes.number.isRequired,
  board_id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
};

export default Card;
