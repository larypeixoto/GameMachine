import styles from "./jokenpo.module.css";

import { useEffect, useState } from "react";

import { SquareCard } from "../../components/cards/squareCard/squareCard.tsx";
import { OptionsButton } from "../../components/buttons/options/optionsButton.tsx";
import { winOptions } from "../../data/winOptions.js";
import { FunctionButton } from "../../components/buttons/functions/functionButton.tsx";

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
      setResult("Você venceu.");
    } else if (winner === "computer") {
      setComputerScore((score) => score + 1);
      setResult("Você perdeu.");
    } else {
      setDrawScore((draw) => draw + 1);
      setResult("Empate!");
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
      <h1 className={styles.title}>Jo-ken-po!</h1>

      <div className={styles.containerGame}>
        <div className={styles.targetContainer}>
          <p className={styles.textGame}>
            Até quantas vitórias vamos jogar?
          </p>
          <div className={styles.optionsContainer}>
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
          <p className={styles.textGame}>Escolha sua jogada!</p>
          <div className={styles.moves}>
            {moves.map((move) => (
              <button
                key={move}
                className={styles.moveButton}
                onClick={() => handlePlayerMove(move)}
                disabled={gameOver}
                aria-label={`Escolha ${move}`}
                title={move.charAt(0).toUpperCase() + move.slice(1)}
              >
                {movementSymbol[move]}
              </button>
            ))}
          </div>

          {result && (
            <div className={styles.result}>
              <p className={styles.resultText}>
                Você escolheu {movementSymbol[playerMove!]}
              </p>
              <p className={styles.resultText}>
                e o computador escolheu {movementSymbol[computerMove!]}
              </p>

              {result === "Empate!" && (
                <p className={styles.resultText}>Foi um empate!</p>
              )}
              {result === "Você venceu." && (
                <p className={styles.resultText}>
                  Parabéns, você ganhou a rodada!
                </p>
              )}
              {result === "Você perdeu." && (
                <p className={styles.resultText}>
                  Que pena, você perdeu a rodada!
                </p>
              )}
            </div>
          )}

          <div className={styles.score}>
            <p className={styles.textGame}>Placar:</p>
            <div className={styles.scores}>
              <div className={styles.scores}>
                <SquareCard title="Você" value={playerScore} />
                <SquareCard title="Empates" value={drawScore} />
                <SquareCard title="Computador" value={computerScore} />
              </div>
            </div>
          </div>

          {gameOver && (
            <div className={styles.gameOver}>
              <div className={styles.finalMessage}>
                <p className={styles.endResult}>
                  {playerScore > computerScore
                    ? "Você venceu! 🎉"
                    : "Você perdeu! 🤖"}
                </p>
              </div>
              <FunctionButton onClick={resetGame}
              >
                Jogar novamente
              </FunctionButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}