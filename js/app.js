function alterarStatus(id) {

    let gameclicado = document.getElementById(`game-${id}`);
  
    if(gameclicado) {
  
      let botao = gameclicado.querySelector('.dashboard__item__button');
      
      if(botao.textContent === 'Alugar') {
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
      
      } else {
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
      }
  
    }
  
  }