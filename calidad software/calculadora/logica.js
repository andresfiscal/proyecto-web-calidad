let texto = document.querySelectorAll('.text p')[0]

let digitos = document.getElementsByName('digito')
digitos.forEach((element)=> {
  element.addEventListener('click', () => { añadir(element.id) }, false)
})



let borrar =document.getElementById('borrar')
let igual = document.getElementById('=')
let ecuacion = document.getElementById('ecu')

borrar.addEventListener('click', borrarNum, false)
igual.addEventListener('click', resultado, false)


function borrarNum(event) {
  ecuacion.value =0
}

function resultado(event) {
   let calculo = ecuacion.value
   let resultado
   try {
     resultado= math.eval(ecuacion.value)
   } catch (e) {
     alert('Sintax Error')
     return
   }
   console.log(resultado);
   console.log(calculo);
   if(resultado == Infinity){
    alert('sintax error')
  }else{
    ecuacion.value = resultado
  }
}

function añadir (valor) {
  if (ecuacion.value === '0') {
    ecuacion.value = valor
  } else {
    ecuacion.value += valor
  }
}
