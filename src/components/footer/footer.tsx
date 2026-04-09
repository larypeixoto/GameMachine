import styles from "./footer.module.css";

export function Footer() {
    return(
        <footer className={styles.container}>
            <p className={styles.content}>Copyright © 2024 Game Machine. All rights reserved.</p>
            <p className={styles.content}>Projeto individual por <b>Laryssa Peixoto</b>, disponível no <a href="https://github.com/larypeixoto">GitHub</a>.</p>
        </footer>
    )
}