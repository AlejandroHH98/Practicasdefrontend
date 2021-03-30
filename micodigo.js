//Se crea otra función "hacer clic"
/*Aquí se explica que el elemento "p" que está en la posición 0
dentro del arreglo (primer elemento de texto) será ejecutada y manda a llamar
a la función "mostraralerta" */
function hacerclic(){ 
var lista=document.querySelectorAll("#principal p");/*querySelectorAll retorna todos los elementos que concuerdan con el grupo de selectores
declarados en parentesis*/

for(var f=0; f<lista.length; f++){ //Bucle for para crear un arreglo de los elementos p
lista[f].onclick=mostraralerta; //Todos los elementos p dentro del identificador mostrarán un mensaje de alerta

    }
}
function mostraralerta(){ //Se crea una función "mostraralerta"
alert('hizo clic'); //y esta mantiene la accion de alerta
                    //con el mensaje marcado
} 

window.onload=hacerclic; //Ejecuta la funcion "hacerclic" cuando el documento se hayan terminado
