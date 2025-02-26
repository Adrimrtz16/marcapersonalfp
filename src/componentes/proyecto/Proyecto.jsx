import ImgProyecto from '../../assets/ImgProyecto.webp';
import './Proyecto.css'

const FamiliaProfesional = (props) => {

    function mostrarParticipantes(participantes) {
        return participantes.map((participante, index) => (
            <p className='margen-alumnos' key={index}>{participante.name}</p>
        ));
    }

    function mostrarCiclos(ciclos) {
        return ciclos.map((ciclo) => (
            ciclo.codCiclo + ' '
        ));
    }

    return (
        <div className="col-md-3">
            <div className="row margen-proyecto gris proyecto">
                <div className="col-md-5">
                    <img className='img-proyecto' src={ImgProyecto} alt="Imagen de la familia profesional" />
                </div>
                <div className='col-md 7'>
                    <p className='margen-titulo'>{props.nombre}</p>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-10 blanco'>
                            <div className='row'>
                                <div className='col-md-12 margen-alumnos'>
                                    <p className='margen-lista-alumnos'><strong>Alumnos</strong></p>
                                    {mostrarParticipantes(props.participantes)}
                                    <p className='margen-lista-alumnos'><strong>Tutor: </strong>{props.tutor}</p>
                                    <p className='margen-lista-alumnos'><strong>Ciclos: </strong>{mostrarCiclos(props.ciclos)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamiliaProfesional;