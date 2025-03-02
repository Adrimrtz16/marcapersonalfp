import { useEffect, useState } from "react";
import { getAlumnos } from "../servicios/getAlumnos";

const useAlumnos = () => {

    const [alumnos, setAlumnos] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerAlumnos() {

        setBuscando(true);

        getAlumnos().then(valor => {
            setAlumnos(valor);
            setBuscando(false);
        });
    }

    useEffect(obtenerAlumnos, []);

    return { alumnos, buscando };

}

export default useAlumnos;