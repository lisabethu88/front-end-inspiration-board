import './App.css';
import { useState, useEffect } from "react";
import Board from './components/Board';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App(){
// for formatting HTTP response
const transformResponse = (board) => {
  const {
      board_id,
      title,
      owner
  } = board;
  return { board_id, title, owner };
}; 
/* ---------------API CALLS--------------- */
// GET /boards
const getAllBoards = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      console.log("im in get all boards and this is the response data:")
      console.log(response.data)
      return response.data.map(transformResponse);
    })
    .catch((error) => {
      console.log("oh no theres an error in getAllBoards!")
      console.log(error);
    });
};

// POST /boards
const addBoard = (title, owner) => {
  const requestBody = {
    title,
    owner
  };
  console.log("im in addBoard!")
  return axios
    .post(`${kBaseUrl}/boards`, [requestBody])
    .then((response) => {
      return transformResponse(response.data);
    })
    .catch((error) => {
      console.log("oh no an error occured in addBoard")
      console.log(error);
    });
};

/* ------------------- STATE ------------------- */
  // getting state of the selected board, initially 
  // a dictionary of empty strings
const [selectedBoard, setSelectedBoard] = useState({
      board_id: '',
      title: '',
      owner: ''
  });

  // set the state of the selected board
  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  // getting state of the board, initally an empty list
  const [boardState, setBoardState] = useState([]);

  // updating board state
  useEffect(() => {
    axios.get(`${kBaseUrl}/boards`, {
    }).then((response) => {
      console.log(response.data)
      setBoardState(response.data);
    })
  }, []);

  // getting all boards
  const fetchBoards = () => {
      getAllBoards().then((boards) => {
        setBoardState(boards);
      });
    };

  useEffect(() => {
    fetchBoards();
  }, []);

  const createNewBoard = (title, owner) => {
    console.log(title, owner);
      addBoard(title, owner)
      .then((newBoard) => {
        console.log('this is newBoard:')
        console.log(newBoard)
        setBoardState(boardState => [...boardState, newBoard]);
      })
      .catch((error) => {
        console.log('newBoard error:')
        console.log(error);
      });
  };

  const selectBoardMessage = () => {
    if (selectedBoard.board_id) {
      return (
      `${selectedBoard.title} board created by ${selectedBoard.owner}`
      )
    }
    return ("Select a Board from the Board List")
  };

  const [isBoardFormVisible, setVisibility] = useState(false);
  const onClickBoardFormButton = () => setVisibility(!isBoardFormVisible);

  const showBoard = () => {
    if (selectedBoard.board_id) {
      return (
        <CardList board={selectedBoard}></CardList>
      )
    };
  };
  
  const boards = boardState.map((board) => {
    return <li><Board onBoardSelect={selectBoard} board={board}/></li>
});


  return (
    <section className="content-container">

      <header className="app-header">
        <h1>Inspiration Board</h1>
      </header>

      <main className="main-container">

        <section className="board-container">

          <section className="board-list-container">
            <h2>Boards</h2>
            <ol className="boards">
              {boards}
            </ol>
          </section>

          <section className="select-board-container">
            <h2>Selected Board</h2>
            <p>{selectBoardMessage()}</p>
          </section>

          <section className="create-board-container">
            <h2>Create Board</h2>
            <section className="new-board-form">
              {isBoardFormVisible ? "" : <NewBoardForm createNewBoard={createNewBoard}/>}
              <button onClick={onClickBoardFormButton}>
                {isBoardFormVisible ? "Show New Board Form" : "Hide New Board Form"}
              </button>
            </section>
          </section>

          <section>
            {showBoard}
          </section>
          
        </section>   
      </main>
    </section> 
  )

};

export default App;
