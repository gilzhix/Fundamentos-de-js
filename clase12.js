var Gilbert = {
    nombre: 'Gilbert', apellido: 'Cachaya', edad: 26, ingeniero: true, 
    cocinero: false, cantante: false, dj: false,guitarrista: false, drone: true
}
const MAYORIA_DE_EDAD =18 
var juan= {
    nombre: 'juan', apellido: 'Gomez', edad: 13 
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero){
        console.log('ingeniero')
    }
    if (persona.cocinero){
        console.log('cocinero')
    }
    if (persona.cantante){
        console.log('cantante')
    }
    
    if (persona.dj){
        console.log('dj')
    }
    if (persona.Guitarrista){
        console.log('guitarrista')

    }
    if (persona.drone){
        console.log('piloto de drone')
    }
}
// arrow function 
const  esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD


function imprirMayorEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

/* function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log("ACCESO DENEGADO")
    }
} */

const permitirAcceso = ({edad}) => !esMayorDeEdad({edad}) ?
console.log("ACCESO DENEGADO") : console.log("ACCESO PERMITIDO");
