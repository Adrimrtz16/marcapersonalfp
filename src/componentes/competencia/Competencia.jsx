import { useState } from "react"

const Competencia = (props) => {

    const [activado, setActivado] = useState(false)

    function activar() {
        setActivado(!activado)
        if(!activado) {
            props.actualizarCompetenciasActivadas(props.codigo)
        } else {
            props.eliminarCompetenciasActivadas(props.codigo)
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

export default Competencia;