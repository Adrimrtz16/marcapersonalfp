export function getFamiliasProfesionales() {
    return fetch(`http://marcapersonalfp.test/api/v1/familias_profesionales`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}