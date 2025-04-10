import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  const [winner, setWinner] = useState(undefined);
  const [count, setCount] = useState([0, 0]); // [X wins, O wins]
  const [nowTurn, setNowTurn] = useState("X");

  const restartGame = {};

  function handleWin(player) {
    setWinner(player);
    setCount((prevCount) => {
      const newCount = [...prevCount];
      if (player === "X") {
        newCount[0] += 1;
      } else if (player === "O") {
        newCount[1] += 1;
      }
      return newCount;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <div
          id="win-count"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <b>Score: {count[0]}</b>
          <b>Now Turn: {nowTurn}</b>
          <b>Score: {count[1]}</b>
        </div>
        <Gameboard onGameOver={handleWin} setNowTurn={setNowTurn} restartGame={restartGame} />
        {winner !== undefined && (
          <div id="game-over">
            {winner ? <p>{`Winner: ${winner}`}</p> : <p>It's a draw!</p>}
            <button
              onClick={() => {
                restartGame.func();
                setWinner(undefined);
              }}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
