import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Detalle from './pages/Detalle'
import Navar from './components/navar/Navar'

export default function App() {

  return (

        <div className='App'>
            <header >
              <Navar/>
            </header>

            <main>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='Detalle/:id' element={<Detalle />} />
                </Routes>
            </main>
        </div>

    )
}
