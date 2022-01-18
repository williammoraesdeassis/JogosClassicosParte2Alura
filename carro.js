//Código dos carros

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 97, 150, 210, 270, 318];
let velocidadeCarros = [2.5, 3, 4, 5, 3.8, 2.9];
let comprimentoCarro = 60;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoIniciaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(passouABorda(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouABorda(xCarro){
  return xCarro < -50;
}