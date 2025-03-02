import { useState } from "react";
import Empresa from "../empresa/Empresa";
import ListaFamiliasProfesionales from "../../componentes/listaFamiliasProfesionales/ListaFamiliasProfesionales";
import ListaCompetencias from "../../componentes/listaCompetecias/ListaCompetencias";
import ListaAlumnos from "../../componentes/listaAlumnos/ListaAlumnos";

const EmpresaAlumnos = () => {

    const [codigosActivados, setCodigosActivados] = useState([]);
    const [competenciasActivadas, setCompetenciasActivadas] = useState([]);
    
    return (
        <div>
            <Empresa></Empresa>
            <ListaFamiliasProfesionales
                busqueda='alumnos'
                codigosActivados={codigosActivados} 
                setCodigosActivados={setCodigosActivados}>
            </ListaFamiliasProfesionales>
            <ListaCompetencias
                competenciasActivadas={competenciasActivadas}
                setCompetenciasActivadas={setCompetenciasActivadas}>
            </ListaCompetencias>
            <ListaAlumnos
                competenciasActivadas={competenciasActivadas}
                codigosActivados={codigosActivados}>
            </ListaAlumnos>
        </div>
    )
}

export default EmpresaAlumnos;