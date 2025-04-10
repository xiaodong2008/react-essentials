import React, { useState } from "react";
import Gameboard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  const [winner, setWinner] = useState(undefined);

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <Gameboard onGameOver={setWinner}  />
        {
          winner !== undefined && (
            <div id="game-over">
              {winner ? (
                <p>{`Winner: ${winner}`}</p>
              ) : (
                <p>It's a draw!</p>
              )}
              <button onClick={() => window.location.reload()}>
                Play Again
              </button>
            </div>
          )
        }
      </div>
    </main>
  );
}

export default App;
