window.addEventListener("load",function(){
  var boton=document.getElementById("boton");
  var postear=document.getElementById("texto");
  var coder=document.getElementById("coder");
  var resultado=document.getElementById("post");
  var usuaria=document.getElementById("coder");
  var errorUsuaria=document.getElementById("error-usuaria");
  var errorTexto=document.getElementById("error-texto");

  boton.addEventListener("click",function(e){
    e.preventDefault();

      if (usuaria.value!="" && postear.value!="") {
        var post = document.createElement('div');
        var texto = document.createElement('p');
        var autor=document.createElement("p");
           post.classList.add("posteo");
           autor.classList.add("autor");
           texto.classList.add("contenido");
           texto.appendChild(document.createTextNode(postear.value));
           autor.appendChild(document.createTextNode(coder.value));
           post.appendChild(texto);
           post.appendChild(autor);
           resultado.insertBefore(post,resultado.childNodes[0]);
           document.getElementById("sign-in").reset();
      }
   });
});
