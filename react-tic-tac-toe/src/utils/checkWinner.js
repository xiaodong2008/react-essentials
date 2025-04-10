export default function checkWinner(board) {
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
}
