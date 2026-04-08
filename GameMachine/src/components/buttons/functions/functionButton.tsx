import styles from './functionButton.module.css';

export function FunctionButton({ onClick, children }) {
    return (
        <button className={styles.functionButton} onClick={onClick}>
            {children}
        </button>
    );
}