import { useEffect, useState } from "react";
import { getFamiliasProfesionales } from "../servicios/getFamiliasProfesionales";

const useFamiliaProfesional = () => {

    const [familiaProfesional, setFamiliaProfesional] = useState([]);

    function obtenerFamilias() {

        getFamiliasProfesionales().then(valor => {
            setFamiliaProfesional(valor);
        });
    }

    useEffect(obtenerFamilias, []);

    return familiaProfesional;

}

export default useFamiliaProfesional;