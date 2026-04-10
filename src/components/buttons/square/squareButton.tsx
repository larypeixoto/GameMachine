import styles from "./squareButton.module.css";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
    disabled: boolean;
    aria: string;
    title: string;
}
export function SquareButton({ onClick, children, disabled, aria, title }: Props) {
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
