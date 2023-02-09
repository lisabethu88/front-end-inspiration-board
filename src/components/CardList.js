import { useState, useEffect, React } from "react";
import "./CardList.css";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import PropTypes from "prop-types";
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const CardList = ({ board }) => {
  /* ------------------- STATE ------------------- */
  const [cardsState, setCardsState] = useState([]);
  const [isSorted, setSortedState] = useState(false);
  const setSorted = () =>{
    setSortedState(!isSorted)
  }

  // If board changes, update  cards
  useEffect(() => {
      axios
        .get(`${kBaseUrl}/boards/${board.board_id}/cards`)
        .then((response) => {
          setCardsState(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    
  }, [board]);

  useEffect(() => {
    console.log(cardsState)
    console.log("isSorted")
    console.log(isSorted)
    if(isSorted === true){
      setCardsState(sortCards());
      setSortedState(false);
    };
  },[isSorted]);

  // POST <board id>/cards/<card id>
  const updateLikes = (id) => {
    console.log(id);
    return axios
      .put(`${kBaseUrl}/boards/${board.board_id}/cards/${id}`)
      .then((response) => {
        const updatedCards = cardsState.map((cardItem) => {
          if (cardItem.card_id === id) {
            return response.data;
          } else {
            return cardItem;
          }
        });
        setCardsState(updatedCards);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  // POST <board id>/cards
  const addNewCard = (message) => {
    const requestBody = {
      message: message,
      board_id: board.board_id,
      likes_count: 0,
    };
    return axios
      .post(`${kBaseUrl}/boards/${board.board_id}/cards`, requestBody)
      .then((response) => {
        setCardsState((cardsState) => [...cardsState, response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // DELETE <board_id>/cards/<card_id>
  const deleteCard = (id) => {
    axios
      .delete(`${kBaseUrl}/boards/${board.board_id}/cards/${id}`)
      .then((response) => {
        const updatedCardsData = cardsState.filter(
          (card) => card.card_id !== id
        );
        setCardsState(updatedCardsData);
      });
  };

  const cards = cardsState.map((cardItem) => {
    return (
      <Card
        card={cardItem}
        deleteCardCb={deleteCard}
        updateLikes={updateLikes}
      />
    );
  });


  const sortCards = () => {
      cardsState.sort(function(card1, card2) {
      return card2.likes_count - card1.likes_count;
    });
    return cardsState;
  }


  return (
    <section className="card-container">      
      <section className="cards-list">
      <button 
      className="button-class" 
      onClick={setSorted}>Sort by Likes</button>
        <h2 id="cards-list-label">Cards for {board.title}</h2>      
        {cards} 
      </section>        

      <NewCardForm addNewCard={addNewCard} />
    </section>
  );
};

export default CardList;
