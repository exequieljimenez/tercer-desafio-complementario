let tituloPagina = document.getElementById("tituloPagina")

// la función menuInicial() recibe un valor introducido por el usuario que pasa como parámetro a un switch, con distintas funciones de acuerdo a la opción
function menuInicial() {
    let opcionInicial = prompt(`Seleccione una opción:
                            1 - Ver lista completa de películas
                            2 - Buscar por título, director o año
                            Escriba cualquier otra cosa para salir`)
    switch (opcionInicial) {
        case "1":
            mostrarListaCompleta()
            break
        case "2":
            buscarPelicula()
            break
        default:
            tituloPagina.innerText = "¡Hasta la próxima!"
            alert("¡Hasta luego!")

    }
}

// esta función utiliza un forEach() que muestra en el browser la lista completa de película
function mostrarListaCompleta() {
    tituloPagina.innerText = "Lista completa de películas"
    filmoteca.forEach((pelicula) => {
        let nuevaPelicula = document.createElement("div")
        nuevaPelicula.innerHTML = `<article class="card">
                                        <h2>${pelicula.titulo}</h2>
                                        <p>estrenada en ${pelicula.anio}</p>
                                        <p>dirigida por ${pelicula.director}</p>
                                        <img src="${pelicula.afiche}">
                                    </article>`
        divPeliculas.appendChild(nuevaPelicula)
    })
}

// la función menuBusqueda() incluye un prompt para que el usuario ingrese un valor y un switch que pide al usuario que ingrese un criterio de búsqueda y luego la palabra o número que quiere buscar
function buscarPelicula() {
    let opcionBusqueda = parseInt(prompt(`Indique según qué criterio quiere buscar:
        1 - Por título
        2 - Por director/a
        3 - Por año
        0 - Volver al menú inicial`))
    let datoPeli
    switch (opcionBusqueda) {
        case 0:
            menuInicial()
            break
        case 1:
            datoPeli = "titulo"
            tituloIngresado = prompt("Ingrese el título de la película que quiere buscar")
            busqueda(tituloIngresado, datoPeli)
            break
        case 2:
            datoPeli = "director"
            directorIngresado = prompt("Ingrese el apellido del director o directora que quiere buscar")
            busqueda(directorIngresado, datoPeli)
            break
        case 3:
            datoPeli = "anio"
            anioIngresado = parseInt(prompt("Ingrese el año de estreno de la película que quiere buscar"))
            busqueda(anioIngresado, datoPeli)
            break
        default:
            alert("Por favor ingrese una opción válida")
            buscarPelicula()
    }
}

// la funcion busqueda() recibe dos parámetros, uno indicando el tipo de atributo que buscará entre los objetos del array y el valor en cuestión
function busqueda(termino, datoPeli) {
    if (datoPeli == "titulo") {
        const resultado = filmoteca.filter((el) => el.titulo.toUpperCase() == termino.toUpperCase())
        resultadoONo(resultado)
    }
    else if (datoPeli == "director") {
        const resultado = filmoteca.filter((el)=> el.director.toUpperCase() == termino.toUpperCase())
        resultadoONo(resultado)
    }
    else {
        const resultado = filmoteca.filter((el)=> el.anio == termino)
        resultadoONo(resultado)
    }
}

// la función resultadoONo() chequea si el array tiene length 0 o no. En caso positivo avisa que no hubo resultados, si no llama a la función mostrarResultados()
function resultadoONo(resultado) {
    if (resultado.length == 0) {
        tituloPagina.innerText = "Su búsqueda no arrojó resultados"
        console.log(tituloPagina.innerText)
    }
    else {
        mostrarResultados(resultado)
    }
}

// la función mostrarResultados() muestra el array con los resultados utilizando un forEach
function mostrarResultados(resultadoBusqueda) {
    tituloPagina.innerText = "Su búsqueda arrojó los siguientes resultados:"
    resultadoBusqueda.forEach((pelicula) => {
        let nuevaPelicula = document.createElement("div")
        nuevaPelicula.innerHTML = `<article class="card">
                                        <h2>${pelicula.titulo}</h2>
                                        <p>estrenada en ${pelicula.anio}</p>
                                        <p>dirigida por ${pelicula.director}</p>
                                        <img src="${pelicula.afiche}">
                                    </article>`
        divPeliculas.appendChild(nuevaPelicula)
    })
}

// clase Peliculas, a partir de la cual armar los objetos
class Peliculas {
    constructor(titulo, anio, director, afiche) {
        this.titulo = titulo,
        this.anio = anio,
        this.director = director
        this.afiche = afiche
    }
}

// lista de objetos, instancias de la clase Peliculas
let pelicula01 = new Peliculas("La morada del diablo", 1896, "Melies", "./media/manoir-melies-1896.jpg")
let pelicula02 = new Peliculas("Las cuatrocientas farsas del diablo", 1906, "Melies", "./media/farces-diable-melies-1906.jpg")
let pelicula03 = new Peliculas("El estudiante de Praga", 1913, "Rye", "./media/rye-prag-1913.jpg")
let pelicula04 = new Peliculas("El Golem", 1914, "Wegener", "./media/der-golem-1914.jpg")
let pelicula05 = new Peliculas("Los vampiros", 1915, "Feuillade", "./media/les-vampires-1915.jpg")
let pelicula06 = new Peliculas("El gabinete del Dr. Caligari", 1920, "Wiene", "./media/cabinet-caligari-1920.jpg")
let pelicula07 = new Peliculas("La carreta fantasma", 1921, "Sjostrom", "./media/korkarlen-1921.jpg")
let pelicula08 = new Peliculas("Páginas del diario de Satán", 1921, "Dreyer", "./media/satans-dreyer-1921.jpg")
let pelicula09 = new Peliculas("Haxan", 1921, "Christensen", "./media/haxan-1921.jpg")
let pelicula10 = new Peliculas("Doctor Mabuse", 1922, "Lang", "./media/dr-mabuse-1922.jpg")

// array de objetos con el nombre filmoteca
const filmoteca = [pelicula01, pelicula02, pelicula03, pelicula04, pelicula05, pelicula06, pelicula07, pelicula08, pelicula09, pelicula10]

// este getElementById accede al elemento div con el id peliculas en el HTML
let divPeliculas = document.getElementById("peliculas")

// este setAttribute() llama a la clase .estiloPeliculas en el css
divPeliculas.setAttribute("class", "estiloPeliculas")

menuInicial()


