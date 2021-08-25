var filmes = {"Django livre": 'Meu pai adora!',
              "Homem aranha 3": 'Em breve nos cinemas'}
              
              



function escolherFilme(){
  var campoFilmeFavorito = document.querySelector("#filme")
  var filme = campoFilmeFavorito.value
if(filmes.hasOwnProperty(filme)){
  alert(filmes[filme])  
}else{
  alert("Não temos o filme " + filme + " em nossas biblioteca!");
  
}  
  
 if(filme=="Django livre"){ 
    var endereco = "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_UX182_CR0,0,182,268_AL_.jpg" ;
    var nomeDoFilme = "<img src=" + endereco +">";
	//var video = document.getElementById("#video1")
     document.getElementById("video1").style.display = 'block';
	// alert(filme)
    } 
  if(filme=="Homem aranha 3"){ 
    var endereco = "https://www.einerd.com.br/wp-content/uploads/2021/05/homem-aranha-3-spider-man-no-way-home-e1621516234441-890x464.jpg" ;
    var nomeDoFilme = "<img src=" + endereco +">";
	//var video = document.getElementById("#video2")
     document.getElementById("video2").style.display = 'block';
	// alert(filme)
    } 
  
  
  listarFilmeFavorito(nomeDoFilme)
  
    
 
    
  }

function listarFilmeFavorito(filme){
  var listaFilmes = document.querySelector("#listaFilmes")
  var elementosDoFilme = filme //"<img src=" + filme + ">"
  
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementosDoFilme
  
}