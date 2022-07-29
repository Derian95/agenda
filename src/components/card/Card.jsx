import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
export default function Card({ data }) {
    return (
        <div>
            <Link to={'/Detalle/' + data.id}>
                <div class={styles.card}>
                <div className={styles.fecha}>
                        <p>1 Enero</p>
                    </div>
                    <img
                        className={styles.card_image}
                        src={data.imagen}
                        alt='s'
                    />
                    
                    <div className={styles.informacion}>
                        <h5>{data.titulo}</h5>
                        <div className={styles.datos}>
                            <p>{data.lugar} </p>
                            <p>{data.fecha_inicio} </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
