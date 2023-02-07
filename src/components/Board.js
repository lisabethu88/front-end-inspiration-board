import { React, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";

// props 
// board
// onBoardSelect will make card ontainer cappear and the card list
// we selected will appear

const Board = ({ board, selectBoard }) => {
    return (
        <p className="board-list-item" onClick={()=>selectBoard(board)}> 
            { board.title }
        </p>
    )

};

Board.propTypes = {

};

Board.defaultProps = {

};

export default Board;