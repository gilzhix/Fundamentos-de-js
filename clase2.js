var nombre =  'Gilbert' , apellido = 'Cachaya'
var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetrDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

/* var nombreCompleto = nombre + ' ' + apellido */
var nombreCompleto = `${nombre} ${apellido.toLocaleUpperCase()}`  

/* var str = nombre.charAt(1) + nombre.charAt(2) */
var str = nombre.substr(1, 2)