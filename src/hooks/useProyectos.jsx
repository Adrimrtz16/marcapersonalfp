import { useEffect, useState } from "react";
import { getProyectos } from "../servicios/getProyectos";

const useProyectos = () => {

    const [proyectos, setProyectos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerProyectos() {

        setBuscando(true);

        getProyectos().then(valor => {
            setProyectos(valor);
            setBuscando(false);
        });
    }

    useEffect(obtenerProyectos, []);

    return { proyectos, buscando };

}

export default useProyectos;