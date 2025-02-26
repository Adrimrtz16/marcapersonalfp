import Empresa from "../empresa/Empresa";
import ListaFamiliasProfesionales from "../../componentes/listaFamiliasProfesionales/ListaFamiliasProfesionales";
import ListaProyectos from "../../componentes/listaProyectos/ListaProyectos";
import { useState } from "react";

const EmpresaProyectos = () => {

    const [codigosActivados, setCodigosActivados] = useState([]);

    return (
        <div>
            <Empresa></Empresa>
            <ListaFamiliasProfesionales
                codigosActivados={codigosActivados} 
                setCodigosActivados={setCodigosActivados}>
            </ListaFamiliasProfesionales>
            <ListaProyectos
                codigosActivados={codigosActivados}>
            </ListaProyectos>
        </div>
    )
}

export default EmpresaProyectos;