.. title: Acessibilidade: Primeiros Resultados com VOCALOID
.. slug: accessibility-first-results-with-vocaloid
.. keywords: acessibilidade, atalhos de teclado, cego, deficiente visual, vocaloid
.. description: Algumas dicas sobre VOCALOID para usuários deficientes visuais.
.. tags: Audio, VOCALOID
.. date: 2014-06-21 22:47:52

Esta é uma continuação do meu outro post, "[Acessibilidade, e Como eu Comecei a Usar VOCALOID][vocaloid-a11y1]". Neste artigo pretendo compartilhar meu progresso e algumas dicas, para outros deficientes visuais que eventualmente resolvam usar VOCALOID. <!--more-->

Nota: estou usando o VOCALOID3 no Windows 7, com o [leitor de telas NVDA][nvdahp] que é livre e de código aberto.

### Os Editores

Existem duas "versões" do editor do VOCALOID. O Tiny Editor, que (como o nome já diz) é "pequeno" e com poucos recursos. É o editor básico que acompanha todos os bancos de voz do VOCALOID3, servindo como demonstração do editor "de verdade" (e quebra o galho pra quem não é muito exigente e não pode / não quer comprar o outro :P). E o outro é o editor completo, vendido separadamente, e com muitas outras funções, a maioria relacionadas a recursos visuais e que envolvem o mouse :P e, portanto, praticamente inúteis para quem não enxerga e não pode usar mouse. A exceção é a possibilidade de (re)definir atalhos de teclado, que pode ser interessante se realmente precisar de atalhos que não existam no editor básico (até agora consegui passar sem). Tirando isso, eu concluí que não conseguiria aproveitar muita coisa dele, então por enquanto resolvi ficar com o Tiny Editor mesmo.

### Atalhos de Teclado

Falando em atalhos de teclado, aqui vai a lista dos que eu encontrei:

- Play/pause: Espaço ou Enter do teclado numérico.
- Voltar: "-" ("menos") do teclado numérico. Volta um compasso se apertar uma vez, volta bastante se segurar.
- Avançar: "+" ("mais") do teclado numérico. Avança um compasso se apertar uma vez, avança bastante se segurar.
- Ir para o início da música: "Control" + "Home".
- Ir para o fim da música: "Control" + "End".
- Ir para marcador: "." ("ponto") (mas não sei se tem como setar esse marcador sem usar o mouse). Vai para o início da música se não houver marcador definido.
- Ir para o modo de editar a letra da nota: "F2". Depois, com "Tab" cai na caixa de texto da próxima nota e "Shift" + "Tab" cai na anterior. "Alt" + seta para cima e para baixo alterna entre edição de letras e fonemas. Apertando "Enter" ou "Esc", sai do modo de editar texto e dá para mudar de notas usando seta para esquerda e direita, e selecionar notas com "Shift" + esquerda/direita.
- Setar a posição de canto para a nota sob o cursor: "Control" + "g" (fora da edição de texto).
- Transpor notas em meio tom: fora da edição de texto, com o cursor em uma ou mais notas selecionadas, seta para cima aumenta meio tom, seta para baixo diminui.
- Transpor notas em uma oitava: fora da edição de texto, com o cursor em uma ou mais notas selecionadas, "Shift" + seta para cima coloca a nota uma oitava acima, seta para baixo coloca uma oitava abaixo.
- Alternar entre o Musical Editor e o Track Editor: "Control" + "Tab".

### Dica - Janelas de Exp/Vibrato

Esta dica é específica para quem usa o leitor de telas NVDA (não sei como é em outros leitores mas deve ser algo parecido). Pela barra de menus, entrando em "Lyrics" -> "Note Properties" (ou "Alt" + "l" e depois "p"), aparece a janela de exp e vibrato. Nessa janela não tem nenhum atalho, só tem as caixas de texto das letras e fonemas, uma caixa de marcação escrito "PROTECT" e os botões "OK" e "Cancel". Então, da caixa do "PROTECT", aperte a "tecla modificadora do NVDA" + "7" do teclado numérico uma vez, depois vai apertando "4" do numérico até ouvir "EXP" ou "VIBRATO". Daí, "NVDA" + "/" (barra) do teclado numérico para simular um clique no objeto. Depois disso aparece a janela para escolher a configuração de expressão ou os tipos de vibrato. Na tela do vibrato só dá para escolher o tipo e a duração, tem umas curvas para editar com o mouse que não tem como mexer pelo teclado (só abrindo o arquivo num editor de texto).

### Montando uma Música

Agora, o processo que estou usando para montar uma música:

Como eu só tenho o Tiny Editor que limita a música a 17 compassos, a melodia deve ser dividida em várias partes para poder caber nele. Para cada uma das partes, preciso executar os seguintes passos:

- Usando um teclado MIDI, criar um arquivo MIDI da melodia.
- Colocar o arquivo no editor. Como o Tiny Editor não importa MIDI, eu importo o arquivo no UTAU (praticamente a única coisa que eu consigo fazer no UTAU) e depois exporto para VSQ, que o Tiny Editor lê.
- Editar as letras, e fazer o máximo que puder pela interface. Muitas coisas não são acessíveis aos leitores de tela (por exemplo, alterar a duração das notas), e eu tenho que apelar para editar alguns valores na VSQX (que na verdade é um arquivo XML) à mão com um editor de texto.
- Mexer e ajustar até parecer aceitável.
- Exportar o resultado como um arquivo WAV.
- Depois que todas as partes da melodia estiverem completas e exportadas como WAV, juntar os WAVs ao arquivo karaoke, usando algum outro editor de áudio, como o Audacity (no meu caso, eu movo os arquivos para a minha partição do Linux e uso o [Ecasound][ecasoundhp]).

### Por Último Mas Não Menos Importante...

E como eu disse que iria postar quando meu primeiro cover ficasse pronto, aqui está! É a música "Relics" composta por Tokoro-P e com letras por Karakuri. Minha versão é com a Megpoid Power (Gumi). Tem algumas falhas mas espero que esteja bom o suficiente para uma primeira tentativa. Você pode baixá-lo [aqui][relics-dl], e/ou ouvir no Youtube [aqui][relics-yt].

[vocaloid-a11y1]: /pt/blog/accessibility-and-how-i-began-using-vocaloid
[nvdahp]: http://www.nvaccess.org/
[ecasoundhp]: http://nosignal.fi/ecasound/
[relics-dl]: http://aiyumi.opendrive.com/files/87606812_JJA43_d5d3/gumi_power_-_relics_0.1.mp3
[relics-yt]: https://www.youtube.com/watch?v=G5xsuG4MGZg