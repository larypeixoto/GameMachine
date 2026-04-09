import styles from "./messageCard.module.css";

export function MessageCard({ title, children }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}
