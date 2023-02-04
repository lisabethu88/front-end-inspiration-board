import './App.css';
import { useState, useEffect } from "react";
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <main>
      <NewBoardForm></NewBoardForm>
      <BoardList></BoardList>
    </main>
  );
}

export default App;
