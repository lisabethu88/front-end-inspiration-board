import './App.css';
import { useState, useEffect } from "react";
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;


function App() {
  const [boardChoice, setBoardChoice] = useState({
      board_id: '',
      title: '',
      owner: ''
  });

  const chooseBoard = (board) => {
    setBoardChoice(board);
  };
  // get boards 
  // const boardPosts = map

  const selectBoardMessage = () => {
    if (boardChoice.board_id) {
      return (
      `${boardChoice.title} - created by ${boardChoice.owner}`
      )
    };


  }
  return (
    <section className="content-container">
      <header className="app-header">
        <h1>Inspiration Board</h1>
      </header>

      <main className="main-container">

        <section className="board-container">

          <section className="board-list">
            <h2>Boards</h2>
            <p>this is the board list container</p>
          </section>

          <section className="select-board">
            <h2>Selected Bpard</h2>
            <p>{selectBoardMessage}</p>
          </section>

          <section className="create-board">
            <h2>Create Board</h2>
            <p>this is the create board container</p>
          </section>

        </section>
      <section className="card-container">

          <section className="cards-list">
            <h2 id="cards-list-label">Cards for .....</h2>
            
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>
            <section className="sticky">
              sticky
            </section>

            <section className="sticky">
              sticky
            </section><section className="sticky">
              sticky
            </section>
          </section>

          <section className="new-card">
            <h2>Create a New Card</h2>
            <p>this is the new card container</p>
          </section>

        </section>
      </main>
    </section>
    
  );
}

export default App;
