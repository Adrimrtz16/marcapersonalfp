import { useEffect, useState } from "react";
import { getContadores } from "../servicios/getContadores";
// import { cargando } from "../assets/loader";

const useContador = () => {

    const [contador, setContador] = useState({
        numEmpresas : 0,
        numCentros : 0,
        numEstudiantes : 0
    });

    function obtenerContadores() {

        getContadores({tabla: 'empresas'}).then(valor => {
            setContador(contadores => {
                return {
                    ...contadores,
                    numEmpresas: valor.count
                }
            });
        });

        getContadores({tabla: 'proyectos'}).then(valor => {
            setContador(contadores => {
                return {
                    ...contadores,
                    numCentros: valor.count
                }
            });
        });

        getContadores({tabla: 'users'}).then(valor => {
            setContador(contadores => {
                return {
                    ...contadores,
                    numEstudiantes: valor.count
                }
            });
        });
    }

    useEffect(obtenerContadores, []);

    return contador;
}

export default useContador;