const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos() {
  try {
    const busca = await fetch(
      "https://gist.githubusercontent.com/chiquinelli-bia/b485c1f8392f07a0c1c1d2080be71711/raw/8059793ed7b0fbe017e8afeda25807b27d021f60/gistfile1.txt"
    );
    const resposta = await busca.json();
    const videos = resposta.videos;

    videos.forEach((video) => {
      if (video.categoria === "") {
        throw new Error("Vídeo não tem categoria");
      }
      containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <a class="link-img-canal" href="#">
                    <img src="${video.imagem}" alt="Canal ${video.canal}">
                </a>
                <a href="#">
                    <h3 class="titulo-video">${video.titulo}</h3>
                </a>
                <p class="titulo-canal">${video.descricao}</p>
                <p class="categoria" hidden>${video.categoria}</p>
            </div>
        </li>
      `;
    });
  } catch (error) {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
  }
}
buscarEMostrarVideos();
