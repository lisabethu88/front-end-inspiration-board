import { useState, useEffect, React} from "react";
import "./CardList.css";
import Card from "./Card"
import NewCardForm from "./NewCardForm";
import PropTypes from "prop-types";
import axios from "axios";
const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const CardList = ({board}) =>{   
    const transformResponse = (card) => {
        const {
         board_id,
         message,
         likes_count
        } = card;
        return { board_id, message, likes_count};
      };
    /* ------------------- STATE ------------------- */
    const [cardsState, setCardsState] = useState([]);

    useEffect(() => {
        axios.get(`${kBaseUrl}boards/${board.board_id}/cards`)
        .then((response) => {
            setCardsState(response.data);
        })
        .catch((error) => {
            console.log(error);
        });}, [board]);

    console.log(`board ${board.board_id}`)

    // POST <board id>/cards
    const addNewCard = (message) => {
        console.log("im in new card!")
        const responseBody = {
            message: message,
            board_id: board.board_id,
            likes_count: 0
        }
        return axios
        .post(`${kBaseUrl}boards/${board.board_id}/cards`, responseBody)
        .then((response) => {
            console.log("this is the new card being returned")
            console.log(transformResponse(response.data))
            setCardsState(cardsState => [...cardsState, transformResponse(response.data)]);
            console.log(cardsState)
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const cards = cardsState.map((cardItem) => {
        console.log(cardItem)
        return (<Card card={cardItem} />)
    });

    return (
        <section className="card-container">
            <section className="cards-list">
                <h2 id="cards-list-label">{board.title}</h2>
                    {cards}
            </section>
        <NewCardForm addNewCard={addNewCard} />
        </section>

    )
};

export default CardList;