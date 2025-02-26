import ImgProyecto from '../../assets/ImgProyecto.webp';
import './Proyecto.css'

const FamiliaProfesional = (props) => {

    console.log(props.participantes);

    function mostrarAlumnos(participantes) {
        participantes.map((participante) => {
            return <p>{participante.nombre}</p>
        })
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
                            {mostrarAlumnos(props.participantes)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamiliaProfesional;