import { useEffect, useState } from "react";
import { getProyectos } from "../servicios/getProyectos";

const useProyectos = () => {

    const [proyectos, setProyectos] = useState([]);

    function obtenerProyectos() {

        getProyectos().then(valor => {
            setProyectos(valor);
        });
    }

    useEffect(obtenerProyectos, []);

    return proyectos;

}

export default useProyectos;