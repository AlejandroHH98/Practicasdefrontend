//Se crea otra función "hacer clic"
/*Aquí se explica que el elemento "p" que está en la posición 0
dentro del arreglo (primer elemento de texto) será ejecutada y manda a llamar
a la función "mostraralerta" */
function hacerclic(){ 
var lista=document.querySelectorAll("#principal p");/*querySelectorAll retorna todos los elementos que concuerdan con el grupo de selectores
declarados en parentesis*/
lista[0].onclick=mostraralerta; //El arreglo lista muestra el primer elemento "p"
}
function mostraralerta(){ //Se crea una función "mostraralerta"
alert('hizo clic'); //y esta mantiene la accion de alerta
                    //con el mensaje marcado
}

window.onload=hacerclic; //Ejecuta la funcion "hacerclic" cuando el documento se hayan terminado
