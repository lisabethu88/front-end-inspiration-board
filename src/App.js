import './App.css';
import { useState, useEffect } from "react";
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
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
            <h2>Select Board</h2>
            <p>this is the select board container</p>
          </section>

          <section className="create-board">
            <h2>Create Board</h2>
            <p>this is the create board container</p>
          </section>

        </section>

        <section className="card-container">

          <section className="cards-list">
            <h2 id="cards-list-label">Cards for .....</h2>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>
            <div className="sticky">
              sticky
            </div>

            <div className="sticky">
              sticky
            </div><div className="sticky">
              sticky
            </div>
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
