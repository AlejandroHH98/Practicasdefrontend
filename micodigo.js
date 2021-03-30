function mostraralerta(){ //Se crea una función "mostraralerta"
alert('hizo clic'); //y esta mantiene la accion de aletra
                    //con el mensaje marcado
}
function hacerclic(){ //Se crea otra función "hacer clic"
/*Aquí se explica que el elemento "p" que está en la posición 0
dentro del arreglo (primer elemento de texto) será ejecutada y manda a llamar
a la función "mostraralerta" */
document.getElementsByTagName('p')[0].onclick=mostraralerta;

}
window.onload=hacerclic; //Ejecuta la funcion "hacerclic" cuando el documento se hayan terminado