import { useState } from "react"
import './FamiliaProfesional.css'

const FamiliaProfesional = (props) => {

    const [activado, setActivado] = useState(false)

    function activar() {
        setActivado(!activado)
        if(!activado) {
            props.actualizarCodigosActivados(props.codigo)
        } else {
            props.eliminarCodigoActivado(props.codigo)
        }
    }

    return (
        <div>
            <button 
                className={activado ? 'activado' : 'desactivado'}
                onClick={activar}>
                    {props.familia}
            </button>
        </div>
    )
}

export default FamiliaProfesional;