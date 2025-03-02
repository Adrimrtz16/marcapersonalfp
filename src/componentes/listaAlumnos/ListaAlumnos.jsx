import useAlumnos from '../../hooks/useAlumnos';
import Alumno from '../alumno/alumno';
import AjaxLoader from '../ajaxLoader/AjaxLoader';
import '../listaFamiliasProfesionales/ListaFamiliasProfesionales.css';

const ListaAlumnos = ({ competenciasActivadas }) => {

    const { alumnos, buscando } = useAlumnos();

    function mostrarAlumnos(alumno) {
        
        if (competenciasActivadas.length === 0) {
            return <Proyecto 
                        key={proyecto.id} 
                        nombre={proyecto.nombre}
                        tutor={proyecto.docente_id} 
                        ciclos={proyecto.ciclos}
                        participantes={proyecto.participantes}>
                    </Proyecto>
        } else {
            const tieneCicloActivado = alumno.ciclos.some(ciclo => competenciasActivadas.includes(ciclo.codFamilia));

            if (tieneCicloActivado) {
                return <Proyecto 
                            key={proyecto.id} 
                            nombre={proyecto.nombre}
                            tutor={proyecto.docente_id} 
                            ciclos={proyecto.ciclos}
                            participantes={proyecto.participantes}>
                        </Proyecto>
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
                {buscando ? <AjaxLoader /> : proyectos.map(mostrarProyectos)}
            </div>
        </>

    )
}

export default ListaProyectos;