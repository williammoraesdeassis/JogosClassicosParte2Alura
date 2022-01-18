//ator

let yAtor = 368;
let xAtor = 120;
let diametroAtor = 28;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, diametroAtor, diametroAtor);
}

function movimentaAtor(){
  verificaLimiteBorda();
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    if(podeSeMover()){
      xAtor -= 3;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(podeSeMover()){
      xAtor += 3;
    }
  }
}


//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)

function verificaColisão(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaParaPosicaoInicial();
      if(pontosMaiorQueZero()){
        pontos--;
        somColidiu.play();
      }
    }
  }
  
}

function voltaParaPosicaoInicial(){
  yAtor = 368;
}

function placar(){
  textAlign(CENTER);
  textSize(25);
  fill(color('red'));
  text(pontos, width /6, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    pontos++;
    somPontos.play();
    voltaParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return pontos > 0;
}

function podeSeMover(){
  return yAtor < 370;
}

function verificaLimiteBorda(){
  if(xAtor < 0){
    xAtor = 0;
  } else if(xAtor > 470){
    xAtor = 470;
  }
}