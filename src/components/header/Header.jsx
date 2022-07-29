import React from 'react'
import styles from './Header.module.css'
import imagen from '../../assets/imagenFondo.jpg'
export default function Header() {
  return (
    <div className={styles.container}>

        <img src={imagen} alt="" className={styles.imagen}/>
        <div className={styles.gradiente}></div>
        <div className={styles.mensaje}>
            <h1>AGENDA UPT</h1>
            <h3>Universidad Privada de Tacna</h3>
            <p>Aqui podras ver todos los eventos que se presentaran en la universidad </p>
        </div>
    </div>
  )
}
