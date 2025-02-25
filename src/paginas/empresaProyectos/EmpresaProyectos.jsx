import Empresa from "../empresa/Empresa";
import ListaFamiliasProfesionales from "../../componentes/listaFamiliasProfesionales/ListaFamiliasProfesionales";
import ListaProyectos from "../../componentes/listaProyectos/ListaProyectos";

const EmpresaProyectos = () => {

    return (
        <div>
            <Empresa></Empresa>
            <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
            <ListaProyectos></ListaProyectos>
        </div>
    )
}

export default EmpresaProyectos;