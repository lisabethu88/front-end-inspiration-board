import "./App.css";
import { useState, useEffect } from "react";
import Board from "./components/Board";
import NewBoardForm from "./components/NewBoardForm";
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  const [boardState, setBoardState] = useState([]);

  /*
  const createNewBoard = (formData) => {};
  */

  return (
    <main>
      <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm>
      <Board board={boardState} onBoardSelect={onBoardSelect}></Board>
    </main>
  );
}

export default App;
