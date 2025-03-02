import useAlumnos from '../../hooks/useAlumnos';
import Alumno from '../alumno/Alumno';
import AjaxLoader from '../ajaxLoader/AjaxLoader';

const ListaAlumnos = ({ competenciasActivadas , codigosActivados}) => {

    const { alumnos, buscando } = useAlumnos();

    function mostrarAlumnos(alumno) {

        const curriculoTexto = alumno.curriculo ? alumno.curriculo.texto_curriculum : '';

        if (competenciasActivadas.length === 0 && codigosActivados.length === 0) {
            return <Alumno 
                        key={alumno.id} 
                        nombre={alumno.nombre}
                        idiomas={alumno.idiomas}
                        ciclos={alumno.ciclos}
                        curriculo={curriculoTexto}>
                    </Alumno>
        } else {
            const tieneCompetenciaActivado = alumno.competencias.some(competencia => competenciasActivadas.includes(competencia.id));
            const tieneCodigoActivado = alumno.ciclos.some(ciclo => codigosActivados.includes(ciclo.codFamilia));

            if (tieneCompetenciaActivado || tieneCodigoActivado) {
                return <Alumno 
                            key={alumno.id} 
                            nombre={alumno.nombre}
                            idiomas={alumno.idiomas}
                            ciclos={alumno.ciclos}
                            curriculo={curriculoTexto}>
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