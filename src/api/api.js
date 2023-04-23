import axios from 'axios'


export const traerEventos=async() => {
    const respuesta = await axios.get('https://agend-aupt.onrender.com/api/event/getAllEvents')
    return(respuesta.data)
} 