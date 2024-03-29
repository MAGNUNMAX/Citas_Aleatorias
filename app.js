//tener referencia del boton

let botonElem = document.getElementById('boton-cambiar-cita');

//tener referencia del elemento que va a remplazar donde debe aparecer la cita

let citaElem = document.getElementById('cita');

//obtener elemento donde debe aparecer el autor

let autorElem = document.getElementById('autor');


//Logica del programa para generar citas aleatorias,
// generando un numero desde un min hata un max ,
//el maximo no se va a inclurir
//vamos a asumir que los numeros son enteros

function generarEnterosAleatorios(min, max){
  return Math.floor(Math.random() * (max-min) +min);
}

/*funcion cambiar citas */
function cambiaCita(){

  /*Indice aleatorio */
  let indiceAleatorio = generarEnterosAleatorios(0,citas.length);
  /*actualizar la cita en el DOM*/
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  /*actualizamos el autor en el DOM */
  autorElem.innerText = citas[indiceAleatorio].autor;
  
}
 
cambiaCita()

/*Actualizar boton  */

botonElem.addEventListener('click',cambiaCita);

