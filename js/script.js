function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=" + service;
}

function createRowDisaster(dato1, dato2, dato3, dato4, dato5) {
    return '<tr><td>' + dato1 + '</td><td>' + dato2 + '</td><td>' + dato3 + '</td><td>' + dato4 + '</td><td>' + dato5 + '</td></tr>';
}

function createRowDisasterUrl(dato1, dato2, dato3, dato4, dato5) {
    return '<tr><td>' + dato1 + '</td><td>' + dato2 + '</td><td>' + dato3 + '</td><td>' + dato4 + '</td><td><a href=' + dato5 + '>Mas Info</a></td></tr>';
}