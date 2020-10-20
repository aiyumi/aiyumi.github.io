.. title: Até que Enfim Mudei o Layout do Site!
.. slug: changed-layout-at-last
.. date: 2020-10-19 21:36:50
.. tags: Site Updates

9 anos depois - sim, o blog começou em 2011 -, finalmente consegui mudar o layout do site! O layout novo é baseado no [tema Yesplease para o Nikola CMS][yesplease] com várias modificações. É um layout bem básico, mas espero que o texto esteja mais fácil de ler. Ao contrário do layout anterior, este é responsivo e deve funcionar melhor em telas pequenas, como em smartphones e tablets. Agora o conteúdo está à direita, o menu à esquerda e pode ser ativado/desativado em telas pequenas.

Ainda pretendo continuar publicando a maioria dos meus posts na [rede social Hive][hiveprofile], então incorporei o feed que mostra os links para meus últimus posts da Hive na página principal. O único problema é que tive que usar JavaScript para isso (não havia outra forma porque este é um site estático e não tem suporte a nenhuma linguagem de programação como PHP), mas nada vai mudar para quem usa navegadores sem suporte a JavaScript (é só visitar a página do meu perfil da Hive e ver meus posts diretamente por lá, como era antes). Acredito que isso não seja um grande problema...

Outra melhoria foi nas páginas de listagem de posts, onde agora aparece um trechinho do conteúdo do post em vez de mostrar só o título como era antes. Vale tanto para os posts do blog normal quanto para os da Hive na página principal! Assim a listagem fica mais interessante.

Edit: parece que comemorei muito cedo. Quando mandei os arquivos para o servidor, o feed da Hive não carregou. Aparentemente, os navegadores não gostam que este blog no GitHub Pages seja HTTPS e o site do feed seja HTTP (o download do feed é bloqueado com um erro de "conteúdo misto"). Entrei em contato com um dos mantenedores do [site do feed][hiverss] e perguntei se teria como adicionar HTTPS por meio de um serviço gratuito, e ele disse que vai lidar com o caso ainda nesta semana. Vou atualizar o post quando resolver.

Desta atualização, era isso. Vejo vocês nos próximos posts, seja na Hive ou aqui.

[yesplease]: https://themes.getnikola.com/v7/yesplease/
[hiveprofile]: https://hive.blog/@aiyumi
[hiverss]: http://hiverss.com/
