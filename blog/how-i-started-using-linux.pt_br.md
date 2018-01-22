.. title: Como Comecei a Usar Linux
.. slug: how-i-started-using-linux
.. keywords: acesso, acessibilidade, a11y, cego, computador, deficiente visual, deficientes visuais, distribution, distro, informática, leitor de tela, leitores de tela, linux, orca, slack, slackware
.. description: 
.. tags: linux
.. date: 2011-03-14 20:51:36

Em 23 de junho de 2009, publiquei um artigo na lista de discussão do Slackware Users Group Brazil, contando como migrei e comecei a usar Linux. O texto original pode ser lido [aqui][artig]. <!--more-->

[artig]: http://groups.google.com/g/05e7fcc8/t/3ac5bdd6e5aafbe4/d/b3c85b56ff4ea1a0

Atenção: o artigo é antigo e houve melhorias de lá para cá. Algumas notas importantes estão abaixo.


### Notas e Atualizações ###

[\*] Este artigo é antigo e algumas coisas estão desatualizadas. Por exemplo, eu já consegui fazer o Speakup funcionar (talvez eu escreva um post explicando como).

Mas o script do .xinitrc foi o que mais melhorou, agora funciona tanto com o AT-SPI 1 ou o 2. E ao contrário do que escrevi no artigo, depois eu soube que o Orca NÃO deve ser a última coisa a executar. Para iniciar o servidor X (interface gráfica), as aplicações desejadas devem ser executadas em plano de fundo (background), excluindo o programa "principal" (geralmente o ambiente de desktop ou o gerenciador de janelas), que deve ser a última coisa a iniciar. Quando esse programa é fechado, o servidor X é derrubado junto com ele, por isso o desktop ou o gerenciador de janelas é que deve vir por último, e não o Orca. Provavelmente, esse é um dos detalhes de que eu nunca iria saber se estivesse usando uma das outras distros que vêm com tudo mastigado (e talvez desistisse, pensando que a única saída para fazer funcionar direito seria instalar o Gnome...).

Fiz uma versão melhorada do script do artigo, adicionando suporte para a AT-SPI versão 2. As correções acima têm um papel importante sobre este script, já que os aplicativos devem ser iniciados em uma ordem específica.

[Baixe (ou use a opção 'salvar como' do seu navegador) o script atualizado aqui][new-xinitrc] e copie-o para seu diretório home, renomeando-o para '.xinitrc'... Ou faça tudo isso do console mesmo, com apenas uma linha!

	wget -O $HOME/.xinitrc http://aiyumi.warpstar.net/public/files/slackware-nognome-xinitrc

Esse xinitrc inicia o desktop XFCE e também uma janela de terminal (é bastante útil porque o desktop em si não é muito acessível).

Enjoy.

[newxinitrc]: http://aiyumi.warpstar.net/public/files/slackware-nognome-xinitrc