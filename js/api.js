let malResultado = "https://api.giphy.com/v1/gifs/6uGhT1O4sxpi8?api_key=EcVA0raIF6sqQm2dSbIrqMNmGrnN8iQE"

// class API{
//     async getGifs (id){
//         let res = await fetch(malResultado)    }

const obtenerData = async () => {

    await fetch (malResultado)
    .then((response) => {
        return response.json ();
    }).then ((giphy) => {
        console.log(giphy);
    })
}

obtenerData()