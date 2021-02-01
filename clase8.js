var Gilbert ={
    nombre: 'Gilbert',
    apellido:'Cachaya',
    edad : 26 
}

var David={
    nombre: 'David',
    apellido: 'enciso',
    edad: 25
}

function imprimirNombreMayus(persona) {
   // var nombre = persona.nombre
    var {nombre} = persona

    console.log(nombre.toUpperCase())
}
//Ejersicio
function imprimirNombreYEdad(persona){
    var {nombre} = persona
    var {apellido} = persona
    var {edad} = persona
    console.log(`hola, me llamo ${nombre} ${apellido} y tengo ${edad} años`)
}


imprimirNombreMayus(Gilbert)
imprimirNombreMayus(David)
imprimirNombreMayus({nombre: 'pepito'})
/* ejersicio */
imprimirNombreYEdad(Gilbert)
imprimirNombreYEdad(David)

function cumpleanos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
    /* persona.edad += 1 */
}