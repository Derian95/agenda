import styles from './Navar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
export default function Navar() {
    return (
        <div className={styles.container}>
            <Link to={'/'}>
                <img src={logo} alt='' className={styles.imagen} />
            </Link >
            <div className={styles.links}>
                <a href="https://aula.upt.edu.pe/login/index.php" target="_blank" rel="noopener noreferrer">
                <p>Aula virtual</p>
                </a>
                <a href="https://net.upt.edu.pe/index2.php?n=a38c138bbf10e4d5d2fbf6cb08bb280b" target="_blank" rel="noopener noreferrer">
                <p>Intranet</p>

                </a>
                
            </div>
        </div>
    )
}
