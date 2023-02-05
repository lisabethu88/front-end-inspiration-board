import React from "react";
import "./CardList.css";
import NewCardForm from "./NewCardForm";
import PropTypes from "prop-types";
import axios from "axios";
const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

const CardList = ({ board }) =>{
    const transformResponse = (card) => {
        const {
            card_id,
            board_id,
            message,
            likes_count: likesCount,
        } = card;
        return { card_id, board_id, message, likesCount };
    }; 

    const addNewCard = (message) => {
        return axios
        .post(`${kBaseUrl}boards/${board.board_id}/cards`, {message})
        .then((response) => {
            return response.data.map(transformResponse);
        })
        .catch((error) => {
            console.log(error);
        });
    };


    return (
        <section className="card-container">
            <section className="cards-list">
                <h2 id="cards-list-label">{/*{board.title}*/}</h2>
            </section>
        <NewCardForm addNewCard={addNewCard} />
        </section>
    )
};

export default CardList;