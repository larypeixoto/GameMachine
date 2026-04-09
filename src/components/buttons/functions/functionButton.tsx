import styles from './functionButton.module.css';

export function FunctionButton({ onClick, children }) {
    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.content}>
                {children}
            </span>
        </button>
    );
}