import { useEffect, useState } from "react";
import { getCompetencias } from "../servicios/getCompetencias";

const useCompetencias = () => {

    const [competencias, setCompetencias] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerCompetencias() {

        setBuscando(true);

        getCompetencias().then(valor => {
            setCompetencias(valor);
            setBuscando(false);
        });
    }

    useEffect(obtenerCompetencias, []);

    return { competencias, buscando };

}

export default useCompetencias;