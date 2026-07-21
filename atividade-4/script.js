function mostrarAnimal(value)
{
    const animal = document.getElementById("animal");
    
    if (value == "gato") {
        animal.src='gato.jpg'
    }

    else if (value == "cachorro") {
        animal.src='cachorro.jpg'
    }

    else if (value == "leao") {
        animal.src='leao.jpg'
    }

    else if (value == "elefante") {
        animal.src='elefante.jpg'
    }


}

