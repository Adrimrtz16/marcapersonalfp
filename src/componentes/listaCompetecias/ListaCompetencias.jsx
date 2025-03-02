import { useState } from 'react';
import useCompetencias from '../../hooks/useCompetencias';
import Competencia from '../competencia/Competencia';
import AjaxLoader from '../ajaxLoader/AjaxLoader';

const ListaCompetencias = ({ competenciasActivadas, setCompetenciasActivadas }) => {

    const {competencias , buscando} = useCompetencias();

    function actualizarCompetenciasActivadas(competencia) {
        setCompetenciasActivadas([...competenciasActivadas, competencia]);
    };

    function eliminarCompetenciasActivadas(competencia) {
        setCompetenciasActivadas(competenciasActivadas.filter(competenciaActivada => competenciaActivada !== competencia));
    }

    function mostrarCompetencias(competencia) {
        
        return <Competencia 
            key={competencia.id} 
            familia={competencia.nombre} 
            codigo={competencia.id}
            actualizarCompetenciasActivadas={actualizarCompetenciasActivadas}
            eliminarCompetenciasActivadas={eliminarCompetenciasActivadas}>
        </Competencia>

    }

    return (
        <>
            <div className='row gris'>
                <div className="col-md-12">
                    <h5 className='titulo-busqueda'>Filtrar por perfil competencial</h5>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12 blanco d-flex flex-wrap">
                    {buscando ? <AjaxLoader /> : competencias.map(mostrarCompetencias)}
                </div>
            </div>
        </>

    )
}

export default ListaCompetencias;