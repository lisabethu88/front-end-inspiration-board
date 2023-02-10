import "./App.css";
import { useState, useEffect } from "react";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import axios from "axios";
import logo from './images/logo.jpg';

const kBaseUrl = "https://inspiration-board-be.herokuapp.com";

function App() {
  // for formatting HTTP response
  const transformResponse = (board) => {
    const { board_id, title, owner } = board;
    return { board_id, title, owner };
  };
  /* ---------------API CALLS--------------- */

  // POST /boards
  const addBoard = (title, owner) => {
    const requestBody = {
      title,
      owner,
    };
    return axios
      .post(`${kBaseUrl}/boards`, requestBody)
      .then((response) => {
        return transformResponse(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* ------------------- STATE ------------------- */
  // get initial state
  const [selectedBoard, setSelectedBoard] = useState({
    board_id: "",
    title: "",
    owner: "",
  });
  const [boardState, setBoardState] = useState([]);
  const [isBoardFormVisible, setVisibility] = useState(false);

  // set the state
  const selectBoard = (board) => {
    setSelectedBoard(board);
  };
  const createNewBoard = (title, owner) => {
    addBoard(title, owner)
      .then((newBoard) => {
        setBoardState((boardState) => [...boardState, newBoard]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectMsg = `${selectedBoard.title} board created by ${selectedBoard.owner}`;
  const unselectMsg = "Select a Board from the Board List";
  const selectBoardMessage = selectedBoard.board_id ? selectMsg : unselectMsg;
  const onClickBoardFormButton = () => setVisibility(!isBoardFormVisible);
  const showBoard = selectedBoard.board_id ? (
    <CardList board={selectedBoard} />
  ) : (
    ""
  );

  const boards = boardState.map((boardItem) => {
    return (
      <li className="board-list-item">
        <Board board={boardItem} selectBoard={selectBoard} />
      </li>
    );
  });

  // setting board state
  useEffect(() => {
    axios.get(`${kBaseUrl}/boards`, {}).then((response) => {
      setBoardState(response.data);
    });
  }, []);

  return (
    <section className="content-container">
      <header className="app-header">
        <img className="logo" alt="logo" src={logo}/>
        <h1>Inspiration Board</h1>
      </header>

      <main className="main-container">
        <section className="board-container">
          <section className="board-list-container">
            <h2 className="h2-board-menu">Boards</h2>
            <ul className="boards">{boards}</ul>
          </section>

          <section className="select-board-container">
            <h2 className="h2-board-menu">Selected Board</h2>
            <p>{selectBoardMessage}</p>
          </section>

          <section className="create-board-container">
            <h2 className="h2-board-menu">Create Board</h2>
            <section className="new-board-form">
              {isBoardFormVisible ? (
                ""
              ) : (
                <NewBoardForm createNewBoard={createNewBoard} />
              )}
              <button className="button-class" onClick={onClickBoardFormButton}>
                {isBoardFormVisible
                  ? "Show New Board Form"
                  : "Hide New Board Form"}
              </button>
            </section>
          </section>
        </section>

        <section>{showBoard}</section>
      </main>
    </section>
  );
}

export default App;
