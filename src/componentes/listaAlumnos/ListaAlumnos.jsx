import useAlumnos from '../../hooks/useAlumnos';
import Alumno from '../alumno/Alumno';
import AjaxLoader from '../ajaxLoader/AjaxLoader';

const ListaAlumnos = ({ competenciasActivadas }) => {

    const { alumnos, buscando } = useAlumnos();

    function mostrarAlumnos(alumno) {

        if (competenciasActivadas.length === 0) {
            return <Alumno 
                        key={alumno.id} 
                        nombre={alumno.nombre}
                        idiomas={alumno.idiomas}
                        ciclos={alumno.ciclos}
                        curriculo={alumno.curriculo.textocurriculum}>
                    </Alumno>
        } else {
            const tieneCompetenciaActivado = alumno.competencias.some(competencia => competenciasActivadas.includes(competencia.id));

            if (tieneCompetenciaActivado) {
                return <Alumno 
                            key={alumno.id} 
                            nombre={alumno.nombre}
                            idiomas={alumno.idiomas}
                            ciclos={alumno.ciclos}
                            curriculo={alumno.curriculo.textocurriculum}>
                        </Alumno>
            }

        }
    
    }

    return (
        <>
            <div className='row gris'>
                <div className="col-md-12">
                    <h5 className='titulo-busqueda'>Resultados</h5>
                </div>
            </div>
            <div className='row'>
                {buscando ? <AjaxLoader /> : alumnos.map(mostrarAlumnos)}
            </div>
        </>

    )
}

export default ListaAlumnos;