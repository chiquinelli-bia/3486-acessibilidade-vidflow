![Thumbnail do projeto. O título é "Projeto - Vidflow" e o subtítulo é "adaptado por Bianca Chiquinelli".](Front-end-Projeto%20-%20Vidflow.png)

# VidFlow

O VidFlow é uma plataforma de compartilhamento de vídeos. O projeto já inclui a estrutura básica em HTML, estilos em CSS e funcionalidades implementadas em JavaScript, como requisições e interações na página. Com base no curso "Acessibilidade em HTML, CSS e JavaScript: avaliando e melhorando um projeto com o NVDA" da Alura, realizamos uma revisão completa do projeto, desde ajustes rápidos até avaliações avançadas de acessibilidade, aplicando melhorias em links, botões, formulários e na estrutura geral da página.

![Captura de tela do Vidflow.](./vidflow.png)

## 🔨 Funcionalidades do projeto

Além das funcionalidades originais do VidFlow, o projeto inclui recursos de acessibilidade, como:

`Avaliação de acessibilidade`: Permite verificar a acessibilidade do projeto, desde revisões rápidas até avaliações complexas usando padrões APG.

`Navegação por teclado`: Implementa navegação intuitiva e acessível em componentes como tablists e botões, facilitando o uso sem mouse.

`Uso de roles ARIA`: Aplica roles como "search", "tablist", "tabpanel" para melhorar a semântica e a navegabilidade para leitores de tela.

`Atualização dinâmica de atributos ARIA`: Ajusta atributos como aria-selected e aria-expanded para refletir o estado atual dos elementos na interface.

`Melhoria na estrutura semântica`: Adiciona headings escondidos (h1, h2) para suporte à acessibilidade e otimização SEO.

`Foco acessível`: Define e controla o foco em elementos interativos, garantindo que o usuário saiba onde está navegando.

`Labels e descrições ARIA`: Adiciona aria-labels, titles e descrições nos botões, links e formulários para melhor compreensão por leitores de tela.

`Suporte ao leitor de tela NVDA`: Considera atalhos e recursos do NVDA para testar e garantir uma experiência inclusiva.

💡 _Este projeto foi uma das etapas em que explorei diferentes formas de estruturar a organização de pastas e arquivos. Hoje sigo um padrão mais consistente, mas deixei essa versão visível para mostrar meu processo de aprendizado_

## ✔️ Técnicas e tecnologias utilizadas

- **HTML semântico:** Uso correto de tags para garantir significado e estrutura acessível do conteúdo.

- **ARIA (Accessible Rich Internet Applications):** Implementação de atributos e roles para melhorar a navegação e interação com leitores de tela.

- **JavaScript acessível:** Dinamização e manipulação de atributos ARIA e foco para garantir atualizações e navegação compatíveis.

- **NVDA:** Ferramenta de leitor de tela utilizada para testes e avaliação da acessibilidade do projeto.

## ☁️ Hospedagem da API no Gist

Para disponibilizar a API de videos para o front-end de forma pública e acessível, a API foi hospedada no Gist do GitHub. Diferente do ambiente local, onde usamos o JSON Server rodando na máquina local, o Gist permite que a API esteja sempre online, pronta para receber requisições reais da aplicação em produção.

## 🛠️ Acesso ao projeto

Você pode [ acessar o VidFlow através deste link](https://3486-acessibilidade-vidflow.vercel.app/)
