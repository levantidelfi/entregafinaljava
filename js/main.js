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
            indexPreguntas++
            
        }
        finalizarJuego()
})



function mostrarTextoIncorrecta(){    
   
    Swal.fire({
        title: 'Respuesta Incorrecta',
        text: 'Intentalo en otro momento',
        imageUrl: "https://emojis.wiki/emoji-pics/apple/pensive-face-apple.png",
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
    setTimeout(renderizarGif,2000)
   }}




async function obtenerGif(q) {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=EcVA0raIF6sqQm2dSbIrqMNmGrnN8iQE&q=${q}&limit=1&offset=0&rating=g&lang=en`)
    const data = await res.json()
    return data
}

function renderizarGif (){

    window.location.href = "pages/gameover.html"
 

    
}






    
