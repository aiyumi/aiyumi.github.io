.. title: Slackware 14.2, Leitores de Tela e PulseAudio
.. slug: slack-14.2-srs-and-pulse
.. tags: linux
.. date: 2017-03-23 15:55:46

Depois de um longo e tenebroso inverno (e primavera, e verão, e mais um pouco) finalmente estou no Slackware 14.2. Já faz quase um ano que saiu, mas eu estava sem coragem nem ânimo para atualizar, principalmente porque quando tentei atualizar a instalação no meu netbook (que serviu de cobaia como sempre), não tinha dado certo (é a primeira vez que tenho problemas tentando atualizar o Slackware). O sistema ficou sem som no meio da atualização e perdi o acesso aos meus programas leitores de tela dos quais eu dependo para fazer qualquer coisa no computador (ainda bem que foi no netbook e não na minha máquina principal!). Eu não estava conseguindo resolver e perdi a paciência de investigar, e acabei deixando de lado por um bom tempo. Agora que estou de férias do trabalho e com um pouco mais de tempo, finalmente arranjei paciência e coragem para tentar de novo. <!--more-->

Por que deu problema? Tudo graças ao PulseAudio - um gerenciador de som polêmico, amado por uns e odiado por outros - que por fim conseguiu [se "infiltrar" no Slackware][pulseslack] e se tornar o gerenciador de som padrão no 14.2. Lembro de ter tido problemas com esse software na época que estava iniciando no Linux, quando testei o Ubuntu. Uma das razões que me fez escolher o Slackware foi justamente porque não tinha esse "bendito". Consegui fugir do PulseAudio por cerca de oito anos, mas agora ele está aí, e parece que veio para ficar.

Investigando o problema no meu netbook, continuei tentando fugir. Primeiro tentei fazer o Pulse ficar como gerenciador de som secundário e deixar o ALSA como primário, para que a maioria dos programas usem o ALSA e somente os que realmente dependem do Pulse recorram a ele. Segui as [instruções na wiki do Arch Linux][pulsepipe], mas não deu certo. O Speech-Dispatcher (servidor de fala do qual o Orca depende) se recusou a funcionar. Configurando o "AudioOutputMethod" como "alsa" e deixando o "AudioALSADevice" em "default" (exatamente como estive usando durante todos esses anos), o programa não iniciava e no log dava erro de "couldn't open alsa plugin". Colocando "AudioALSADevice" como "dmix" não dava erro mas não saía som nenhum. Tentei até usar o ALSA através do Libao como "AudioOutputMethod" (recompilei o Libao para usar ALSA em vez do Pulse) mas também não saiu som. E adivinha qual o único jeito que saiu som? "AudioOutputMethod" configurado como "pulse"...

Então, em vez de tentar fugir, fazer todos os programas usarem o PulseAudio pareceu ser a forma mais fácil de resolver o problema. Aí eu pensei. Não tenho boas lembranças do PulseAudio de quando usei antes, mas isso já faz oito anos! Ouvi várias reclamações (mais recentes) sobre o Pulse, mas também sei de gente muito fera lá da lista de discussão Linux-Audio-User que gosta bastante dele, então pode ser que tenha melhorado. E se o Slackware que é tão exigente chegou a ponto de aceitar adotar o PulseAudio, então talvez seja hora de eu dar uma chance a ele.

No fim das contas, eu me rendi  e instalei tudo relacionado ao PulseAudio (precisei recorrer a ajuda visual enquanto estava sem som) e dei permissão de execução no "/etc/rc.d/rc.pulseaudio" para ele iniciar no boot. Recompilei o Espeak para usar o Pulse também. Ou seja, tudo usando o Pulse. Aí... funcionou!

Como deu certo no netbook, atualizei o Slackware e repeti o processo do Pulse no PC... mas não funcionou direito. Tentando iniciar o Pulse com o sistema (da forma como funcionou no netbook) não tinha som nenhum, e iniciando individualmente para cada usuário dava problemas.

Praticamente perdi o dia inteiro pesquisando na Internet e não achei nenhum problema parecido com o meu. Foram várias horas de tentativa e erro até eu entender o que estava acontecendo. A questão é que o Espeak (e por consequência, o espeakup, que faz o leitor de telas para console falar) foi compilado para usar o Pulse se o Pulse estiver rodando, ou o ALSA se não estiver. Aí, se iniciasse o leitor de telas no boot, o Espeakup iria usar o ALSA porque o Pulse não estaria rodando ainda (o Pulse só viria depois dos logins dos usuários), o Espeakup iria se "apossar" da placa de som e não deixaria o Pulse iniciar. Então realmente precisava que o Pulse iniciasse no boot e que já estivesse ativo quando o Espeakup chegasse. Mas iniciando o Pulse pelo boot não tinha som nenhum...

Sem saber mais o que fazer, saí comparando logs. Comparei o log do PulseAudio rodando como root (onde o som funcionava como deveria) e o log de quando tentava iniciar no boot (onde não saía som), que é com um usuário especial chamado "pulse." No root ia tudo direitinho, mas descobri que no usuário pulse a placa de som não estava sendo detectada e só aparecia um dispositivo "dummy". Mas por que no usuário pulse não detectava a placa de som? No meu usuário normal detectava perfeitamente! Mais algumas horas batendo cabeça e finalmente caiu a ficha. Pergunta: qual a diferença do meu usuário para o usuário do pulse? Resposta: o meu usuário estava no grupo "audio" e o usuário do pulse não. Ou seja, o usuário responsável por gerenciar o som do sistema não tinha acesso às coisas relacionadas a som! (vê se pode?) Tanto tempo perdido, e no final era só adicionar o usuário no grupo "audio"!

Então, o comando que finalmente resolveu meu problema foi este:

    # usermod -aG audio pulse

Pronto! Não sei por que no netbook funcionou de cara sem precisar fazer isso, mas OK...

E como está a performance do som com o PulseAudio? No netbook (que é mais "fraco") fica mais pesado e dá uns engasgos, mas no PC (que é mais potente) vai de boa. Recompilei meus programas relacionados a som (SoX, Mplayer, Audacity, Ecasound) para usarem o Pulse também, e estão funcionando. Precisei editar o arquivo "/etc/pulse/daemon.conf" e deixar "default-sample-rate = 48000" (porque é o padrão da minha placa de som), senão o Audacity distorcia todo o som ao reproduzir arquivos de áudio.

Para o Ecasound, precisei mudar a sample rate interna para 48000 no arquivo "~/.ecasound/ecasoundrc" (o arquivo não existia, então copiei de "/usr/share/ecasound/ecasoundrc"). E na hora de reproduzir algum arquivo de som pelo Ecasound, precisa da opção "-B nonrt" para não dar problemas. Exemplo:

    $ ecasound -B nonrt -i teste.ogg

Para outras melhorias gerais, alterei algumas outras configurações. No arquivo "/etc/pulse/client.conf", deixei "autospawn = no" e "allow-autospawn-for-root = no", para evitar que o Pulse individual dos usuários tente iniciar sozinho e entre em conflito com o Pulse rodando em modo de sistema.

Também existe uma variável de ambiente, "PULSE_LATENCY_MSECS", que dizem que elimina problemas de som tocando rápido demais em certos programas como o Skype e o Wine. Coloquei esta variável num script executável qualquer dentro de "/etc/profile.d" para ficar definida para todos os usuários:

    export PULSE_LATENCY_MSECS=30

No mais, fora os enroscos até finalmente descobrir as configurações certas, No geral, o som está funcionando como deveria (Orca, YouTube, Flash etc.) e surpreendentemente, o PulseAudio ainda não travou nenhuma vez! Espero que continue assim..

Por falar no Orca, atualizei meus SlackBuilds para instalar o Orca no Slackware 14.2. Para instruções, [acesse aqui](/pt/blog/installing-orca-on-slackware-14.2).

[pulseslack]: https://docs.slackware.com/howtos:multimedia:pulseaudio_non-default
[pulsepipe]: https://wiki.archlinux.org/index.php/PulseAudio/Examples#PulseAudio_as_a_minimal_unintrusive_dumb_pipe_to_ALSA
