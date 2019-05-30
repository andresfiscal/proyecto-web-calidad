'use strict'

var crearPost = document.querySelector("#crearPost");

crearPost.addEventListener('submit', function() {
  var titulo = document.querySelector("#crearTituloNota").value;
  var contenido = document.querySelector("#crearContenidoNota").value;

  if(titulo.length >= 1 && contenido.length >= 1)
  {
    localStorage.setItem(titulo,contenido);
  }else {
    if (titulo.length == null ) {
      alert("ingrese un titulo");
    }else if (contenido.length == 1) {
      alert("ingrese un contenido");
    }
  }
})

var cambiarColor = document.querySelector("#cambiarColor");
cambiarColor.addEventListener('', function{
//  var color = document.querySelector("#crearContenidoNota")

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
