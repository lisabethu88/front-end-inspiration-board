import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ card, deleteCardCb }) => {
  const deleteCard = () => {
    console.log(card.card_id);
    deleteCardCb(card.card_id);
  };

  return (
    <section className="sticky">
      <ul className="sticky-ul">
        <li>{card.message}</li>
        <li>likes: {card.likes_count}</li>
        <li className="delete-btn" onClick={deleteCard}>
          delete
        </li>
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
