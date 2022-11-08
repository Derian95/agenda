import React from 'react'
import styles from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={styles.container}>
    <div className={styles.ldsRipple}><div></div><div></div></div>

    </div>
  )
}
