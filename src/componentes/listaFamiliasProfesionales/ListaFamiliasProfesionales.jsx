import useFamiliaProfesional from '../../hooks/useFamiliasProfesional';
import FamiliaProfesional from '../familiaProfesional/FamiliaProfesional';
import './ListaFamiliasProfesionales.css';

const ListaFamiliasProfesionales = () => {

    const FamiliasProfesionales = useFamiliaProfesional();

    function mostrarFamilias(familia) {
        
        return <FamiliaProfesional key={familia.id} familia={familia.nombre}></FamiliaProfesional>

    }

    return (
        <>
            <div className="row gris-oscuro">
                <div className="col-md-12">
                    <h4 className="titulo-busqueda">Busqueda de proyecto</h4>
                </div>
            </div>
            <div className='row gris'>
                <div className="col-md-12">
                    <h5 className='titulo-busqueda'>Filtrar por familia profesional</h5>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12 blanco d-flex flex-wrap">
                    {FamiliasProfesionales.map(mostrarFamilias)}
                </div>
            </div>
        </>

    )
}

export default ListaFamiliasProfesionales;