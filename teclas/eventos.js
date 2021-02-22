var teclas  = {
UP   : 38,
DOWN : 40,
LEFT : 37,
RIGHT: 39
};
console.log(teclas);


  document.addEventListener("keyup", dibujarTeclado);

 function dibujarTeclado(evento)
 {
  if(evento.keyCode == teclas.UP)
  {
    console.log("vamo pa ariiba");
  }
   if (evento.keyCode == teclas.DONW)
  {
    console.log("vamo pa abajo");
   }
   if (evento.keyCode == teclas.LEFT)
   {
     console.log("vamo pa la derecha");
   }
   if (evento.keyCode == teclas.RIGHT)
   {
     console.log("vamo pa la izquierda");
   }

 }
