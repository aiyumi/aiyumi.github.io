.. title: Acessibilidade, e Como eu Comecei a Usar VOCALOID
.. slug: accessibility-and-how-i-began-using-vocaloid
.. keywords: acessibilidade, cego, comprar vocaloid, comprando vocaloid, deficiente visual, ini, síntese de canto, utau, ust, vocaloid, vsqx, wine
.. description: As dificuldades de uma pessoa cega tentando usar software de síntese de canto.
.. tags: Audio, VOCALOID
.. date: 2014-05-02 10:12:25

### O Que é Vocaloid? ###

É algo que está fazendo bastante sucesso já há alguns anos, mas até 2011 eu não fazia a mínima ideia do que era. Só sabia que tinha a ver com música, e por um tempo achei que fosse o nome de uma banda (hahahaha)! Mas não. VOCALOID é um software de síntese de canto, proprietário e pago, cuja engine é desenvolvida pela Yamaha. As vozes são fornecidas por pessoas reais, sendo a maioria atores ou cantores. Cada voz é representada por um personagem. A mais popular é a Hatsune Miku (não gosto muito dela) mas existem vários outros. VOCALOID tem versões para Windows e Mac.

Para informações detalhadas sobre todos os bancos de voz de VOCALOID disponíveis, visite a [VocaloidBrasil][vbhp] (o site mais completo em Português, que aliás, explica tudo isso muito melhor do que eu :P), e/ou a [VOCALOID Wiki][vocaloidwikihp] (em Inglês).

Exemplos de músicas com VOCALOID:

* ["Packaged", com o banco de voz Hatsune Miku][mikupackaged]
* [Natsu no Umi ("夏の海"), com os bancos de voz Kagamine Len e Kagamine Rin][kagaminedemo]
* ["Cendrillon", com os bancos de voz VY2 e VY1][vycendrillon]
* ["Aitai" ("会いたい"), com o banco de voz Megpoid/Gumi][gumiaitai]
* ["Greensleeves", com o banco de voz Avanna (Inglês)][avannags]
* [Cover de "Roda Viva", com o banco de voz Galaco (forçado a cantar em Português!)][galacorodaviva]

### UTAU ###

UTAU (que significa "cantar" em Japonês) é o nome de outro programa para síntese de canto, só que foi desenvolvido por um fã, também proprietário porém gratuito (tecnicamente é shareware, mas umas das poucas "vantagens" de se pagar são algumas melhorias na interface e talvez ter acesso a versões de teste antes do "público geral", mas funciona gratuitamente sem problema). As vozes também são fornecidas por pessoas reais, com a diferença de que qualquer um pode gravar sua própria voz e colocar no programa, sem depender de contratos, estúdios e cantores profissionais. Por isso tem bem mais bancos de voz disponíveis do que VOCALOID, mas a desvantagem é que a qualidade varia muito, dependendo da qualidade da gravação, configuração, intonação e pronúncia da pessoa que fez. UTAU têm versão para Windows e também uma para Mac, chamada UTAU Synth.

Exemplos de músicas com UTAU:

* ["Kenka Wakare" ("けんか別れ"), com o banco de voz Momone Momo][momokenkawakare]
* ["Error," com o banco de voz Namine Ritsu Kire][ritsuerror]
* [Cover de "Yuudachi no Ribon" ("夕立のりぼん"), com o banco de voz Sukone Tei][teiribon]



Para saber mais sobre UTAU, tem a [seção de UTAU da VocaloidBrasil][vbutau] e a [UTAU Wiki][utauwikihp] (em Inglês).

Não demorou para eu ter vontade de usar os programas e criar meus próprios covers, e foi aí que os problemas começaram. <!--more-->

### Minha Primeira Tentativa: UTAU ###

Obviamente, resolvi começar pela opção gratuita. Descobri que a versão para Windows do UTAU funciona bem no Wine. Tem esse [tutorial em Inglês][utauonwine] mostrando como instalar e, surpreendentemente, é bem mais fácil instalar no Wine do que no Windows! O problema é que o Wine em si não é acessível (programas leitores de tela não funcionam nele), mas o interessante é que os arquivos de projeto do UTAU (".ust") nada mais são do que arquivos de texto (na verdade têm a estrutura de ".ini"), então pensei que pudesse contornar essas limitações e criar as músicas editando o texto diretamente, mas não consegui ir muito fundo porque tem um monte de parâmetros que não sei o que fazem e quais os valores mínimos e máximos, e não achei documentação das especificações do formato UST em nenhum lugar. Então, teria que mexer pela interface mesmo (quem sabe, pelo menos para tentar descobrir o que os parâmetros fazem...). Pensei que conseguiria algo se eu memorizasse os atalhos de teclado ou quantas vezes é preciso apertar "Tab" para chegar a uma determinada opção... E aí é que estava o meu engano. Fora os que são praticamente padrão para todos os programas, como "Control" + "z" para desfazer, "Control" + "a" para selecionar tudo, "Control" + "c" para copiar, "Control" + "v" para colar etc., o UTAU não tem atalhos de teclado. Tem no máximo as teclas para acessar algumas opções da barra de menus... E só. É preciso usar o mouse para fazer praticamente tudo, inclusive selecionar notas (quando não se quer "selecionar tudo"). Seria muito bom se pelo menos desse para selecionar as notas com "Shift" + seta para esquerda/direita como se faz para estender a seleção no Audacity, por exemplo. Por esse motivo, não é acessível nem no Wine, e nem no Windows. Mesmo que um leitor de telas do Windows leia tudo que possa ser lido, não é possível fazer praticamente nada graças à falta de atalhos de teclado e a pesada dependência do mouse.

### Minha Segunda Tentativa: as Alternativas Open Source ###

Existem alguns projetos de software livre e código aberto tentando criar programas compatíveis com UTAU e que rodem em vários sistemas operacionais, como o [Lauloid][lauloidhp], o [Cadencii][cadenciihp] e o [QTau][qtauhp].

No momento em que escrevo este artigo, o Lauloid tem uma interface de linha de comando chamada "Ustsh", um shell básico para criar um arquivo ".ust", mas por enquanto só é possível inserir/editar/remover notas, a letra a ser cantada e a duração. Ainda não tem suporte a vibrato, pitch bends e aqueles parâmetros que eu não sei como editar manualmente, e não suporta VCV (um dos métodos mais complexos de conectar as sílabas no UTAU, que produz resultados mais realistas), somente suporta CV (o método mais simples e mais fácil de fazer, mas que produz resultados mais robóticos). Também tem utilitários em linha de comando para converter MIDIs para UST ("midiust") e UST para MIDI ("ustmidi"), mas também só fazem o básico, só convertem as notas com suas respectivas durações e letras, mas não convertem expressão, vibrato ou pitchbends, e travam se houver notas sobrepostas. Tem também uma engine de sintetizador via linha de comando capaz de usar bancos de voz do UTAU, mas também é bem básica e só suporta CV.

O outro programa, o Cadencii, tem uma interface gráfica parecida com VOCALOID, e com ele é possível fazer com que VOCALOIDs (somente VOCALOID2) e UTAUs possam cantar juntos no mesmo projeto. Ele é para Windows (supostamente roda no Wine em outros sistemas) e pode ser baixado [aqui][cadenciidl]. Mas para minha tristeza, também não é nada acessível ao leitor de telas e não consegui tirar um único som dele.

O QTau parece interessante mas não deu para eu testar porque não consegui compilar o QT5 aqui na minha máquina. Mas ao que tudo indica, também está nos estágios iniciais.

Fora o Cadencii que já é funcional (apesar de ter vários bugs), esses softwares provavelmente ainda vão demorar alguns anos para se tornarem minimamente usáveis. Se eu tivesse os conhecimentos necessários, eu ajudaria a melhorar esses programas (até entrei em contato com o autor do Lauloid e tentei dar uma ajudinha, mas não saiu muita coisa). No fim, a conclusão é que infelizmente não dá para depender dessas alternativas livres ainda.

### VOCALOID ###

Foi a única solução que sobrou. Pedindo ajuda no [fórum da VocaloidBrasil][vba11ypost], fui aconselhada a testar alguns trials para ver se eram acessíveis. Como o VOCALOID3 tem várias melhorias em relação ao seu antecessor (VOCALOID2), era melhor eu testar o VOCALOID3. Porém, o único trial do V3 disponível era o da Mayu, mas aparentemente eles bloqueiam acessos de fora do Japão e não consegui baixar. Bem nessa época, foi lançada a demo da MEIKO V3, e essa eu consegui baixar. Aproveitando que ainda tenho uma partição do Windows aqui, instalei o trial nela. Se é acessível? Longe de 100%. Mas melhor do que o UTAU, com certeza! E bem mais fácil fazer um VOCALOID cantar do que um UTAU. No pouco tempo que tive para testar a demo, não consegui fazer nada apresentável, mas foi o suficiente para eu concluir que conseguiria usar razoavelmente, e decidir comprar um!

Eu queria um VOCALOID japonês. Resolvi comprar um em versão download, para não precisar me preocupar com fretes e contratar serviços de redirecionamento de envios internacionais (porque as versões físicas em CD/DVD de VOCALOIDs japoneses não são enviadas para fora do Japão). E aí veio outro problema. O banco de voz que eu queria (Megpoid/Gumi Power) só tinha nas lojas japonesas. Então resolvi fazer a coisa mais óbvia, que era comprar do site oficial. Só que o site é muito bugado (valida muito mal os formulários) e não me deixou comprar. Chegou a cobrar o cartão de crédito mas deu erro logo no final (apareceu uma página com encoding zoado que nem dava pra ler a mensagem - eu até converti o texto pra um monte de encodings e não saiu nada legível!), sorte que a operação foi cancelada e desapareceu da fatura então não aconteceu nada, mas me deu um grande susto e muita dor de cabeça. Quase desisti. Mas certo dia, criei coragem de novo e fiz o que deveria ter feito desde o começo: em vez de comprar do site oficial, comprei da [VOCALOID Store japonesa][vocaloidstorejp] que, ao contrário da versão em Inglês da mesma loja, tem quase todos os bancos de voz disponíveis (para outros países, eles só enviam se for via download, que aliás era o que eu queria). Site muito melhor (a começar pela validação dos formulários). Aqui vão algumas pequenas dicas para quem também resolver comprar lá:

O único enrosco do cadastro é que o seu nome precisa ser em letras japonesas (tem um campo que pede Kanji mas pode ser Katakana, e o outro precisa ser Hiragana) então tem que dar um jeito de "japonesar" o seu nome :P (se colocar caracteres do tipo errado ele reclama, ao contrário da SSW que deixava passar tudo de qualquer jeito). E uma coisa pra prestar atenção na hora da compra é que precisa lembrar de apertar o botão de "voltar para a loja" na última tela. Aparece uma mensagem dizendo que a compra foi concluída, mas na verdade não foi. A operação só conclui depois que o tal do botão for apertado, então não feche a janela antes de fazer isso! (suponho que na loja em Inglês também seja assim, já que os sites são bem parecidos).

Comprei a Megpoid/Gumi Power e o VY2 (os meus favoritos), assim já fico com um vocal feminino e um masculino para usar. Os links para download chegaram logo depois de finalizar a compra (ironicamente,o link para baixar a Gumi vem justamente lá daquele site oficial bugado :P).

Instalei o VOCALOID na minha partição do Windows, aí veio a ativação das licenças de uso. Essa parte correu tudo bem, mas fui lembrada de que se mudar alguma coisa no hardware da máquina tem que ativar de novo, e se ativar por três vezes e mudar alguma outra coisa depois (ou formatar, sabe como é o mundo Windows :P), precisa entrar em contato com o suporte deles. Eu tinha me esquecido de como o mundo desses softwares proprietários é complicado. Estou acostumada a instalar as coisas no Linux e já sair usando...

Já faz dois meses que comprei e só agora acho que estou começando a pegar o jeito. Como já disse, não é 100% acessível. Tem muita coisa que não dá pra mudar sem mouse. Algumas eu consegui editar abrindo o arquivo (a extensão é ".vsqx" e é um XML) num editor de texto normal. Preciso entender melhor os parâmetros e qual a faixa de valores para ver se consigo fazer edições mais complicadas (por exemplo, tem umas "curvas" que se desenha com mouse pela interface gráfica que obviamente não tenho como fazer). Provavelmente vou tentar criar alguns scripts em Perl para me ajudar a editar o XML.

Atualmente estou na metade do meu primeiro cover. Quando terminar, postarei aqui.

[vbhp]: http://www.vocaloidbrasil.com/
[vocaloidwikihp]: http://vocaloid.wikia.com/
[mikupackaged]: http://www.youtube.com/watch?v=f5kUd72R_tg
[kagaminedemo]: http://www.youtube.com/watch?v=r0PmG_zQjy4
[gumiaitai]: http://www.youtube.com/watch?v=mL0n9zt7IdI
[avannags]: https://www.youtube.com/watch?v=w03Ld2T5MaU
[vycendrillon]: http://www.youtube.com/watch?v=e56Gk1Z1US0
[galacorodaviva]: http://www.youtube.com/watch?v=JdyO_vGX8KU
[momokenkawakare]: http://www.youtube.com/watch?v=SPOfe-TA3YI
[ritsuerror]: http://www.youtube.com/watch?v=wP1uQNueWXA
[teiribon]: https://www.youtube.com/watch?v=bRFuuxl3u3E
[vbutau]: http://www.vocaloidbrasil.com/utau/sobre-utau/
[utauwikihp]: http://utau.wikia.com/
[utauonwine]: http://utauarianna.altervista.org/tutorials/utau-on-linux-wine-how-to/
[lauloidhp]: http://gitorious.org/lauloid
[qtauhp]: https://github.com/qtau-devgroup/
[cadenciihp]: http://www23.atwiki.jp/cadencii_en/
[cadenciidl]: http://en.sourceforge.jp/projects/cadencii/releases/
[vba11ypost]: http://w11.zetaboards.com/vocaloidbrasil/topic/9096518/
[vocaloidstorejp]: http://shop.vocaloidstore.com/