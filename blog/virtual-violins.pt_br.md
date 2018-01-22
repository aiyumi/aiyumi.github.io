.. title: Violinos Virtuais
.. slug: virtual-violins
.. keywords: 
.. description: 
.. tags: Audio, Violin
.. date: 2014-11-02 01:17:48

Várias vezes, já pensei "Ah, talvez essa música ficasse legal se fosse tocada com um som de violino" e quando ia tentar tocar no meu teclado, era uma decepção. Em parte porque eu não toco muito bem mesmo :P, e também porque os sons de violino do teclado são muito ruins. Querendo saber se o problema era exclusivo do meu ou acontece com os teclados em geral, fui pesquisar a quantas anda o estado dos sons de violinos solo "virtuais" disponíveis.

### Bibliotecas de Samples Comerciais

Não sou nenhuma especialista, mas em geral, achei as samples comerciais de violinos solo muito decepcionantes, incluindo os violinos "sampleados" de bibliotecas de sons extremamente caras (de mais de 1000 dólares). Na minha opinião, são tão ruins que chegam a incomodar. Por mais simples que seja a parte tocada, o timbre não é macio, é estranho, como se faltasse um "pedaço" do som. E não é nem a óbvia falta de emoção (também tem isso, mas aí já é outra história), é alguma outra coisa que não sei explicar.

Dentre as demonstrações que ouvi, estão:

- O [EWQL (East West Quantum Leap) Solo Violin][ql-demo].

- O [Garritan Stradivari Solo Violin][garridemo] (descontinuado). Digamos que é até razoável mas mesmo assim ainda é ruim.

- O [violino solo][garrisolo] da biblioteca orquestral [Garritan Personal Orchestra][gpohp]. Ouvi dizer que usa como base samples do Stradivari Violin citado acima, mas é bem mais limitado e é fácil de perceber que a qualidade é bem pior.

- O [violino solo][vslsolo] da biblioteca orquestral [Vienna Symphonic Library Special Edition][vslsp].

- O [violino solo][miroslaviolin] da biblioteca orquestral [Miroslav Philharmonik][miroslavhp] que até que não é ruim, principalmente se considerar que a biblioteca (inclui instrumentos de uma orquestra inteira) nem é tão cara assim (o pacote completo custa menos de 200 dólares)! E eu li que ela inclusive consegue rodar no Linux via Wine.

### Bibliotecas de Samples Grátis

De sons grátis, eu encontrei as [samples de violino da Philharmony.co.uk][ph-violin]. Essas tem diversas articulações, mas estão no formato MP3, o que significa que sofrem de perda de qualidade e provavelmente não dá para usar para nada muito sério. Outra desvantagem é na questão da licença, que diz não ser permitido distribuir (de graça ou não) as samples individualmente ou na forma de "instrumento virtual" (por exemplo, você não pode criar um arquivo SF2 ou SFZ a partir delas e colocar para download). A licença até permite usar as samples em trabalhos comerciais, mas com a perda de qualidade por causa da compressão MP3, quem é que vai fazer isso?

Tem também [essas][iowa-violin1] e [essas (de 2012, que são um pouco melhores)][iowa-violin2] samples da Universidade de Iowa. Também estão no formato AIF, tem várias articulações e, ao contrário das anteriores, é permitido o uso sem restrições. Os problemas são que as notas não estão separadas uma em cada arquivo, e principalmente na primeira versão, várias delas não estão sustentadas uniformemente ou tem o som um pouco "arranhado"...

Por fim, tem [as samples de violino do Ldk1609][ldk-violin]. Para falar a verdade, gostei mais do timbre dessas do que das samples comerciais citadas. Estão em formato AIF, então é possível converter para WAV, criar um arquivo SFZ (um formato aberto de bibliotecas de som) para mapear os arquivos às notas do MIDI e usar, por exemplo, no [LinuxSampler][linuxsamplerhp], e um trabalho de criação de um SFZ aparentemente [está em andamento][ldk-sfz].

E (só para constar) tem a [Sonatina Symphonic Orchestra][sonatina], disponível no formato SFZ. Na verdade, é uma coleção de samples grátis de instrumentos de orquestra. Os violinos solo são os mesmos das opções gratuitas anteriores, mas infelizmente estão afogados em reverb (urgh).

### Embertone Friedlander Violin

Esta é uma biblioteca comercial que eu achei quando não estava procurando. Lendo um tópico pesquisando por alguma coisa que não tinha nada a ver, achei uma menção a essa biblioteca. Não tinha o link para a página oficial, mas resolvi ir atrás e ver se tinha alguma demonstração no Youtube. Encontrei [este vídeo demonstrando os recursos][friedlanderreview] e também [estes][friedlandervid1] [vídeos][friedlandervid2] [oficiais][friedlandervid3]. Eu me encantei com o som logo de cara, e pensei "Um instrumento bom assim deve custar milhares de dólares!" " O Google me trouxe a [página oficial][friedlanderhp] e fiquei babando com as demos... E o preço... Menos de 150 dólares...! Eu queria. O que me segurou para não comprar foi o fato de ser um instrumento para Kontakt (também compatível com a versão gratuita do programa, o Kontakt Player). O problema é que pesquisei sobre rodar o Kontakt 5 no Linux e não achei nada.

Cerca de um ano depois, já em meados de 2014, apareceu um [tópico na lista de discussão Linux-Audio-User][laustrings] sobre recomendações de sons de orquestra no linux, onde um dos membros disse que usava instrumentos do Kontakt no Linux via Wine. Então eu pedi mais informações e resolvi tentar. Bem nessa época apareceu uma [atualização][friedlander15vid] e uma promoção da biblioteca de violino, aí eu decidi que era a hora e comprei!

Logo de cara apareceu um obstáculo. O download do programa precisava ser feito a partir de um gerenciador de downloads proprietário chamado Continuata Connect, onde coloca-se o código serial recebido ao comprar o produto e o software busca os arquivos a partir desse código (os links diretos não aparecem para poder baixar via navegador, Wget, Curl, ...). Tentei rodar o Continuata pelo Wine. Só abriu em modo Windows XP. Se colocasse "Windows 7", nem abria e dizia que o programa encontrou um erro grave e não podia executar. Com o Wine disfarçado de XP, o programa abriu... Mas não funcionou direito. O download sempre enroscava no meio, as partes do arquivo corrompiam e eram apagadas, depois começava tudo de novo. No final, acabei instalando o tal do Continuata na minha partição do Windows só para baixar o software, e no Windows funcionou normal (milagre :P). Logo em seguida, movi os arquivos baixados para a partição do Linux. Não sei o que causa esse problema no Wine, mas depois de pesquisar um pouco, descobri que outras empresas desenvolvedoras de instrumentos virtuais fornecem os links diretos, para os usuários que tiverem problemas com o Continuata, ou que não consigam baixar por algum outro motivo. Não sei se a Embertone também faz isso. Como já tinha baixado tudo, não perguntei, mas pode valer a pena perguntar.

O Kontakt Player instalou no Wine numa boa. Tive alguns problemas na hora de configurar, mas eram relacionados aos meus leitores de tela (programas que falam todo o texto na tela, usados principalmente por deficientes visuais) tomando posse do ALSA e da placa de som. Pessoas com configurações padrão (ou seja, praticamente todo o mundo) provavelmente não vão ter esses problemas (mas se quiser mais detalhes, todo o enrosco pode ser [lido neste tópico na Linux-Audio-User][lauthread]).

O instrumento é feito para o Kontakt Player"Powered by Kontakt Player" , e precisa ser adicionado pelo botão "add library". Este botão também está presente na interface VST do Kontakt, mas não funciona (pede para escolher o diretório onde estão os arquivos da biblioteca, mas dá o erro "No library found". Eu não sei se isso é problema com o Wine ou se também acontece no Windows). Para adicionar e ativar a biblioteca, só mesmo pela interface standalone do Kontakt (o processo precisa ser realizado apenas uma vez). Após devidamente adicionada e ativada, a biblioteca também fica disponível e funciona normalmente pela interface VST. Eu consigo usá-la com o dssi-VST e gravar a saída de som com o Ecasound sem problemas.

### Conclusão

No começo, fiquei com medo de comprar o Friedlander Violin e depois não conseguir fazer funcionar. Se não desse, o último recurso seria usá-lo no Windows assim como estou fazendo com o VOCALOID. Felizmente tudo deu certo e consigo usá-lo no Linux, que é meu ambiente preferido. Como sempre, tem um porém. O Kontakt não é nem um pouco acessível (nada compatível com leitores de tela), nem no Windows! Ou seja, de qualquer forma, eu preciso de ajuda de alguém que enxerga para usá-lo. Mesmo assim, para mim, valeu a pena. O som é tão bom quanto achei que seria, e minha busca por um violino virtual decente finalmente chegou ao fim! Se eu quiser mais do que isso, só me resta aprender a tocar o instrumento de verdade... Mas essa é uma outra história...

Aproveitando, a Embertone acabou de lançar uma biblioteca gratuita para Kontakt Player, que entre outras coisas, inclui uma demo do Friedlander Violin! Ficará disponível por tempo limitado (não sei até quando), mas para quem quiser testar esse violino virtual, essa é a chance! Eu já baixei, para conferir as outras coisas que vêm junto, e dessa vez, o download é por link direto. Aqui está o [link para a newsletter com o anúncio do lançamento][arcanenews] e a [página do produto][arcanehp]. Boa sorte!


[ql-demo]: http://www.soundsonline.com/QL-Solo-Violin
[garridemo]: http://www.youtube.com/watch?v=A4K3T_mPjh8
[gpohp]: http://www.garritan.com/products/personal-orchestra-4/
[garrisolo]: https://soundcloud.com/dcuny/gpo-solo-violin-test
[miroslaviolin]: https://soundcloud.com/dcuny/violin-test
[vslsolo]: https://soundcloud.com/alucinari/update-to-bach-sonata-vsl
[vslsp]: http://www.vsl.co.at/en/211/261/2064/2067/1751.htm
[miroslavhp]: http://www.ikmultimedia.com/products/philharmonik/
[ldk-violin]: http://www.freesound.org/people/ldk1609/packs/
[ldk-sfz]: http://www.linuxmusicians.com/viewtopic.php?f=50&t=12530
[linuxsamplerhp]: http://www.linuxsampler.org/
[ph-violin]: http://slib.soundex.co.uk/index.php?instrument=violin
[iowa-violin1]: http://theremin.music.uiowa.edu/MISviolin.html
[iowa-violin2]: http://theremin.music.uiowa.edu/MISviolin2012.html
[sonatina]: http://sso.mattiaswestlund.net/
[friedlanderhp]: http://embertone.com/instruments/friedlanderviolin.php
[friedlandervid1]: http://www.youtube.com/watch?v=7akUpXOHZoQ
[friedlandervid2]: http://www.youtube.com/watch?v=ats-RNfU8Yc
[friedlandervid3]: http://www.youtube.com/watch?v=GVkvo9wK-_M
[friedlanderreview]: http://www.youtube.com/watch?v=KisOROAI0oc
[friedlander15vid]: http://www.youtube.com/watch?v=W5JRW3Oyy3k&list=UUOP3cfW8rXbZ7vor2XUhj-w
[laustrings]: http://linux-audio.4202.n7.nabble.com/Recommended-near-realistic-strings-section-generator-td91020.html
[lauthread]: http://linux-audio.4202.n7.nabble.com/Embertone-Friedlander-Violin-on-Linux-was-Re-Recommended-near-realistic-strings-section-generator-td91163.html
[arcanenews]: http://us5.campaign-archive1.com/?u=48596a6a37a057934093cef98&id=efa70f3075&e=3e9c6b1b30
[arcanehp]: http://www.embertone.com/instruments/arcane.php
