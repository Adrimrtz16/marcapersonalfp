import ImgProyecto from '../../assets/ImgProyecto.webp';
import './Proyecto.css'

const FamiliaProfesional = (props) => {

    return (
        <div className="col-md-3">
            <div className="row margen-proyecto gris">
                <div className="col-md-5">
                    <img className='img-proyecto w-100' src={ImgProyecto} alt="Imagen de la familia profesional" />
                </div>
                <div className='col-md 7'>
                    <p>{props.nombre}</p>
                    <div className='row blanco'>
                        <div className='col-12'>
                            <p>descripcion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FamiliaProfesional;