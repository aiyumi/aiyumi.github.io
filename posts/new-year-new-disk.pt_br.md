.. title: Ano Novo, Disco Novo
.. slug: new-year-new-disk
.. tags: Site Updates
.. date: 2018-01-22 17:00:38

2018 chegou, e eu já comecei o ano com... uma falha no HD do meu computador principal. Na manhã do dia 4 de janeiro, eu tinha acabado de começar meu trabalho (estou trabalhando em casa) quando, de repente, sem nenhum sintoma ou aviso prévio, o computador começou a emitir cliques, tudo travou, a máquina parou de responder e a única maneira de desligar foi segurando o botão power por alguns segundos. Quando eu liguei de novo, recebi uma mensagem de falha no disco rígido. Usei uma live USB de Linux pra tentar ver o que estava acontecendo, e tudo funcionou bem, exceto o HD. O disco nem sequer foi reconhecido e continuou a emitir cliques. A conclusão foi que o HD morreu de vez.

## Avaliando as Perdas

Eu geralmente faço um backup uma vez toda semana. Ênfase em "geralmente". Ironicamente, na semana anterior eu não tinha feito, e por isso, perdi duas semanas de alterações (a semana anterior + a semana em que o HD pifou). Felizmente não perdi o progresso na maioria dos meus scripts relacionados a trabalho porque eu os tinha enviado para os servidores do escritório. Mas perdi um capítulo inteiro de uma das fan fictions que estou escrevendo, que tinha levado meu tempo livre dessas duas últimas semanas pra escrever, e ainda estou tentando recuperar a motivação pra escrever tudo de novo. Também perdi a partição do Windows, que na verdade nunca me ocorreu em fazer backup porque eu pensava que não tinha nada importante lá... até que, depois de perder o HD, lembrei que todos os meus arquivos de projetos de VOCALOID e UTAU estavam lá, incluindo as USTs do cover de "[Wake Up, Get Up, Get Out There](/pt/blog/p5-op-utau-cover)" que levou um mês pra eu conseguir terminar. Eu tinha copiado os arquivos de áudio gerados pra partição do Linux, mas as USTs não... :(

## Escolhendo um Disco Novo

Depois de muito pensar, decidi ir de SSD em vez de outro HD. SSD ("Solid State Drive") é um tipo diferente de disco em que a memória fica num chip (como as memórias de cartão SD ou de pendrive), o acesso aos dados é direto no chip e o disco não precisa ficar girando igual ao HD, então é bem mais rápido (tinha ouvido dizer que a máquina liga e o sistema operacional inicia em questão de segundos, e programas pesados abrem rapidinho). Mais durável, silencioso e gasta menos energia elétrica do que HDs. Dizem que depois de conhecer um SSD, é difícil querer voltar ao HD antigo. Já fazia alguns meses que eu estava curiosa pra saber como era, e resolvi fazer do limão uma limonada e aproveitar esta "oportunidade" pra experimentar. O problema é que é uma tecnologia meio cara ainda, e paguei R$ 375 num SSD que só tem 240GB, sendo que por esse preço eu poderia ter comprado um HD normal de 1TB... mas tudo bem. Pode parecer pouco espaço, mas meu HD antigo era de 1TB e nunca chegou perto de encher (o máximo que chegou foi usar uns 30GB da partição com o Slackware Linux, 70GB da partição separada do home e 50GB da partição do Windows, totalizando cerca de 150GB), então acredito que 240GB seja espaço suficiente.

Encomendei um SSD da Western Digital (WD Green 240GB) pelo Mercado Livre. Comprei na quinta à noite, foi enviado na sexta de manhã e chegou na segunda (acho que de fim de semana os correios não entregam). Enquanto esperava chegar, eu tive de trabalhar usando o netbook (máquina não muito potente onde cada página no Firefox demora uns 20 segundos pra carregar e o Orca demora outros tantos pra começar a ler), e também foi onde eu baixei as ISOs do Linux pra instalar quando o SSD chegasse. Baixei, conectei um gravador de DVD externo ao netbook, gravei num DVD RW e pronto. Preparar as ISOs de Linux foi fácil fácil. Por outro lado...

## Tentando Baixar o Windows

Meu sistema operacional principal é o Linux. Os programas de Windows que às vezes eu usava (principalmente VOCALOID e UTAU) rodam no Wine, mas o problema é que o Wine não é acessível para deficientes visuais porque não implementa as interfaces de acessibilidade e nenhum leitor de tela funciona nele. Mas já que o Windows 7 veio com a máquina e eu tenho a licença, então resolvi usar. Eu tinha feito um backup do Windows [logo que comprei o computador](/pt/blog/adventures-with-a-new-computer) e tinha gasto todos os meus DVDs RW, e mais dois DVDs R porque não tinha RWs suficientes. Mas aquele era um backup do Windows recém-instalado, sem atualizações de segurança nem nada, e pior, só poderia ser restaurado de dentro do Windows! Conclusão: não serviria para nada. O jeito seria reinstalar tudo do zero mesmo. O problema é que a Dell não manda as mídias de instalação do Windows, e o instalador fica (adivinha onde...) numa partição do HD! Claro, o HD pifou, então o instalador foi junto.

Existe uma [página da Microsoft onde deveria ser possível baixar o instalador][mswin7dl]. Teoricamente, só precisa informar o código de série, que eu tenho. E eu informei. Aí, "pã!" deu erro dizendo que esse código não serve porque é versão do sistema que é disponibilizado pelo fabricante do computador, e que era pra eu entrar em contato com o fabricante (no meu caso, a Dell) pra obter a imagem customizada (a versão que vem com utilitários da Dell que nunca consegui desinstalar e mais um monte de porcaria que só consome recursos e espaço em disco).

Na página da Dell, tem que informar o código de uma "etiqueta de serviço" ("service tag") que está colada no gabinete do computador, pra aparecer conteúdo e downloads relacionados ao produto que eu adquiri deles (o computador). Informei o tal código, mas na parte de downloads pro modelo da minha máquina só tem drivers e mais nada. Navegando pelos tópicos de ajuda, descobri que tem três formas de conseguir uma mídia de instalação:

1. A forma que eles recomendam é usar um programa pra gerar e baixar uma imagem customizada. Claro que o programa só funciona no Windows (então não adianta porque estou sem Windows. Não faço ideia se funcionaria no Wine). Queria saber se tinha outro jeito e, depois de muito procurar, encontrei a forma 2 abaixo.

2. Tem uma [página pra baixar a mídia de instalação do Windows][dellwindl], pra quem precisa baixar a imagem a partir de uma máquina sem Windows (meu caso! Opa!)... mas quando informei a etiqueta de serviço, disse que não tem nada disponível pro modelo da minha máquina.

3. A outra forma de conseguir é entrar em contato com o suporte e solicitar uma mídia física, e se o computador não estiver na garantia (não está mais), tem que pagar uns 60 Dólares! Eu hein?! Tô fora...

Numa última tentativa, encontrei um [post no blog de alguém que estava com um problema parecido][blogpost], onde fiquei sabendo de uma [gambiarra][gambiwin] pra baixar o Windows 7 diretamente dos servidores da Microsoft sem informar o código serial. Basicamente é uma página pra baixar o Windows 10 (que não precisa informar código serial pra chegar no link do download), e se trocar um parâmetro na URL que corresponde ao produto Windows 10 pelo que corresponde ao Windows 7, daria pra baixar. É baseada na API que os fabricantes usam pra baixar as mídias de instalação dos Windows, e aí descobriram os IDs de todas as ISOs possíveis. Tentei. E... "pã!" não funcionou! Tentei com o ID do Windows 10 e funcionou\*, mas com o ID do Windows 7 não! Aparentemente, não está funcionando para Windows 7 e o Office. Parece que a gambiarra ou não funciona mais, ou está com problema temporário na API.

\* Veio um link de download do Windows 10, mas não adianta porque não tenho o código serial pra ativá-lo se eu instalá-lo. Nem sei se o Windows 10 conseguiria rodar nesta máquina...

Nossa... como software proprietário é enrolado! Por hora, desisti. Se a gambiarra voltar a funcionar, quem sabe eu tente de novo. Por enquanto, acho que vou ter que recorrer ao Wine e ajuda visual mesmo, fazer o quê...

## Instalando o SSD


Na segunda-feira, 8 de janeiro, o SSD chegou. Eu sabia que era menor do que um HD de PC desktop, mas não esperava que fosse tão pequeno e fino... é tão fino quanto uma caixa de CD, e parece um memory card glorificado (e deve ser mesmo :P ).

Minha mãe e eu abrimos a máquina e trocamos o HD pelo SSD. Ao contrário dos HDs tradicionais que têm tamanhos diferentes (3,5 polegadas pra PCs desktop e 2,5 polegadas pra notebooks), aparentemente só existe um tamanho de SSD, que é 2,5 polegadas. Então, ideal pra notebooks, mas um pouco pequeno pra desktops (felizmente, as conexões SATA são iguais). Plugamos o cabo SATA e prendemos o SSD ao gabinete com um parafuso como deveria ser feito, mas não ficou tão firme quanto gostaríamos. Idealmente, eu deveria ter comprado um adaptador de 2,5" para 3,5" pra encaixar o SSD mais facilmente, mas o vendedor de quem comprei o SSD não tinha, fora que eu estava com pressa porque precisava da minha máquina funcionando logo pra trabalhar.

Algumas pessoas simplesmente conectam o SSD e o deixam pendurado pelos cabos SATA dentro da máquina sem muita preocupação, já que os SSDs não possuem partes móveis como os HDs e tem menos riscos de corromper os dados com impactos. Mas ficamos um pouco preocupadas. Incomodava deixar o SSD solto dentro da máquina. Então, nós cortamos um cabo USB antigo e nunca usado que tínhamos sobrando, amarramos nas "paredes" do compartimento dentro do gabinete, pra agir como uma "rede" pra ajudar a manter o SSD no lugar e impedi-lo de cair. Ficou feio por dentro, mas funciona! :P Mas ainda estou pensando se devo comprar um daqueles adaptadores pra solução ficar menos "gambiarrosa"...

## Particionando o disco

A primeira coisa que fiz quando liguei a máquina foi inserir o DVD do instalador (falante) do Slint (Linux) e verificar o disco com o Fdisk. O sistema reconheceu o SSD normalmente e o tamanho foi reportado como 223GiB, o que se traduz nos 240GB anunciados. Então eu particionei o disco e fiquei com, aproximadamente:

* 84GB para o Windows, caso eu consiga reinstalá-lo nesta máquina algum dia. Caso contrário, vou usar o espaço precioso para outra coisa.
* 84GB para a partição home, para ser usada por dois Linuxes.
* 4GB para swap. Não me lembro de esta máquina ter recorrido a swap alguma vez, mas sabe-se lá quando a necessidade pode aparecer...
* 34GB para o meu sistema principal, o Linux. Em vez de instalar o Slackware, desta vez eu decidi ir de [Slint][slinthp], uma distro baseada no Slackware com acessibilidade por padrão e inclusive instalador falante, mas que no fundo não deixa de ser um Slackware.
* E os últimos 34GB para o outro Linux. Eu escolhi o Arch Linux principalmente porque também tem instalador falante (na forma da ISO [Talking Arch][tarchhp]), e porque descobri que nele dá pra rodar o Warsaw, um software chato de internet banking (proprietário, de código fechado e difícil de solucionar - ou até mesmo identificar - problemas) que muitos dos bancos brasileiros decidiram adotar (não consegui fazer funcionar no Slackware de jeito nenhum, e a falta de acesso ao internet banking já estava se tornando um grande problema. Mas o tal software funcionou bem na instalação teste do Arch Linux que eu tinha no meu netbook, então...).

Eu instalei o Slint à noite, e no dia seguinte já consegui usar a máquina pra trabalhar. Naquele fim de semana, instalei o Arch Linux e o software de internet banking na outra partição. Depois disso, venho ajustando as configurações e instalando coisas extras à medida que as necessidades vão surgindo, tanto no Slint quanto no Arch, e os moldando ao meu jeito aos poucos.

E é esta a situação no momento em que escrevo. As coisas estão voltando ao normal, melhores e mais rápidas graças ao SSD. A máquina responde mais rápido do que antes e parece até que é nova! Foi um susto e tanto quando o HD quebrou, mas parece que as coisas mudaram pra melhor! No fim das contas, talvez dê pra dizer que comecei o ano bem...

Não que eu não tenha encontrado nenhum problema enquanto tentava deixar as duas distros Linux do meu jeito, no entanto. Tive alguns probleminhas (principalmente com o Arch, e mais porque não estou muito familiarizada com ele), apesar de já ter conseguido resolver a maioria deles. Mas isso é assunto para outro post.

No próximo post, pretendo falar sobre o Slint, a distro baseada no Slackware, multi-idiomas, com acessibilidade por padrão e com instalador falante!


[mswin7dl]:   https://www.microsoft.com/software-download/windows7
[dellwindl]: http://www.dell.com/support/home/drivers/osiso/win
[blogpost]: http://marcelosaldanha.com.br/2016/03/reinstalando-windows-sem-midia/
[gambiwin]: https://techjourney.net/official-windows-10-8-1-7-iso-installation-media-download-links-microsoft-tech-bench/
[slinthp]: http://slint.fr/wiki/en/start
[tarchhp]: https://talkingarch.tk/
