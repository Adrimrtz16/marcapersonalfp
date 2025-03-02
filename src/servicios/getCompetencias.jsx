export function getCompetencias() {
    return fetch(`http://marcapersonalfp.test/api/v1/competencias`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}