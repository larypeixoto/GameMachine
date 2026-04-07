import styles from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png";


export function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.navbar}>
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
      </div>
    </>
  );
}
