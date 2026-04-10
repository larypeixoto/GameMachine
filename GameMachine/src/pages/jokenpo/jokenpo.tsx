import styles from "./jokenpo.module.css";

import { useEffect, useState } from "react";

import { winOptions } from "../../data/winOptions";
import { SquareCard } from "../../components/cards/square/squareCard.tsx";
import { MessageCard } from "../../components/cards/message/messageCard.tsx";
import { OptionsButton } from "../../components/buttons/options/optionsButton.tsx";
import { FunctionButton } from "../../components/buttons/functions/functionButton.tsx";
import { SquareButton } from "../../components/buttons/square/squareButton.tsx";

type Movement = "rock" | "paper" | "scissors";
type Winner = "player" | "computer" | "draw";

const moves: Movement[] = ["rock", "paper", "scissors"];

const movementSymbol: Record<Movement, string> = {
  rock: "✊",
  paper: "✋",
  scissors: "✌️",
};

function getRandomMove(): Movement {
  const randomMove = Math.floor(Math.random() * moves.length);
  return moves[randomMove];
}

function determineWinner(
  playerMove: Movement,
  computerMove: Movement
): Winner {
  if (playerMove === computerMove) return "draw";

  if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return "player";
  }

  return "computer";
}

export function Jokenpo() {
  const [playerMove, setPlayerMove] = useState<Movement | null>(null);
  const [computerMove, setComputerMove] = useState<Movement | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);

  const [targetWins, setTargetWins] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  function handlePlayerMove(move: Movement) {
    if (gameOver) return;

    const computerMovement = getRandomMove();
    const winner = determineWinner(move, computerMovement);

    setPlayerMove(move);
    setComputerMove(computerMovement);

    if (winner === "player") {
      setPlayerScore((score) => score + 1);
      setResult("Human won.");
    } else if (winner === "computer") {
      setComputerScore((score) => score + 1);
      setResult("Machine won.");
    } else {
      setDrawScore((draw) => draw + 1);
      setResult("Draw!");
    }
  }

  useEffect(() => {
    if (playerScore >= targetWins || computerScore >= targetWins) {
      setGameOver(true);
    }
  }, [playerScore, computerScore, targetWins]);

  function resetGame() {
    setPlayerMove(null);
    setComputerMove(null);
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
    setDrawScore(0);
    setGameOver(false);
  }

  return (
    <div className={styles.container}>
      <h1 id="pageTitle">Jo-ken-po!</h1>
      <div className={styles.containerGame}>
        <h2 id="pageSubtitle">
          Quantas vitórias para definir um vencedor?
        </h2>
        <div className={styles.containerOptions}>
          {winOptions.map((option) => (
            <OptionsButton
              key={option.value}
              selected={targetWins === option.value}
              disabled={
                gameOver === false &&
                (playerScore > 0 || computerScore > 0 || drawScore > 0)
              }
              onClick={() => {
                setTargetWins(option.value);
                resetGame();
              }}
            >
              {option.label}
            </OptionsButton>
          ))}
        </div>
        <h2 id="pageSubtitle">Faça seu movimento!</h2>
        <div className={styles.containerMoves}>
          {moves.map((move) => (
            <SquareButton
              key={move}
              onClick={() => handlePlayerMove(move)}
              disabled={gameOver}
              aria={`Escolha ${move}`}
              title={move.charAt(0).toUpperCase() + move.slice(1)}
            >
              {movementSymbol[move]}
            </SquareButton>
          ))}
        </div>

        {result && (
          <MessageCard title={"Resultado da Partida"}>
            <p>
              Sua escolha foi {movementSymbol[playerMove!]} e o computador escolheu {movementSymbol[computerMove!]}
            </p>
            {result === "Draw!" && (
              <p className={styles.resultText}>Foi um empate!</p>
            )}
            {result === "Human won." && (
              <p className={styles.resultText}>Você venceu a partida! 🎉</p>
            )}
            {result === "Machine won." && (
              <p className={styles.resultText}>O computador venceu a partida! 🤖</p>
            )}
          </MessageCard>
        )}

        <div className={styles.score}>
          <h2 id="pageSubtitle" className={styles.scoreboard}>Placar:</h2>
          <div className={styles.scores}>
            <SquareCard title="Jogador" value={playerScore} />
            <SquareCard title="Empates" value={drawScore} />
            <SquareCard title="Computador" value={computerScore} />
          </div>
        </div>

        {gameOver && (
          <h2 className={styles.finalText}>
            {playerScore > computerScore
              ? "Você venceu!"
              : "Você perdeu!"}
          </h2>
        )}

        <FunctionButton onClick={resetGame}>
          Jogar novamente
        </FunctionButton>
      </div>
    </div>
  );
}