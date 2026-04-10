import styles from "./optionsButton.module.css";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  selected: boolean;
  disabled: boolean;
}
export function OptionsButton({ onClick, children, selected, disabled }: Props) {
  return (
    <button
      className={`${styles.button} ${!selected ? styles.selected : ""
        }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}