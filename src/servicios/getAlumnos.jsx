export function getAlumnos() {
    return fetch(`http://marcapersonalfp.test/api/v1/users`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}