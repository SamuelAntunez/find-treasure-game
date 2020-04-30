const width = 400;
const height = 400;

let target = {
    x: getRandomNumber(width), 
    y: getRandomNumber(height),
}

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;

$map.addEventListener("click", function(e){
    console.log
    clicks++;
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance); 
    $distance.innerHTML = `<h1>${distanceHint}</h1>`;
    if (distance < 10) {
        alert (`Found the Treasure in ${clicks} clicks`);
        location.reload();
    }
})