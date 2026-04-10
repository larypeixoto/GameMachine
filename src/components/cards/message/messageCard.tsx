import styles from "./messageCard.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
}

export function MessageCard({ title, children }: Props) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}
