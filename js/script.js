function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=" + service;
}

function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=onemi=" + service;
}

function getBasePath(service) {
    return "https://chilealerta.com/api/query/?user=demo&select=ultimos_sismos=" + service;
}

function createRowDisaster(reference, magnitude, latitude, longitude, local_time) {
    return '<tr><td>' + reference + '</td><td>' + magnitude + '</td><td>' + latitude + '</td><td>' + longitude + '</td><td>' + local_time + '</td></tr>';
}


