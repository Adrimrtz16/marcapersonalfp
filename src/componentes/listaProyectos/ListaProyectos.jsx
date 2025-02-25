import useProyectos from '../../hooks/useFamiliasProfesional';
import Proyecto from '../proyecto/Proyecto';
import '../listaFamiliasProfesionales/ListaFamiliasProfesionales.css';

const ListaProyectos = () => {

    const proyectos = useProyectos();

    function mostrarProyectos(proyecto) {
        
        return <Proyecto key={proyecto.id} nombre={proyecto.nombre}></Proyecto>

    }

    return (
        <>
            <div className='row'>
                {proyectos.map(mostrarProyectos)}
            </div>
        </>

    )
}

export default ListaProyectos;