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

function imprimirNombreMayus({nombre}){
   
    console.log(nombre.toUpperCase())
}

imprimirNombreMayus(Gilbert)
imprimirNombreMayus(David)
imprimirNombreMayus({nombre: 'pepito'})
/* imprimirNombreMayus() */