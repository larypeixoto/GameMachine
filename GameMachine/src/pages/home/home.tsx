import styles from "./home.module.css";
import logo from "../../assets/logo.png";

import { useEffect, useState } from "react";

import { CardMenu } from "../../components/cards/cardMenu/cardMenu.js";
import { games } from "../../data/games.js";

export function Home() {

  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOptions(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {showOptions && (
        <div className={styles.content}>
          <h1 className={styles.title}>
            Olá, jogador!
          </h1>
          <img
            src={logo}
            alt="Game Machine Logo"
            className={styles.logo}
          />
          <div className={styles.menu}>
            <h2 className={styles.menuGreeting}>
              O que você quer jogar hoje?
            </h2>
            <div className={styles.containerCards}>
              {games.map(game => (
              <CardMenu
                key={game.id}
                title={game.title}
                description={game.description}
                route={game.route}
              />
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
