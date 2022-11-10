let indexPreguntas = 0;
let puntaje = 0;


window.addEventListener('load', renderizarGif());



async function obtenerGif(q) {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=EcVA0raIF6sqQm2dSbIrqMNmGrnN8iQE&q=${q}&limit=1&offset=0&rating=g&lang=en`)
    const data = await res.json()
    return data
}

function renderizarGif (){

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=EcVA0raIF6sqQm2dSbIrqMNmGrnN8iQE&q=$gameover&limit=25&offset=0&rating=g&lang=en`)
                .then(function(result) {
                    
                    jso = result.json()
                    
                    return jso;
                })
                .then(function(json){
                    
                    
                  
                    return json.data[1].images.original.url;
                }).then(function(url) {
                    document.querySelector('.gif-renderizar').setAttribute("src", url)
                } )
  

}
