'use strict'

var crearPost = document.querySelector("#crearPost");

crearPost.addEventListener('submit', function() {
  var titulo = document.querySelector("#crearTituloNota").value;
  var contenido = document.querySelector("#crearContenidoNota").value;

  if(titulo.length >= 1 && contenido.length >= 1)
  {
    localStorage.setItem(titulo,contenido);
  }
})



var borrarPost = document.querySelector("#removerPost");
borrarPost.addEventListener('submit', function() {

  var titulo = document.querySelector("#deleteTituloNota").value;
  if(titulo.length >= 1)
  {
    localStorage.removeItem(titulo);
  }
})


var ul = document.querySelector("#notas-list");

for (var i = 0; i <=  localStorage.length-1; i++)
{
  var clave = localStorage.key(i);
  if(typeof localStorage.key(i) == 'string')
  {
    var li = document.createElement("li");
    li.append("Titulo :" + localStorage.key(i) + " Contenido: " + localStorage.getItem(clave) );
    ul.append(li);
  }
}
