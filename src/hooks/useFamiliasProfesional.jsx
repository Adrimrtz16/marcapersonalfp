import { useEffect, useState } from "react";
import { getFamiliasProfesionales } from "../servicios/getFamiliasProfesionales";

const useFamiliaProfesional = () => {

    const [familiasProfesionales, setFamiliaProfesional] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerFamilias() {

        setBuscando(true);

        getFamiliasProfesionales().then(valor => {
            setFamiliaProfesional(valor);
            setBuscando(false);
        });
    }

    useEffect(obtenerFamilias, []);

    return { familiasProfesionales, buscando };

}

export default useFamiliaProfesional;