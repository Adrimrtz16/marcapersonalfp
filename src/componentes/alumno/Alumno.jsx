import ImgAlumno from '../../assets/imgAlumno.webp';

const Alumno = (props) => {

    function mostrarIdiomas(idiomas) {
        
        return idiomas.map((idioma, index) => (
            <p className='margen-alumnos' key={index}>{idioma.english_name} {idioma.nivel}</p>
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
                    <img className='img-proyecto' src={ImgAlumno} alt="Imagen de la familia profesional" />
                </div>
                <div className='col-md 7'>
                    <p className='margen-titulo'>{props.nombre}</p>
                    <div className='row'>
                        <div className='col-1'></div>
                        <div className='col-10 blanco'>
                            <div className='row'>
                                <div className='col-md-12 margen-alumnos'>
                                    <p className='margen-lista-alumnos'><strong>Idiomas</strong></p>
                                    {mostrarIdiomas(props.idiomas)}
                                    <p className='margen-lista-alumnos'><strong>Ciclos: </strong>{mostrarCiclos(props.ciclos)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='padding-titulo'>{props.curriculo}</p>
            </div>
        </div>
    )
}

export default Alumno;