function mostrarAnimal(value)
{
    const animal = document.getElementById("animal");
    
    if (value == "gato") {
        animal.src='gato.jpg'
    }

    else if (value == "cachorro") {
        animal.src='cachorro.jpg'
    }

}