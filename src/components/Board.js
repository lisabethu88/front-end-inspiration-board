import { React, useState } from "react";
import "./Board.css";
import PropTypes from "prop-types";

const Board = ({ board, selectBoard }) => {
    return (
        <p className="board-list-item" onClick={()=>selectBoard(board)}> 
            { board.title }
        </p>
    )

};

Board.propTypes = {
};

export default Board;