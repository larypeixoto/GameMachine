import styles from "./optionsButton.module.css";

export function OptionsButton({ onClick, children, selected }) {
  return (
    <button
        className={`${styles.optionsButton} ${
          selected ? styles.selected : ""
        }`}
        onClick={onClick}
    >
      {children}
    </button>
  );
}