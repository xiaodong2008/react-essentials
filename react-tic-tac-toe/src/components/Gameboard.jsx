import React, { useState } from "react";
import checkWinner from "../utils/checkWinner";

const initialBoard = Array.from({ length: 3 }, () => Array(3).fill(null));

export default function Gameboard({ onGameOver, restartGame, setNowTurn }) {
  const [board, setBoard] = useState(initialBoard);
  const [currentTurn, setCurrentTurn] = useState("X");

  restartGame.func = () => {
    setBoard(initialBoard);
    setCurrentTurn("X");
  };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex} className="row">
          <ol>
            {row.map((cell, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => {
                    if (board[rowIndex][cellIndex]) return;

                    const newBoard = board.map((r, rIndex) =>
                      rIndex === rowIndex
                        ? r.map((c, cIndex) =>
                            cIndex === cellIndex ? currentTurn : c
                          )
                        : r
                    );
                    setBoard(newBoard);

                    const winner = checkWinner(newBoard);
                    if (winner) {
                      onGameOver(winner);
                    } else if (newBoard.flat().every((cell) => cell)) {
                      onGameOver(null);
                    } else {
                      setCurrentTurn(currentTurn === "X" ? "O" : "X");
                      setNowTurn(currentTurn === "X" ? "O" : "X");
                    }
                  }}
                >
                  {cell}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
