import styles from './functionButton.module.css';

type Props = {
    onClick: () => void;
    children: React.ReactNode;
}
export function FunctionButton({ onClick, children }: Props) {
    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.content}>
                {children}
            </span>
        </button>
    );
}