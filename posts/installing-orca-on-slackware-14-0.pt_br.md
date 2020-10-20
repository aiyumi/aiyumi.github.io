.. title: Instalando o Orca no Slackware 14.0
.. slug: installing-orca-on-slackware-14-0
.. keywords: 14.0, 14.1, acessibilidade, at-spi, atspi, compilar, compilando, deficiente visual, deficientes visuais, instalar, instalando, leitor de telas, linux, orca, slack, slackware, slackbuild
.. description: Um guia rápido de como instalar o leitor de telas Orca no Slackware 14.0 e 14.1 sem o ambiente de desktop Gnome.
.. tags: linux
.. date: 2013-09-27 21:00:15

Estava dando uma olhada no Slackware Current, que agora contém os pacotes que entrarão na próxima versão (14.1, se não mudar de nome como aconteceu com o 13.37). Para minha surpresa, foram incluídos o AT-SPI2-Core e o AT-SPI2-ATK, duas dependências muito importantes do [leitor de telas Orca][orcahp], inclusive as versões são mais recentes do que as que eu tenho! Mas acho que não foi pensando em acessibilidade que eles colocaram (algum outro pacote novo deve ter essas libs como dependência) porque nos SlackBuilds ainda tem uns pacotes "./configurados" com "--disable-introspection" e "--disable-accessibility" (quando fui instalar o Orca no meu sistema atual, tive muita dor de cabeça até descobrir que vinha por padrão assim. Precisei habilitar as opções e compilar esses programas de novo). Mesmo assim, a cada nova versão do Slackware, mais dependências do Orca vêm sendo incorporadas à instalação padrão. Talvez, daqui a algumas versões, todas (ou quase todas) as dependências do Orca finalmente estejam preenchidas. Enquanto esse dia não chega, reuni os SlackBuilds para compilar o Orca e suas dependências e os [enviei para o Github][slackbuilds]. Alguns são meus (porque não achei prontos em lugar nenhum) e outros são cópias dos scripts do [Slackbuilds.org][sbohp] ou de pacotes do próprio Slackware (alguns que precisaram de ajustes e recompilação), todos reunidos em um só lugar para ficar mais fácil. Não são as versões mais recentes, mas são as específicas para funcionarem com as versões das bibliotecas que vêm por padrão no Slackware 14.0 (para construir as mais recentes seria necessário compilar muita coisa extra e daria muito mais trabalho). E para aqueles se perguntando se precisa instalar o Gnome, não, não precisa. Ao contrário do que possa parecer, apesar do Orca ser parte do Projeto Gnome, ele pode muito bem funcionar normalmente sem esse ambiente desktop tão pesado. Segue abaixo um guia rápido de como fazer para instalar o Orca no Slackware, **sem** o Gnome: <!--teaser_end-->

Atualização (2013/12/29): atualizei os scripts para funcionarem no Slackware 14.1. A diferença é que o 14.1 já vem com o AT-SPI2-Core e o AT-SPI2-ATK. Ainda é preciso compilar o Pyatspi e recompilar outros pacotes conflitantes, mas com os queuefiles tudo isso fica quase automático, então para quem for apenas usar os scripts, o processo continua sendo o mesmo.

Atualização (2017/03/23): atualizei meus scripts para instalar o Orca no Slackware 14.2. Para instruções, [clique aqui](/pt/blog/installing-orca-on-slackware-14.2).

Nota: as instruções abaixo são específicas para o Slackware 14.0 e o 14.1, já que as coisas podem mudar no futuro (espero que para melhor!). Este é apenas um guia rápido. Tirando a parte da configuração do meu repositório personalizado (que pode não ser tão óbvia), ele é mais para descrever a ordem em que os passos devem ser seguidos. Não vou explicar como se usa o Sbopkg ou as ferramentas de pacotes do Slackware (Installpkg e Removepkg). Se você não sabe usar esses programas, leia os manuais e/ou procure por tutoriais na Internet.

Dito isso, vamos começar:

1. Faça um Clone do meu repositório:

        # git clone https://github.com/aiyumi/slackware-scripts.git
        # cd slackware-scripts

    Se seu Slackware for 14.1, pule para o passo 2. Se for o 14.0, precisa usar o seguinte comando primeiro:

        # git checkout 14.0

2. A maneira mais fácil de usar esse conjunto de scripts é com o [Sbopkg][sbopkghp]. Para configurár o repositório para usar com o Sbopkg, copie o diretório "slackbuilds" para "/var/lib/sbopkg/" e o renomeie para, por exemplo, "aiyumisb".

        # cp -R slackbuilds /var/lib/sbopkg/aiyumisb

3. Copie o arquivo "sbopkg-queuefiles/100-aiyumi.repo" para "/etc/sbopkg/repos.d" e edite o "/etc/sbopkg/sbopkg.conf" para configurar como repositório padrão, assim:

        REPO_BRANCH=${REPO_BRANCH:-local}
        REPO_NAME=${REPO_NAME:-aiyumisb}

    Ou, se não quiser que seja seu repositório padrão, pode iniciar o Sbopkg com este comando:

        # sbopkg -V aiyumisb/local

4. Copie os arquivos ".sqf" de "sbopkg-queuefiles" para "/var/lib/sbopkg/queues".

        # cp sbopkg-queuefiles/aiyumisb/accessibility/*.sqf /var/lib/sbopkg/queues

5. Desinstale (com "removepkg") os seguintes pacotes que estão com opções importantes desabilitadas e precisam ser recompilados:

    * gobject-introspection: a versão que vem no Slackware entra em conflito com o Gnome-Python e dá erro na hora do "make".

    * pygobject: vem com introspecção desabilitada.

6. Recompile os pacotes acima usando os SlackBuilds que você acabou de baixar (estão dentro do diretório "libraries", já editados com os devidos ajustes), depois instale cada pacote com o "installpkg".

    Nota: se você usa o Firefox, infelizmente vai precisar recompilar. O do Slackware vem com acessibilidade desabilitada para economizar tempo de compilação ou algo assim (oops!). Esse é o único que não tem no meu repo, então você vai ter que copiar o do Slackware e trocar "--disable-accessibility" por "--enable-accessibility" na parte do "./configure". E se prepare, porque demora pra caramba (demorou três horas no meu netbook 1.6Ghz, e uma hora no meu desktop quad core 2.8Ghz).

    Agora, para a instalação do que realmente interessa:

7. Se você ainda não tiver o Espeak (que o Orca usa por padrão), abra o Sbopkg, carregue o queuefile "espeakup.sqf" \* e instale. O Espeak será instalado junto com o Espeakup, que adiciona suporte a voz via Espeak ao Speakupp (leitor de telas para console, que é sempre bom ter).

    \* Nota: para Português, eu prefiro a pronúncia do Espeak 1.40 em vez da última versão. Se você concorda comigo, use o queuefile "espeakup-espeak-1.40.sqf" em vez do "espeakup.sqf".

8. Carregue o "orca.sqf" e mande instalar tudo (Speech-Dispatcher, um monte de bibliotecas, AT-SPI2/Pyatspi, Orca). Vá tomar um café porque compilar tudo isso demora (felizmente, não tanto quanto o Firefox :P). Eu corrigi os erros que apareceram para mim, fiz o processo de novo e não deu nenhum outro, então espero que não apareça nenhum para você (mas não garanto nada :P).

9. Abra as configurações do Speech-Dispatcher em "/etc/speech-dispatcher/speechd.conf". Verifique se está usando o ALSA para reproduzir o som e se o módulo do Espeak está sendo carregado, ajustando se não estiver. As linhas relevantes devem estar assim:

        # ----- VOICE PARAMETERS -----
        DefaultLanguage "pt"

        # ----- AUDIO CONFIGURATION -----------

        # -- AUDIO OUTPUT --
        AudioOutputMethod "alsa"

        # -----OUTPUT MODULES CONFIGURATION-----
        AddModule "espeak"       "sd_espeak"   "espeak.conf"

        DefaultModule espeak

        LanguageDefaultModule "pt"  "espeak"

    Para testar, use o comando "spd-say algumacoisa". Se sair som, então está certo!

10. Tente configurar o Orca pelo terminal (no modo texto ainda, fora do X) com o comando "orca -t". Se tiver problema de permissões com o diretório "/etc/gconf/gconf.xml.system", dê um "chmod 755" nele (não sei por que acontece isso, nem se tem como corrigir pelo SlackBuild). Quando não der mais nenhum erro e o Orca finalmente falar, parabéns. Você acabou de instalar o Orca no Slackware, e sem o Gnome!

11. Estando tudo Ok até aqui, você vai precisar de um emulador de terminal acessível para poder usar o console pela interface gráfica. Se você for usar o XFCE e instalou os pacotes que vêm no Slackware, o XFTerminal que vem com ele serve, mas se for usar outro desktop/gerenciador de janelas (eu uso o Fluxbox, que também está no Slackware), vá ao repositório oficial do Slackbuilds.org pelo Sbopkg e instale, por exemplo, o LXTerminal. Eu particularmente não uso nenhum gerenciador de arquivos (prefiro fazer tudo pelo terminal mesmo), mas se você quiser um gerenciador de arquivos e não quer o XFCE, instale também o PCManFM (ele é acessível quando se usa o modo "Ver -> Visão em lista detalhada").

12. Por fim, copie o arquivo "/usr/doc/orca-*/orca.atspi2.xinitrc" para "~/.xinitrc" (é ele que seta as variáveis para ativar a acessibilidade na interface gráfica), edite a última linha para especificar qual desktop/gerenciador de janelas você vai usar (por exemplo, "startfluxbox" para o Fluxbox ou "startxfce4" para o XFCE), dê o comando "startx" e divirta-se! :D

[orcahp]: https://live.gnome.org/Orca
[slackbuilds]: https://github.com/aiyumi/slackware-scripts
[sbohp]: http://www.slackbuilds.org/
[sbopkghp]: http://sbopkg.org/
