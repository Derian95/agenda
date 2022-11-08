import { useContext, useEffect, useState } from 'react'
import Card from '../components/card/Card'
import { Eventos } from '../context/Contex'
import { traerEventos } from '../api/api'
import EscuelaFiltro from '../components/EscuelaFiltro'
import styles from './Inicio.module.css'
import Carrusel from '../components/Carrusel'
import Header from '../components/header/Header'
import Buscador from '../components/buscar/Buscador'
import Footer from '../components/footer/Footer'
import { Loader } from '../components/loader/Loader'

export default function Inicio() {
    const { evento, setEvento, nombre, setNombre } = useContext(Eventos)
    const [loading, setLoading] = useState(true)

    const llenarEventos = async () => {
        const resultados = await traerEventos()
        setEvento(resultados)
        setLoading(false)
        console.log('raa')
    }
    useEffect(() => {
        llenarEventos()
    }, [nombre])

    if (loading) return <Loader/>
 
    //if(loading) return <p>raa</p>

    return (
        <div className={styles.container}>
            <Header />
            <h1>PROXIMOS EVENTOS</h1>

            <Buscador nombre={nombre} setNombre={setNombre} />
           
            <div className={styles.contain}>
                {evento
                    .filter((dato) =>
                        dato.titulo.toLowerCase().includes(nombre)
                    )
                    .map((evento) => {
                        return <Card key={evento._id} data={evento} />
                    })}
            {/* {
                loading?<p>Sin datos</p>:
                (evento.filter(dato=>dato.titulo.toLowerCase().includes(nombre)).map((evento) => {
                    return <Card key={evento.id} data={evento} />
                }))
            } */}
            
            </div>

            <Footer />
        </div>
    )
}
