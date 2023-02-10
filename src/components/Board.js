import React from "react";
import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ board, selectBoard }) => {
    return (
        <p className="board-list-p" onClick={()=>selectBoard(board)}> 
            { board.title }
        </p>
    )

};

Board.propTypes = {
    title: PropTypes.string.isRequired
};

export default Board;