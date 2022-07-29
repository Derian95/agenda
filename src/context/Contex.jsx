import { createContext, useState } from 'react'
export const Eventos=createContext()

export default function Contex({children}) {
  const [evento, setEvento] = useState([])
  const [filter, setFilter] = useState([])
  const [nombre, setNombre] = useState('')

  return (
    <Eventos.Provider value={{evento, setEvento,filter, setFilter,nombre,setNombre}}>
      {children}
    </Eventos.Provider>
  )
}
