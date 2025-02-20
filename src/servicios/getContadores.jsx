export function getContadores({tabla}) {
    return fetch(`http://marcapersonalfp.test/api/v1/${tabla}/count`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}