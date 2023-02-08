import "./App.css";
import { useState, useEffect } from "react";
import Board from "./components/Board";
import CardList from "./components/CardList";
import NewBoardForm from "./components/NewBoardForm";
import axios from "axios";

const kBaseUrl = process.env.REACT_APP_BACKEND_URL;

function App() {
  // for formatting HTTP response
  const transformResponse = (board) => {
    const { board_id, title, owner } = board;
    return { board_id, title, owner };
  };
  /* ---------------API CALLS--------------- */
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
  // getting state of the selected board, initially
  // a dictionary of empty strings
  const [selectedBoard, setSelectedBoard] = useState({
    board_id: "",
    title: "",
    owner: "",
  });

  // set the state of the selected board
  const selectBoard = (board) => {
    setSelectedBoard(board);
  };

  // getting state of the board, initally an empty list
  const [boardState, setBoardState] = useState([]);

  // updating board state
  useEffect(() => {
    axios.get(`${kBaseUrl}boards`, {}).then((response) => {
      setBoardState(response.data);
    });
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

  const [isBoardFormVisible, setVisibility] = useState(false);
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

  return (
    <section className="content-container">
      <header className="app-header">
        <h1>Inspiration Board</h1>
      </header>

      <main className="main-container">
        <section className="board-container">
          <section className="board-list-container">
            <h2 className="h2-board-menu">Boards</h2>
            <ol className="boards">{boards}</ol>
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
              <button onClick={onClickBoardFormButton}>
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
