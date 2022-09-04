import axios from 'axios'


export const traerEventos=async() => {
    const respuesta = await axios.get('https://agenda-upt.herokuapp.com/api/event/getAllEvents')
    return(respuesta.data)
} 