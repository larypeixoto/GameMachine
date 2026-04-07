
import styles from './cardMenu.module.css';

import { useNavigate } from 'react-router-dom';

export function CardMenu() {

    const navigate = useNavigate();

    return(
        <div 
            className={styles.cardContainer}
            onClick={() => navigate('/jogo1')}
            style={{ cursor: 'pointer' }}
        >
            <h3 className={styles.title}>Jogo 1</h3>
            <p className={styles.description}>Descrição do Jogo 1</p>
        </div>
    )
}