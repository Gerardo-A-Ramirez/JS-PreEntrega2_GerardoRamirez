//Tipos de animales

class Animal {
    constructor(nombre, tipo, cantidad) {
        this.nombre = nombre
        this.tipo = tipo
        this.cantidad = cantidad
    }
}

//Lista de animales
class ListaAnimales {
    constructor() {
        this.lista = []
    }

    agregarAnimal(animal) {
        this.lista.push(animal)
    }

    mostrarLista() {

        let grupos = {}

        this.lista.forEach((animal) => {

            let tipo = animal.tipo

            if (!grupos[tipo]) {
                grupos[tipo] = []
            }

            grupos[tipo].push(animal)
        });

        let total = 0
        let mensajeTipoAnimal = ""
        let mensajeNombreCantidad = ""

        for (let tipo in grupos) {

            // mensajeTipoAnimal = `Tipo de animal: ${tipo}`

            grupos[tipo].forEach((animal) => {

                mensajeNombreCantidad = mensajeNombreCantidad + "\n" + `Tipo de animal: ${tipo}` + "\n"+ `Nombre: ${animal.nombre}, Cantidad: ${animal.cantidad}` + "\n"

                total += animal.cantidad
            });

            // alert("")
        }

        // console.log(`Total de animales: ${total}`)
         alert(mensajeNombreCantidad + "\n\n" + "Total: " +total)  //acomodar esto para que tenga sentido
    }

}

alert("ZOOLÓGICO VIRTUAL")

alert("Recuerde que se debe respetar el tipo de animal (Mamífero, ave, reptil, etc.)")

let listaAnimales = new ListaAnimales()
let continuar = true;

// Crear un bucle while para pedir datos al usuario
while (continuar) {
    let nombre = prompt("Ingrese el nombre del animal")
    let tipo = prompt("Ingrese el tipo del animal")
    let cantidad = Number(prompt("Ingrese la cantidad del animal"))

    let animal = new Animal(nombre, tipo, cantidad)

    listaAnimales.agregarAnimal(animal)

    continuar = confirm("Quiere agregar otro animal la lista?")

}

listaAnimales.mostrarLista()