import axios from 'axios'


export const traerEventos=async() => {
    const respuesta = await axios.get('http://localhost:3000/eventos')
    console.log(respuesta.data)
    return(respuesta.data)
}