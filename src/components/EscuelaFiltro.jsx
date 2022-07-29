import React from 'react'
import styles from './EscuelaFiltro.module.css'
export default function EscuelaFiltro() {
    return (
        <div>
            <label for='escuelas'>Buscar por escuela</label>

            <select name='escuelas' id='escuelas'>
                <option value='volvo'>EPIS</option>
                <option value='saab'>EPO</option>
                <option value='mercedes'>EPIC</option>
                <option value='audi'>EPIA</option>
            </select>

            <label for='fecha'>Buscar por fecha</label>
            <input type="date" name="fecha" id="fecha" />
        </div>
    )
}
