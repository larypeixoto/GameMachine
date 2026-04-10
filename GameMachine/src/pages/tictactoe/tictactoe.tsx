import styles from "./tictactoe.module.css";

import { useState, useEffect } from "react";

import { FunctionButton } from "../../components/buttons/functions/functionButton.tsx";

type Player = "X" | "O";
type Cell = Player | null;

export function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
  const [playerSymbol, setPlayerSymbol] = useState<Player | null>(null);
  const [computerSymbol, setComputerSymbol] = useState<Player | null>(null);
  const [playerTurn, setPlayerTurn] = useState(true);
  const [gameOver, setWinner] = useState<Player | "draw" | null>(null);

  function chooseSymbol(symbol: Player) {
    setPlayerSymbol(symbol);
    setComputerSymbol(symbol === "X" ? "O" : "X");
  }

  function handlePlayerMove(index: number) {
    if (!playerTurn || board[index] || gameOver || !playerSymbol) return;

    const newBoard = [...board];
    newBoard[index] = playerSymbol;
    setBoard(newBoard);
    setPlayerTurn(false);
  }

  function checkWinner(board: Cell[]): Player | "draw" | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return board.every((cell) => cell) ? "draw" : null;
  }

  function computerMove() {
    if (gameOver || playerTurn || !computerSymbol) return;

    const emptyIndexes = board
      .map((cell, idx) => (cell === null ? idx : null))
      .filter((v) => v !== null) as number[];

    if (emptyIndexes.length === 0) return;

    const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
    const newBoard = [...board];
    newBoard[randomIndex] = computerSymbol;
    setBoard(newBoard);
    setPlayerTurn(true);
  }

  useEffect(() => {
    setWinner(checkWinner(board));
  }, [board]);

  useEffect(() => {
    if (!playerTurn && !gameOver) {
      const timer = setTimeout(() => computerMove(), 400);
      return () => clearTimeout(timer);
    }
  }, [playerTurn, gameOver, board]);

  function resetGame() {
    setBoard(Array(9).fill(null));
    setPlayerTurn(true);
    setWinner(null);
  }

  return (
    <div className={styles.container}>
      <h1 id="pageTitle">TicTacToe</h1>

      {!playerSymbol && (
        <div className={styles.containerChoice}>
          <h2 id="pageSubtitle">
            Escolha seu símbolo:
          </h2>
          <div className={styles.symbolChoice}>
            <FunctionButton onClick={() => chooseSymbol("X")}>X</FunctionButton>
            <FunctionButton onClick={() => chooseSymbol("O")}>O</FunctionButton>
          </div>
        </div>
      )}

      {playerSymbol && (
        <>
          <div className={styles.board}>
            {board.map((cell, idx) => (
              <button
                key={idx}
                className={styles.cell}
                onClick={() => handlePlayerMove(idx)}
              >
                {cell}
              </button>
            ))}
          </div>

          {gameOver && (
            <h2 className={styles.finalText}>
              {gameOver === "draw"
                ? "Empate!"
                : gameOver === playerSymbol
                  ? "Você venceu!"
                  : "Você perdeu!"}
            </h2>
          )}
          <FunctionButton onClick={resetGame}>
            Jogar novamente
          </FunctionButton>
        </>
      )}
    </div>
  );
}