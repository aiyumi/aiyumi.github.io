.. title: Instalando o Orca no Slackware 14.2
.. slug: installing-orca-on-slackware-14.2
.. keywords: 14.2, acessibilidade, at-spi, atspi, compilar, compilando, deficiente visual, deficientes visuais, instalar, instalando, leitor de telas, linux, orca, slack, slackware, slackbuild
.. description: Um guia rápido de como instalar o leitor de telas Orca no Slackware 14.2 sem o ambiente de desktop Gnome.
.. tags: linux
.. date: 2017-03-23 15:58:02

Estas são instruções para instalar o leitor de telas Orca no Slackware 14.2 **sem** o ambiente de desktop Gnome. Não é a versão do Orca mais recente, mas é a compatível com as versões das bibliotecas que vêm por padrão no Slackware (para instalar o Orca mais recente, seria necessário recompilar versões mais recentes de muitos dos programas que já vêm no Slackware e seria muito mais difícil).

Do Slackware 14.1 para o 14.2, diminuiu bastante a quantidade de dependências, o que é uma coisa boa. A maioria das bibliotecas específicas do Gnome foram embora, não precisa mais recompilar programas que vinham no Slackware, e agora tudo que usa Python passou a depender do Python 3 em vez do Python 2. Se vierem mais dessas mudanças que facilitem as coisas, talvez logo seja possível que o Orca consiga entrar no Slackbuilds.org, aí não precisaremos mais ficar fazendo estes malabarismos com [meus scripts][slackscripts]. Vamos ter esperanças!

Para quem usou [minhas instruções e instalou o Orca no 14.0 ou 14.1][orca-14.0] e vai atualizar para o 14.2, precisa remover as dependências obsoletas com o comando abaixo (quem ainda não tem o Orca instalado não precisa usar este comando, mas olha só quantas dependências foram embora :D ):

    # removepkg gnome-mime-data gnome-vfs gnome-python libgnome libbonobo ORBit2 pyorbit

Agora, as instruções de instalação propriamente ditas. Antes de mais nada, você precisa ter o [Sbopkg][sbopkghp] instalado.

Na verdade, o processo para baixar e instalar o Orca continua quase igual ao que era [antes][orca-14.0]. Se quiser, você pode ler as instruções anteriores para explicações mais detalhadas, mas resumindo:

* Baixe o meu repositório e configure o Sbopkg para usar meus scripts:

        # git clone https://github.com/aiyumi/slackware-scripts.git
        # cd slackware-scripts
        # cp -R slackbuilds /var/lib/sbopkg/aiyumisb
        # cp slackbuilds/100-aiyumi.repo /etc/sbopkg/repos.d
        # cp sbopkg-queuefiles/aiyumisb/accessibility/*.sqf /var/lib/sbopkg/queues

* Execute o Sbopkg com o meu repositório:

        # sbopkg -V aiyumisb/local

* Se você ainda não tiver o Espeak (que o Orca usa por padrão), vá em "Queue" -> "Load", carregue o queuefile "espeakup" e instale. O Espeak será instalado junto com o Espeakup, que adiciona suporte a voz via Espeak ao Speakupp (leitor de telas para console, que é sempre bom ter).

* Vá em "Queue" -> "Load", carregue o queuefile "orca", mande instalar e espere até terminar.

* Edite as configurações do Speech-Dispatcher em "/etc/speech-dispatcher/speechd.conf". Certifique-se de que o módulo do Espeak está sendo usado e configurado para falar no idioma de sua preferência (no meu caso, Português). As linhas relevantes são:

        # ----- VOICE PARAMETERS -----
        DefaultLanguage "pt"

        # -----OUTPUT MODULES CONFIGURATION-----
        AddModule "espeak"       "sd_espeak"   "espeak.conf"

        DefaultModule espeak

        LanguageDefaultModule "pt"  "espeak"

    Para testar, use o comando "spd-say algumacoisa". Se sair som, então está funcionando!

* Por último, copie o arquivo "/usr/doc/orca-*/orca.atspi2.xinitrc" para "~/.xinitrc" (é ele que seta as variáveis para ativar a acessibilidade na interface gráfica) e edite a última linha com o comando para iniciar o seu gerenciador de janelas ou desktop favorito (por exemplo, "startfluxbox" para o Fluxbox ou "startxfce4" para o XFCE).

Pronto. Aí é só usar o comando "startx" para entrar na interface gráfica e ouvir o Orca abrir a matraca :D .

Nota sobre o Firefox: nas instruções para o 14.0 e 14.1, eu tinha falado que o Firefox do Slack vinha com acessibilidade desabilitada e precisava ser recompilado, o que levava horas. A má notícia é que o Firefox do Slackware ainda vem sem acessibilidade. Mas a boa notícia é que eu descobri que não precisa compilar outro! Graças a este [post do Frankiej][frankiejpost], fiquei sabendo [deste script][latestff] que baixa o binário do Firefox fornecido pela Mozilla (em que a acessibilidade funciona) e cria um pacote ".txz" para o Slackware que pode ser instalado com installpkg normalmente.

Apesar do nome "latest-firefox", este script não se limita a baixar a última versão do Firefox. Na verdade, você pode usá-lo para baixar qualquer versão que quiser. É só passar a variável "VERSION" para o comando que executa o script. Por exemplo, no momento em que escrevo este post, o plugin do Java não funciona na última versão do Firefox porque tiraram o suporte à API que o plugin usa. Para quem precisa do plugin do Java, enquanto não sai uma versão do Java com um plugin compatível com o último Firefox, o jeito é usar uma versão anterior do Firefox onde o plugin do Java ainda funciona. A última versão do Firefox onde a API obsoleta funciona é a 51.0. Neste caso, o comando para obter o pacote do Firefox 51.0 para o Slack seria:

    # VERSION=51.0 ./latest-firefox.sh

ou ainda, para o Firefox 51.0 com a interface em Português brasileiro:

    # VERSION=51.0 FFLANG=pt-BR ./latest-firefox.sh

E o programa vai deixar o pacote pronto em "/tmp". Chega de ter que esperar três horas para compilar o Firefox a cada versão :P .

[slackscripts]: https://github.com/aiyumi/slackware-scripts
[sbopkghp]: http://sbopkg.org/
[orca-14.0]: /pt/blog/installing-orca-on-slackware-14-0
[frankiejpost]: http://whatthefrankiej.blogspot.com.br/2014/12/gnome-orca-on-slackware-141.html
[latestff]: https://gist.github.com/ruario/9672798
