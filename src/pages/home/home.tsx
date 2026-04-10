import styles from "./home.module.css";
import logo from "../../assets/logo.png";

import { games } from "../../data/games";
import { MenuCard } from "../../components/cards/menu/menuCard.js";

export function Home() {

  return (
    <div className={styles.container}>
      <h1 id="pageTitle">
        Olá, jogador!
      </h1>
      <div className={styles.menu}>
        <h2 id="pageSubtitle">
          O que vamos jogar hoje?
        </h2>
        <div className={styles.containerCards}>
          {games.map(game => (
            <MenuCard
              key={game.id}
              cardTitle={game.title}
              description={game.description}
              route={game.route}
            />
          ))}
        </div>
      </div>
      <img
        src={logo}
        alt="Game Machine Logo"
        className={styles.logo}
      />
    </div>
  );
}
