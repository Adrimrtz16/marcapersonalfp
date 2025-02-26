import useProyectos from '../../hooks/useProyectos';
import Proyecto from '../proyecto/Proyecto';
import '../listaFamiliasProfesionales/ListaFamiliasProfesionales.css';

const ListaProyectos = ({ codigosActivados }) => {

    const proyectos = useProyectos();

    function mostrarProyectos(proyecto) {
        
        if (codigosActivados.length === 0) {
            return <Proyecto 
                        key={proyecto.id} 
                        nombre={proyecto.nombre}
                        tutor={proyecto.docente_id} 
                        ciclos={proyecto.ciclos}
                        participantes={proyecto.participantes}>
                    </Proyecto>
        } else {
            const tieneCicloActivado = proyecto.ciclos.some(ciclo => codigosActivados.includes(ciclo.codFamilia));

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
                {proyectos.map(mostrarProyectos)}
            </div>
        </>

    )
}

export default ListaProyectos;