
import styles from './menuCard.module.css';

import { useNavigate } from 'react-router-dom';

export function MenuCard({ cardTitle, description, route }) {

    const navigate = useNavigate();

    return (
        <div
            className={styles.card}
            onClick={() => navigate(route)}
        >
            <h3 className={styles.cardTitle}>{cardTitle}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}