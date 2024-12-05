let indiceImagem = 0;

function mudarImagem(direcao) {
  const imagens = document.querySelectorAll('.imagens img');
  const totalImagens = imagens.length;

  indiceImagem += direcao;

  if (indiceImagem < 0) {
    indiceImagem = totalImagens - 1;
  } else if (indiceImagem >= totalImagens) {
    indiceImagem = 0;
  }

  // Ajusta a posição das imagens e a classe 'main'
  const novoDeslocamento = -indiceImagem * 200;
  document.querySelector('.imagens').style.transform = `translateX(${novoDeslocamento}%)`;

  // Remover a classe 'main' das imagens
  imagens.forEach(img => {
    img.classList.remove('main');
  });

  // Adiciona a classe 'main' à imagem ativa
  imagens[indiceImagem].classList.add('main');
}

