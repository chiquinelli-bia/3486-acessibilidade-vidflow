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
  let newBtn;
  switch (evento.key) {
    case "ArrowRight":
      evento.preventDefault();
      if (btn === tabList.lastElementChild) {
        newBtn = tabList.firstElementChild.focus();
      } else {
        newBtn = btn.nextElementSibling.focus();
      }
      break;

    case "ArrowLeft":
      evento.preventDefault();
      if (btn === tabList.firstElementChild) {
        newBtn = tabList.lastElementChild.focus();
      } else {
        newBtn = btn.previousElementSibling.focus();
      }
      break;
    case "Home":
      newBtn = tabList.firstElementChild.focus();
      break;
    case "End":
      newBtn = tabList.LastElementChild.focus();
      break;
  }
  newBtn.focus();
  novoBotao.scrollIntoView({
    behavior: "smooth",
  });
}
