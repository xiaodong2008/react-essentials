import React, { useState } from "react";

const initialBoard = Array.from({ length: 3 }, () => Array(3).fill(null));

export default function Gameboard({ onGameOver, restartGame, setNowTurn }) {
  const [board, setBoard] = useState(initialBoard);
  const [currentTurn, setCurrentTurn] = useState("X");

  restartGame.func = () => {
    setBoard(initialBoard);
    setCurrentTurn("X");
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      // Rows
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Columns
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        board[Math.floor(a / 3)][a % 3] &&
        board[Math.floor(a / 3)][a % 3] === board[Math.floor(b / 3)][b % 3] &&
        board[Math.floor(a / 3)][a % 3] === board[Math.floor(c / 3)][c % 3]
      ) {
        return board[Math.floor(a / 3)][a % 3];
      }
    }
    return null;
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
