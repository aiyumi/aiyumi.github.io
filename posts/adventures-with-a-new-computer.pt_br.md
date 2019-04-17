.. title: Aventuras com um Computador Novo
.. slug: adventures-with-a-new-computer
.. keywords: 270s, 270 slim, computador, dell, desktop, driver, dual boot, geforce, leitor de tela, leitores de tela, linux, nvidia, orca, pc, vostro, slackware
.. description: 
.. tags: Site Updates
.. date: 2013-03-10 12:19:37

O meu computador antigo de sete anos de idade começou a dar sinais de morte, então comprei um novo.

### Escolha da Máquina ###

Como preciso usar o computador para trabalho, escolhi uma máquina um pouquinho mais "profissional". O que comprei foi um desktop Dell Vostro 270S (Vostro 270 Slim). Além de usar para trabalho, preciso de diversão também, então peguei a versão com 1 TB de disco rígido e placa de vídeo off board, para rodar jogos e coisas que o PC antigo não conseguia nem em sonho. Depois da negociação e customização (comprei por telefone), as especificações da máquina que consegui são as seguintes: <!--more-->

* Modelo: Vostro 270 Slim
* Processador: Intel® Core™ i5-3450S (2.8Ghz, 6Mb cache) (processador de 64-bits)
* HD: 1TB, SATA (7200 RPM)
* Memória RAM: 6GB, Dual Channel DDR3, 1600MHz (1x4GB) + (1x2GB)
* Teclado: teclado USB Dell em Português
* Monitor: monitor Dell E1912H Widescreen de 18,5 polegadas
* Placa de vídeo: nVidia GeForce 620, 1GB

O monitor do outro PC foi trocado recentemente então não precisava de um novo, mas não consegui tirar (se tirasse, ficava era mais caro...). Também não deu para me livrar do trial de trinta dias do Microsoft Office. Por falar em MS, veio com Windows 7 Professional 64-Bit. O meu sistema principal continua sendo o Linux, mas já que o outro estava lá, resolvi deixar lá para testar algumas coisas, para os raros casos de aplicativos que o Wine não dá conta, e porque é possível rodar leitores de tela no Windows (mais especificamente, o [NVDA][nvdahp]) e no Wine não. A minha intenção era fazer dual boot com o Linux, mas já de cara apareceram alguns problemas...

### Particionando o Disco ###

Para instalar o Linux junto, precisava de uma partição separada para ele. Pensei que seria igual ao do meu netbook, onde o Windows não estava totalmente instalado e ainda ia pedir para
particionar, mas que nada, já estava instalado e ocupava o disco inteiro. Ia ter que reparticionar, e por precaução, resolvi fazer um backup. Tinha 18 gigas de coisas e gastei todos os meus DVDs RW... (onde já se viu? Um sistema recém-instalado, *sem nada*, ocupar 18 gigas! Tinha que ser o Windows...) Na verdade, já tinha três partições, dispostas da seguinte forma:

1. Dell Utility (FAT16), ocupando 40MB): utilitários do Dell.
2. Recovery (NTFS), ocupando 15 GB: partição para recuperação do Windows.
3. OS (NTFS), ocupando o restante do disco: a partição principal do Windows.

Eu precisava de pelo menos duas partições, uma para o Linux e uma swap, ou três se fosse deixar o home numa partição separada (que era o que eu queria). E como já tinha três primárias, o jeito era instalar o Linux numa extendida. Usei o live CD do [Gparted][gpartedhp] para redimensionar a partição principal do Windows e criar uma extendida. Dentro dela, criei uma de 90 GB para o
Linux, uma de 2 GB para swap e o restante ficou para o home. Depois dessa divisão, o Windows iniciou Ok. O próximo passo foi instalar o Linux.

### Instalando o Linux ###

Desde 2009 quando escrevi [este artigo][slackware-a11y], sou usuária da distribuição [Slackware][slackhp]. Instalei a versão mais recente no momento, Slackware 14.0.

As partes de reparticionar o disco, instalar e fazer as primeiras configurações no Slackware tiveram de ser feitas com ajuda visual, porque não vem nenhum leitor de tela instalado (teoricamente, tem o [Speakup][speakuphp], mas só funciona com sintetizadores de voz via hardware, que são caros pra caramba, não tenho, nem sei se tem aqui no Brasil, e só funcionam via portas paralelas, então... Acho que já deu para entender...).

O sistema instalou Ok. Os problemas começaram depois do boot. Ao contrário do meu PC antigo, não foi preciso fazer nada para detectar
a placa de som, mas deu problema com o vídeo. Já dava pau no modo texto mesmo, o vídeo às vezes carregava, às vezes não e apareciam umas linhas coloridas na tela e mais nada, e quando aparecia o que deveria (o texto do console), ficava dando umas "travadas" (ao digitar, o sistema demorava para responder) e a tela dava umas "piscadas". Aos trancos e barrancos (e muitas "rebootadas") deu para instalar o leitor de telas para console (adicionar o suporte a síntese de voz via software para o Speakup  por meio do [Espeak][espeakhp] com o [Espeakup][espeakuphp]), e graças a ele, descobri que às vezes também acontecia da saída do monitor não atualizar. Por exemplo, ao digitar um comando, o sistema respondia, o leitor de telas falava mas na tela não aparecia a resposta.

### Instalando Drivers ###

Só depois lembrei que a placa de vídeo era NVidia e deveria ter drivers proprietários. Pesquisando na net, descobri que antes de instalar o driver, eu precisava desativar o módulo "xf86-video-nouveau", que é incompatível com o driver proprietário. Para isso era só instalar o pacote "xf86-video-nouveau-blacklist", encontrado no diretório "extra" do Slackware, reiniciar o sistema para carregar os módulos certos, depois instalar o driver da NVidia. Baixei o driver do [site da NVidia][nvdl] e instalei. Depois disso, parou de "travar" e o X (interface gráfica) passou a carregar direito, mas o modo texto ficou em "tela preta", literalmente (a tela ficou toda escura e não aparecia nada. Eu só conseguia me virar no modo texto porque tinha o leitor de telas). Pesquisando mais, encontrei umas dicas dizendo que algumas placas NVidia só funcionam direito se o parâmetro "nomodeset" for passado no boot, então fui experimentar. Liguei o computador e esperei alguns segundos para aparecer os sistemas operacionais para escolher, dei um "tab" e caí no prompt do boot. Então eu digitei "Linux nomodeset", dei "enter", esperei o sistema carregar... E funcionou! Então, para tornar a configuração permanente, editei o arquivo "/etc/lilo.conf" para incluir o "nomodeset" na linha do "append=", rodei o lilo, fiz o reboot e pronto, funcionando que é uma beleza.

### Depois de Tudo Isso... ###

Livre dos problemas de vídeo, compilei/instalei o leitor de telas [Orca][orcahp] e suas dependências, fiz mais alguns pequenos ajustes e agora está tudo funcionando perfeitamente, até já estou usando o PC para coisas relacionadas ao trabalho e tudo mais... Bom, quase tudo. A única coisa que não deu para resolver ainda é a voz em Japonês para o Orca (e sem ela não posso atualizar a parte em Japonês do blog...). Antes eu usava o [Voxin][voxinhp] (software proprietário e pago), porém a versão que eu tenho é para 32-bits e a minha máquina é 64-bits. Procurando por uma alternativa,, encontrei uma engine de síntese de voz em Japonês chamada [Open-JTalk][openjtalkhp]. Parece que é possível usar com o Orca por meio do [Festival][festivalhp] mas não consegui testar ainda, porque estou apanhando para compilar o Festival.

E por enquanto, é isso.

[nvdahp]: http://www.nvda-project.org/
[gpartedhp]: http://gparted.sourceforge.net/
[slackware-a11y]: /pt/blog/how-i-started-using-linux
[slackhp]: http://www.slackware.com/
[speakuphp]: http://www.linux-speakup.org/
[espeakhp]: http://espeak.sourceforge.net/
[espeakuphp]: https://github.com/williamh/espeakup
[nvdl]: http://www.nvidia.com.br/Download/index.aspx
[orcahp]: http://live.gnome.org/Orca
[voxinhp]: http://voxin.oralux.net/
[openjtalkhp]: http://open-jtalk.sourceforge.net/
[festivalhp]: http://www.cstr.ed.ac.uk/projects/festival/
