import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
export default function Card({ data }) {

    const [fecha_inicio, setFecha_inicio] = useState();

    const raa=(fecha) => {
      var x = new Date(fecha)
      var dd = x.getDate()
      var mm = x.toLocaleString('default',{month:'short'}).toUpperCase()
        setFecha_inicio(`${dd} de ${mm}`)
    }

    useEffect(() => {
        raa(data.fecha_inicio)
    }, []);

    return (
        <div>
            <Link to={'/Detalle/' + data._id}>
                <div className={styles.card}>
                <div className={styles.fecha}>
                        <p>{fecha_inicio}</p>
                    </div>
                    <img
                        className={styles.card_image}
                        src={data.imagen.secure_url}
                        alt='s'
                    />
                    
                    <div className={styles.informacion}>
                        <h5>{data.titulo}</h5>
                        <div className={styles.datos}>
                            <p>{data.lugar} </p>
                            <p>{fecha_inicio} </p>
                            <p>{data.fecha_fin} </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
