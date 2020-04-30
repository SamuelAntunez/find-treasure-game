let getRandomNumber = size => {
    return Math.floor(Math.random() * size)
};

let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x;
    let diffy = e.offsetY - target.y;
    return Math.sqrt((diffx * diffx) + (diffy * diffy));
};

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Muy Caliente";
    } else if (distance < 40) {
        return "Un poco mas caliente";
    } else if (distance < 60) {
        return "Caliente";
    } else if (distance < 100) {
        return "Tibio";
    } else if (distance < 180) {
        return "Frio";
    } else if (distance < 250) {
        return "Muy Frio"
    } else if (distance < 300 < 400) {
        return "Super Frio"
    }
};