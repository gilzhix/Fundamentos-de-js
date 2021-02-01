var Gilbert = {
    nombre: 'Gilbert', apellido: 'Cachaya', edad: 26, ingeniero: true, 
    cocinero: false, cantante: false, dj: false,guitarrista: false, drone: true
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


imprimirProfesiones(Gilbert)