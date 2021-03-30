//Se crea otra función "hacer clic"
/*Aquí se explica que el elemento "p" que está en la posición 0
dentro del arreglo (primer elemento de texto) será ejecutada y manda a llamar
a la función "mostraralerta" */
function hacerclic(){ 
var lista=document.getElementById("principal").querySelectorAll("p");/* Por medio de getElementById se precisa
al identificador que queremos y con queryselector el tipo de elemnto que queremos aplicarle una función
en este caso al elemento "p"*/
lista[0].onclick=mostraralerta; //Todos los elementos p dentro del identificador mostrarán un mensaje de alerta
}
function mostraralerta(){ //Se crea una función "mostraralerta"
alert('hizo clic'); //y esta mantiene la accion de alerta
                    //con el mensaje marcado
} 

window.onload=hacerclic; //Ejecuta la funcion "hacerclic" cuando el documento se hayan terminado
