const URL = 'https://api.thecatapi.com/v1/images/search'; // creamos una variable la cual almacene el link de nuestra api
const boton = document.getElementById("boton"); // boton para hacer que aparezcan gatitos
function getcat(){ //funcion para randomizar gatos
    fetch(URL) // nos devuelve una promesa
    .then(res => res.json()) //Convertir la respuesta a objetos de js
    .then(data => { //Usamos la informacion que nos proporciona la api ya convertida a objetos de js
        data[0].url //accedemos al elemento 0 de la api y podemos acceder a la url que nos permite obtener una imagen aleatoria de gatitos

        const imagen = document.querySelector('img'); //obtenemos la etiqueta img del DOM para poder modificarla
        imagen.src = data[0].url; //le damos la propiedad de url de gatos randoms a nuestra etiqueta img
    })
};
boton.addEventListener('click',getcat); // evento para llamar a los 