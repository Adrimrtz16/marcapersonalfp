import useProyectos from '../../hooks/useFamiliasProfesional';
import Proyecto from '../proyecto/Proyecto';
import '../listaFamiliasProfesionales/ListaFamiliasProfesionales.css';

const ListaProyectos = () => {

    const proyectos = useProyectos();
    console.log(proyectos);
    function mostrarProyectos(proyecto) {
        
        return <Proyecto 
            key={proyecto.id} 
            nombre={proyecto.nombre}
            tutor={proyecto.docente_id} 
            ciclos={proyecto.ciclos}
            participantes={proyecto.participantes}>
        </Proyecto>

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