import { useState } from 'react';
import useFamiliaProfesional from '../../hooks/useFamiliasProfesional';
import FamiliaProfesional from '../familiaProfesional/FamiliaProfesional';
import AjaxLoader from '../ajaxLoader/AjaxLoader';
import './ListaFamiliasProfesionales.css';

const ListaFamiliasProfesionales = ({ codigosActivados, setCodigosActivados, busqueda }) => {

    const {familiasProfesionales,buscando} = useFamiliaProfesional();

    function actualizarCodigosActivados(codigo) {
        setCodigosActivados([...codigosActivados, codigo]);
    };

    function eliminarCodigoActivado(codigo) {
        setCodigosActivados(codigosActivados.filter(codigoActivado => codigoActivado !== codigo));
    }

    function mostrarFamilias(familia) {
        
        return <FamiliaProfesional 
            key={familia.id} 
            familia={familia.nombre} 
            codigo={familia.codigo}
            actualizarCodigosActivados={actualizarCodigosActivados}
            eliminarCodigoActivado={eliminarCodigoActivado}>
        </FamiliaProfesional>

    }

    return (
        <>
            <div className="row gris-oscuro">
                <div className="col-md-12">
                    <h4 className="titulo-busqueda">Busqueda de {busqueda}</h4>
                </div>
            </div>
            <div className='row gris'>
                <div className="col-md-12">
                    <h5 className='titulo-busqueda'>Filtrar por familia profesional</h5>
                </div>
            </div>
            <div className='row'>
                <div className="col-md-12 blanco d-flex flex-wrap">
                    {buscando ? <AjaxLoader /> : familiasProfesionales.map(mostrarFamilias)}
                </div>
            </div>
        </>

    )
}

export default ListaFamiliasProfesionales;