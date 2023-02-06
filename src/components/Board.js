import { React, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";

// props 
// board
// onBoardSelect will make card ontainer cappear and the card list
// we selected will appear

const Board = ({ onBoardSelect, board}) => {
    return (
        <li onClick={ onBoardSelect(board) }> 
            { board.title } 
        </li>
    )

};

Board.propTypes = {

};

Board.defaultProps = {

};

export default Board;