import styles from "./squareCard.module.css";

type SquareCardProps = {
  title: string;
  value: number;
};

export function SquareCard({ title, value }: SquareCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}