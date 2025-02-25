export function getProyectos() {
    return fetch(`http://marcapersonalfp.test/api/v1/proyectos`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}