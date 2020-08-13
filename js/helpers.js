let getRandomNumber = size => {
    return Math.floor(Math.random() * size) // transforma un numero decimal a un entero 
}

// funcion donde obtiene la distancia entre dos puntos

let getDistance = (e, target) => {
    let diffx = e.offsetX - target.x; //obtengo la distancia con el evento cuando el usuario hace click menos el target donde se encuentra el tesoro en el eje x
    let diffy = e.offsetY - target.y; //obtengo la distancia con el evento cuando el usuario hace click menos el target donde se encuentra el tesoro en el eje x
    return Math.sqrt((diffx * diffx) + (diffy + diffy)) // calculo la distancia entre dos puntos con el teorema de pitagoras
}

let getDistanceMint = distance => {
    if (distance < 30) {
        return "Boiling Hot!"
    } else if (distance < 40) {
        return "Really hot";
    } else if (distance < 60) {
        return "Hot";
    } else if (distance < 100) {
        return "warn";
    } else if (distance < 180) {
        return "Cold";
    } else if (distance < 360) {
        return "Really Cold";
    } else {
        return "Freezing!";
    }

}