const flowerButton = document.getElementById('flowerButton');
const textoCompleto = document.querySelector('.texto-completo');
const opcoesResposta = document.getElementById('opcoesResposta');
const mensagemFinal = document.getElementById('mensagemFinal');

let jaRevelou = false;

flowerButton.addEventListener('click', () => {
  if (!jaRevelou) {
    textoCompleto.classList.add('ativo');
    jaRevelou = true;
    opcoesResposta.classList.add('ativo');
  }
});

const botoes = document.querySelectorAll('.btn-resposta');

botoes.forEach((botao) => {
  botao.addEventListener('click', () => {

    const tipo = botao.dataset.resposta;

    if (tipo === 'sim') {
      mensagemFinal.innerHTML =
        'Então uma coisa eu te garanto: você não vai se arrepender.<br><br>' +
        'Não é aquelas declarações vazias, é uma promessa.<br>' +
        'Me manda no WhatsApp um “💍🤍”...<br><br>' +
        'E deixa eu te dedicar um trecho de uma musica dessa promessa e oque nos aguarda...';

      mensagemFinal.classList.add('ativo');

      // Redireciona após 5 segundos
      setTimeout(() => {
        window.location.href = "musica.html"; // coloque aqui sua próxima página
      }, 5000);

    } else {
      mensagemFinal.innerHTML =
        'Eu respeito o seu tempo.<br><br>' +
        'E mesmo que agora não seja o momento,<br>' +
        'você continuará sendo alguém especial para mim.<br><br>' +
        'Se quiser me dizer algo depois de ler tudo isso,<br>' +
        'me manda no WhatsApp um “🌙💔”.';

      mensagemFinal.classList.add('ativo');
    }

  });
});