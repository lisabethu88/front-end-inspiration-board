import React from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ card, deleteCardCb, addLikeCountForCard }) => {
  const deleteCard = () => {
    console.log(card.card_id);
    deleteCardCb(card.card_id);
  };

  const likeCard = () => {
    card.likes_count += 1;
    console.log(card.card_id);
    console.log(card.likes_count);
    addLikeCountForCard(card.card_id, card.likes_count);
  };

  return (
    <section className="sticky">
      <ul className="sticky-ul">
        <li>{card.message}</li>
        <li className="like-btn" onClick={likeCard}>
          <p>likes: {card.likes_count} </p>
          <span> ❤️ </span>
        </li>
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
