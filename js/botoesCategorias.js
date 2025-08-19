const botoesCategorias = document.querySelectorAll(".botao-categoria");

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelecionada = botao.getAttribute("name");

    associarPainel(botao);
    filtrarPorCategoria(categoriaSelecionada);
    atualizarEstadosDosBotoes(categoriaSelecionada);
  });
  botao.addEventListener("keydown", navegacaoBotaoPainel);
});

function associarPainel(botao) {
  const painel = document.getElementById("panel-videos");
  painel.setAttribute("aria-labelledby", botao.id);
}

function filtrarPorCategoria(filtro) {
  const videos = document.querySelectorAll(".videos__item");

  for (const video of videos) {
    const categoria = video
      .querySelector(".categoria")
      .textContent.toLowerCase();
    const valorFiltro = filtro.toLowerCase();

    const mostrarVideo =
      valorFiltro === "tudo" || categoria.includes(valorFiltro);

    video.classList.toggle("escondido", !mostrarVideo);
  }
}
function atualizarEstadosDosBotoes(categoriaSelecionada) {
  botoesCategorias.forEach((botao) => {
    const botaoFoiSelecionado =
      botao.getAttribute("name") === categoriaSelecionada;

    botao.ariaSelected = botaoFoiSelecionado;
    botao.setAttribute("tabindex", botaoFoiSelecionado ? 0 : -1);
  });
}
const tabList = document.querySelector('[role="tablist"]');

function navegacaoBotaoPainel(evento) {
  const btn = evento.target;
  if (evento.key === "ArrowRight") {
    if (btn === tabList.lastElementChild) {
      tabList.firstElementChild.focus();
    } else {
      btn.nextElementSibling.focus();
    }
  } else if (evento.key === "ArrowLeft") {
    if (btn === tabList.firstElementChild) {
      tabList.lastElementChild.focus();
    } else {
      btn.previousElementSibling.focus();
    }
  }
}
