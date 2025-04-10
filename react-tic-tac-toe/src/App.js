import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";

const defaultPlayer = {
  X: "Player 1",
  O: "Player 2",
}

function App() {
  const [winner, setWinner] = useState(undefined);
  const [count, setCount] = useState([0, 0]); // [X wins, O wins]
  const [nowTurn, setNowTurn] = useState("X");
  const [player, setPlayer] = useState(defaultPlayer);

  const restartGame = {};

  function updatePlayerName(symbol, name) {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      [symbol]: name,
    }));
  }

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
    setNowTurn("X" === player ? "O" : "X");
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={player.X} symbol="X" updatePlayerName={name => updatePlayerName("X", name)} />
          <Player name={player.O} symbol="O" updatePlayerName={name => updatePlayerName("O", name)} />
        </ol>
        <div
          id="win-count"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <b>Score: {count[0]}</b>
          <b>Now Turn: {player[nowTurn]} ({nowTurn})</b>
          <b>Score: {count[1]}</b>
        </div>
        <Gameboard onGameOver={handleWin} setNowTurn={setNowTurn} restartGame={restartGame} />
        {winner !== undefined && (
          <div id="game-over">
            {winner ? <p>{`Winner: ${player[winner]}`}</p> : <p>It's a draw!</p>}
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
