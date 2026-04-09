import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";


export function Header() {
  const navigate = useNavigate();

  return (
      <header className={styles.container}>
        <div className={styles.intro}>
          <img
            src={logo} alt="Game Machine Logo"
            className={styles.logo}
            onClick={() => navigate("/")}
          />
          <h1 className={styles.title}>
            Game Machine
          </h1>
        </div>
      </header>
  );
}
