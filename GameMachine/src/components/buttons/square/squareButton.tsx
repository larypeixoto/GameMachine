import styles from "./squareButton.module.css";

export function SquareButton({ onClick, children, disabled, aria, title }) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            disabled={disabled}
            aria-label={aria}
            title={title}
        >
            <span className={styles.content}>
                {children}
            </span>
        </button>
    );
}
