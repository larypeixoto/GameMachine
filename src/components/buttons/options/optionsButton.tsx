import styles from "./optionsButton.module.css";

export function OptionsButton({ onClick, children, selected, disabled }) {
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