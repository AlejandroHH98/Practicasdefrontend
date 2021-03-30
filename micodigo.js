//Se crea otra función "hacer clic"
/*Aquí se explica que el elemento "p" que está en la posición 0
dentro del arreglo (primer elemento de texto) será ejecutada y manda a llamar
a la función "mostraralerta" */
function hacerclic(){ 
var lista=document.getElementById("principal").querySelectorAll("p");/* Por medio de getElementById se precisa
al identificador que queremos y con querySelectorAll el tipo de elemento que queremos aplicarle una función
en este caso al elemento "p"*/
lista[0].onclick=mostraralerta; //El elemento dentro del arreglo que se muestre es la posicion del elemento que mostrará la alerta
                                //En este caso es el elemento 0 es decir el primer "p"
}
function mostraralerta(){ //Se crea una función "mostraralerta"
alert('hizo clic'); //y esta mantiene la accion de alerta
                    //con el mensaje marcado
} 

window.onload=hacerclic; //Ejecuta la funcion "hacerclic" cuando el documento se hayan terminado
