import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './Detalle.module.css'
import Footer from '../components/footer/Footer'

export default function Detalle() {
    const { id } = useParams()

    const [evento, setEvento] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchEvento = async (id) => {
        const response = await axios.get(`http://localhost:3000/eventos/${id}`)
        setEvento(response.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchEvento(id)
    }, [])
    if (loading) return <p>loading</p>
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.tipo}>
                    <p>{evento.tipo}</p>
                </div>
                <div className={styles.mensaje}>
                    <h3>{evento.titulo}</h3>

                    <p>
                        FECHA:
                        {' ' + evento.fecha_inicio + ' -'}
                        {' ' + evento.fecha_fin}
                    </p>
                    <p>
                        {' '}
                        HORA:
                        {' ' + evento.hora_inicio + ' -'}
                        {' ' + evento.hora_fin}
                    </p>
                    <p>LUGAR: {evento.lugar}</p>
                    <p>DIRIGIDO A : {evento.Dirigido_a}</p>
                </div>

                <div className={styles.gradiente}>
                    <img src={evento.imagen} alt='' className={styles.imagen} />
                </div>
            </div>
            <div className={styles.detalle}>
                <h3>Descripcion</h3>
                <p>{evento.descripcion}</p>
                <h3>Organizadores:</h3>

                {evento.organizador.map((orga) => {
                    return (
                        <div key={orga.nombre}>
                            <p> * {orga.nombre}</p>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </div>
    )
}
