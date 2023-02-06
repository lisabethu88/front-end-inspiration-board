import './App.css';
import { useState, useEffect } from "react";
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

// for formatting HTTP response
const transformResponse = (board) => {
  const {
      board_id,
      title,
      owner
  } = board;
  return { board_id, title, owner };
}; 
/* 
// GET /boards
const getAllBoards = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      return response.data.map(transformResponse);
    })
    .catch((error) => {
      console.log(error);
    });
};

// POST /boards
const addBoard = (boardData) => {
  const requestBody = {
    ...boardData,
    likes_count: 0
  };

  return axios
    .post(`${kBaseUrl}/boards`, [requestBody])
    .then((response) => {
      return response.data.map(transformResponse);
    })
    .catch((error) => {
      console.log(error);
    });
};
 */
function App(){
  // getting state of the selected board, initially 
  // a dictionary of empty strings
/*    const [boardChoice, setBoardChoice] = useState({
      board_id: '',
      title: '',
      owner: ''
  });

  // set the state of the selected board
  const chooseBoard = (board) => {
    setBoardChoice(board);
  };

  // getting state of the board, initally an empty list
  const [boardState, setBoardState] = useState([]);

  // getting all boards
  const fetchBoards = () => {
      getAllBoards().then((boards) => {
        setBoardState(boards);
      });
    };

  // fetchBoards only runs on first render
  useEffect(() => {
    fetchBoards();
  }, []);

  const selectBoardMessage = () => {
    if (boardChoice.board_id) {
      return (
      `${boardChoice.title} board created by ${boardChoice.owner}`
      )
    }
    else {
      return ("Select a board from the list")}
  };

  const [visible, setVisibility] = useState(false);
  const changeVisibility = () => {
    setVisibility(!visible);
  };
  const isBoardVisible = () => {
    if (boardChoice.board_id) {
      return (
        <CardList board={boardChoice}></CardList>
      )
  };
  */
  return (
    <section className="content-container">
      <header className="app-header">
        <h1>Inspiration Board</h1>
      </header>

      <main className="main-container">

        <section className="board-container">

          <section className="board-list">
            <h2>Boards</h2>
            <ol className="boards">
              {/*boardState*/}
            </ol>
            <p>this is the board list container</p>
          </section>

          <section className="select-board">
            <h2>Selected Board</h2>
            <p>{/*selectBoardMessage*/}</p>
          </section>

        
          <section className="create-board">
            <h2>Create Board</h2>
            <p>this is the create board container</p>
          </section>

          {/*isBoardVisible*/}

        </section>   
      </main>
    </section> 
  )
};

export default App;
