var edad = 26

/* edad = edad + 1 */
edad += 1

var peso = 100

/* peso = peso - 2 */
peso -= 2 

var sandwich = 1

peso += sandwich

var JugarFut = 3

peso -= JugarFut


/* operciones con numeros decimales */
var precioVino = 200.3

/* var total = precioVino * 100 * 3 / 100 */
var total = Math.round( precioVino * 100 * 3 )/ 100
/* cantidad de decimales que se muestran  */
var totalstr = total.toFixed(2)
var total2 = parseFloat(totalstr)

var pizza = 8 
var personas = 2
var cantidadPorcionesPorPersona = pizza/personas