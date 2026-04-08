
import styles from './cardMenu.module.css';

import { useNavigate } from 'react-router-dom';

export function CardMenu({ title, description, route }) {

    const navigate = useNavigate();

    return(
        <div 
            className={styles.card}
            onClick={() => navigate(route)}
        >
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}