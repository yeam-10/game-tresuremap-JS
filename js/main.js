const WIDTH = 400;
const HEIGH = 400;


//Funcion del mapa del tesoro genera un numero aleatorio
let MapTarget = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function(e) {
    clicks++;
    let distance = getDistance(e, MapTarget);

    let distanceMint = getDistanceMint(distance)
    $distance.innerHTML = `<h1>${distanceMint}</h1>`

    if (distance < 20) {
        alert(`Found the trasure in ${clicks} clicks`);
        location.reload();

    }

})