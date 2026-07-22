function mostrarAnimal(value)
{
    const animal = document.getElementById("animal");
    
    if (value == "gato") {
        animal.src='assets/gato.jpg'
    }

    else if (value == "cachorro") {
        animal.src='assets/cachorro.jpg'
    }

    else if (value == "leao") {
        animal.src='assets/leao.jpg'
    }

    else if (value == "elefante") {
        animal.src='assets/elefante.jpg'
    }


}

