let indexPreguntas = 0;
let puntaje = 0;


window.addEventListener('load', inicializar());

function inicializar(){
    cargarContador();
    cargarPregunta(indexPreguntas);

}

function cargarContador(){
    elementoContador = document.getElementById('contador');
    elementoContador.innerHTML= "tienes " + puntaje + " puntos"
}

function cargarPregunta(index) {
  let elementoPregunta = data[index];

  let posiblesRespuestas = [...elementoPregunta.incorrectas];
  posiblesRespuestas.push(elementoPregunta.respuesta);
  console.log(posiblesRespuestas)
  posiblesRespuestas =  posiblesRespuestas.sort((a, b) => 0.5 - Math.random());

  document.getElementById('pregunta').innerHTML = elementoPregunta.pregunta
  document.getElementById('respuesta1').innerHTML = posiblesRespuestas[0]
  document.getElementById('respuesta2').innerHTML = posiblesRespuestas[1]
  document.getElementById('respuesta3').innerHTML = posiblesRespuestas[2]
  document.getElementById('respuesta4').innerHTML = posiblesRespuestas[3]
  
}



let respuestaIngresada = document.getElementById("formulario");
respuestaIngresada.addEventListener("click", function(e){
        console.log(data[indexPreguntas].respuesta + e.target.innerHTML  )
        if(data[indexPreguntas].respuesta==e.target.innerHTML){
            mostrarTextoCorrecto();
            setTimeout(inicializar, 3000)
            indexPreguntas++
            puntaje++;
            
        }
        else {
        
            mostrarTextoIncorrecta()
            setTimeout(inicializar, 3000)
            // setTimeout(buscarPreguntas, 3000)
            indexPreguntas++
            
        }
        finalizarJuego()
})



function mostrarTextoIncorrecta(){    
   
    Swal.fire({
        title: 'Respuesta Incorrecta',
        text: 'Intentalo en otro momento',
        imageUrl: 'https://psfonttk.com/wp-content/uploads/2020/08/emoji-triste.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      
}

function mostrarTextoCorrecto(){
  
    Swal.fire({
        title: 'Respuesta correcta',
        text: '¡Excelente trabajo, Sumaste 1 punto!',
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/ec/13/a7/ec13a753972c254761be4d9d5666d341.jpg?noindex=1',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
}

  function finalizarJuego(){
    
 if(indexPreguntas === data.length) {
  
     Swal.fire({
      title: "Juego términado",
       text: `Tu puntaje fue de: ${puntaje}`,
       
    });
 
   }}


//    let dataJson = 'https://api.giphy.com/v1/gifs/search?api_key=INCoZbe9e6mXcXY4OkYBH4LYtXeBvl2S&q=pulpfiction&limit=5&offset=0&rating=g&lang=en'

//    fetch(dataJson)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
// let q = ''
// let malResultado = ""



// class API{
//     async getGifs (id){
//         let res = await fetch(malResultado)    }

// const obtenerData = async () => {

//     await fetch (malResultado)
//     .then((response) => {
//         return response.json ();
//     }).then ((giphy) => {
//         return giphy.data
//     })

//     for(let i = 0; giphy.data.length; i ++){

//         const gif = giphy.data.images[0].url
//         console.log(gif)
//     }

// }

// obtenerData(malResultado)

async function obtenerGif(q) {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=EcVA0raIF6sqQm2dSbIrqMNmGrnN8iQE&q=${q}&limit=1&offset=0&rating=g&lang=en`)
    const data = await res.json()
    return data
}

function renderizarGif (imagengif){
    images.setAttribute("src", imagengif.images.url)
}

async function init(){

    const initialGif = await obtenerGif(`pulpfiction`)
    console.log(initialGif)
}

// search.addEventListener("change", async () => {
//     const gifs = await obtenerGif(search.value)
//     renderizarGif(gifs)

    
// })

init()


//   document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
// let nombre = "delfina";
// let apellido = "levanti";


//CONSTANTE
const DNI = "41855280";

//OPERACIONES

//OPERACIONES CON NUMEROS 


let suma = 1+5;
let resta = 3-1;
let mult = 9*9;
let division = 10/5;
let resto = 20%3;


//OPERACIONES CON CADENA DE CARACTERES

// let nombreCompleto = nombre + "-" + apellido;


// let nombre = (prompt ("Ingrese su nombre"));
// let apellido = (prompt ("Ingrese su apellido"));


// let resultado = nombre + " " + apellido;
// console.log("Su nombre es " + resultado);

// let cantidadHijos = Number(prompt ("Ingrese cuantos hijos tiene"));
// let ingresosFamiliares = Number( prompt("Ingrese cuantos ingresos familiares tiene"));

// let familia = cantidadHijos + ingresosFamiliares;
// console.log(familia)

/*
let cantidadHijos = Number(prompt("Ingrese un numero"));
let cantidadPerros = Number(prompt("Ingrese la cantidad de perros"));

if (cantidadHijos + cantidadPerros >= 20){
    alert("estas hasta la pija");
}
else if(cantidadHijos + cantidadPerros >= 10){
    alert("fuma porro");
} else {
    alert("culo");
}
*/


// let nombreIngresado = prompt("Ingrese un numero")

// if ((nombreIngresado == "Delfi") || (nombreIngresado == "DELFI")){
//     alert("Tu nombre es Delfi")
// }else {
//     alert("tu nombre es ana")
// }

// let saldo = prompt("ingrese un numero")

// if(saldo > 1000){
//     alert("Compra exitosa")
// }else{
//     alert("Fondos insuficientes")
// }

// let edad = prompt ("Ingrese su edad")

// if ((edad >= 10) && (edad >= 50)){
//    alert("Entraste al casting")
// }


// let usuarioNombre = prompt("Ingresa tu nombre de usuario, sino tenes pone no");
// let edad = Number(prompt("Ingrese su edad"));


// if(usuarioNombref === "no"){
//         alert("Crear usuario luego")
// }else{
//     alert("Hola " + usuarioNombre)
// }

// let cantidadCopia = Number(prompt("Ingresa la cantidad de copias que deseas"))

// function maquinaImpresora (){
//     if(cantidadCopia = 1){
//         return document.write ("Imprimiste una copia")
    
//     }
// }

// let apuesta = Number(prompt("Coloca el monto de tu apuesta"))
// let metodoPago = prompt("Ingresa un metodo de pago")



// switch(metodoPago) {
//     case "efectivo":
//       console.log('Pagaste con' + metodoPago)  
//     case "debito":
//       console.log('Pagaste con' + metodoPago)
//     case "tranferencia":
//      console.log('Pagaste con' + metodoPago) 
     
     
// }



// const MEJOR_TIRADA = 40;
// const PEOR_TIRADA = 20;


// let fansStella = 100;
// let fansHeineken = 100;


// console.log(fansStella)
// console.log(fansHeineken)

// let ventaStella = Math.ceil(Math.random() * (MEJOR_TIRADA - PEOR_TIRADA) + PEOR_TIRADA)
// console.log("Ronda Stella " + ventaStella)
// let ventaHeineken =Math.ceil(Math.random() * (MEJOR_TIRADA - PEOR_TIRADA) + PEOR_TIRADA)
// console.log("Ronda Heineken " + ventaHeineken)

// // function competencia1(ventaStella, ventaHeineken){
//     while (fansHeineken > 0 && fansStella > 0 ){
//     if (ventaStella > ventaHeineken) {
//         fansHeineken -= ventaStella
        
//     }else{
//         fansStella -= ventaHeineken
        
//     }
//  }



// console.log("Fans Heineken " + fansHeineken)
// console.log("Fans Stella " + fansStella)
// // console.log("Fans Stella " + fansStella)
// // console.log("Fans Heineken " + fansHeineken)

// // competencia1 (ventaStella, ventaHeineken)

// if(fansHeineken > 0){
//        console.log("Victoria Heineken")
//       }else{
//        console.log("Victoria Stella")
//      }



// function Destinos(destino, cantidad){
//     if (destino ==="alaska"){
//         return suma(100, cantidad)
//     } else if( destino ==="ushuaia"){
//         return suma(50, cantidad)
                
//     }
   

// function atacar(tipoAtaque, vidaContrincante){
//     switch (tipoAtaque){
//         case "patita furiosa":
//             return vidaContrincante - 20;
//             break;
//         case "mordida sarnosa":
            
//             return vidaContrincante - 25;
//             break;
//         default:
//             alert("Ataque invalido, pierde su turno");
//             return vidaContrincante;
//     }
// }

// function ataqueRomero (vidaContrincante){
//     let tipoAtaque = prompt("Ingresar ataque de Romero")
//     let vidaRestante = vidaContrincante;
//         switch (tipoAtaque){
//             case "patita furiosa":
//                 vidaRestante = vidaContrincante - 20;
//                 alert("Romero ataca a Waldo usando " + tipoAtaque + " y lo deja en " + vidaRestante); 
//                 break;
            
//             case "mordida sarnosa":
//                 vidaRestante = vidaContrincante - 25;
//                 alert("Romero ataca a Waldo usando " + tipoAtaque + " y lo deja en " + vidaRestante); 
//                 break;
//             default:
//                 alert("Ataque invalido, pierde su turno");
//     }
//     return vidaRestante;
// }

// function ataqueWaldo (vidaContrincante){
//     let tipoAtaque = prompt("Ingresar ataque de Waldo");
//     let vidaRestante = vidaContrincante;
//         switch (tipoAtaque){
//             case "robo de comida":
//                 vidaRestante = vidaContrincante - 25;
//                 alert("Waldo ataca a Romero usando " + tipoAtaque + " y lo deja en " + vidaRestante);
//                 break;
//             case "colazo":
//                 vidaRestante = vidaContrincante - 15;
//                 alert("Waldo ataca a Romero usando " + tipoAtaque + " y lo deja en " + vidaRestante);
//                 break;
//             default:
//                 alert("Ataque invalido, pierde su turno");
            
//         }
//     return vidaRestante;
        
    
// }
 

// let vidaWaldo = 90;
// let vidaRomero = 150;

// let round = 1;


// while (vidaWaldo > 0 && vidaRomero > 0){

//     console.log("ROUND "+round);

//     console.log("Vida inicial Waldo " + vidaWaldo);
//     console.log("Vida inicial Romero " + vidaRomero);

//     vidaWaldo = ataqueRomero(vidaWaldo);
//      document.write('<div class="card"><img src"')
//     if(vidaWaldo > 0){
//      vidaRomero = ataqueWaldo (vidaRomero)   
//     }
    
//     round += 1;
// }

// if(vidaRomero <= 0 ){
//     alert("Ganador Waldo");

// }else{
//     alert("Ganador Romero")
// }

// let nombreInvitado = document.getElementById('input1')
// nombreInvitado.addEventListener("click", registrar)

// let edadInvitado = document.getElementById('input2')
// edadInvitado.addEventListener("click", registrar)

// function registrar() {
//     let inputText = document.getElementById('input1')
//     inputText.innerText = input.value
// }