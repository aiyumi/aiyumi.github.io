.. title: Uma Introdução Básica ao SoX
.. slug: sox-basic-intro
.. keywords: aplicativo, áudio, audio, código aberto, comando, console, converter, editor, efeito, ferramenta, free, free software, grátis, gratis, linha de comando, mp3, open source, programa, processamento, software, som, sox, wav
.. description: Uma introdução básica ao SoX, um programa para processamento de áudio.
.. tags: linux, Audio
.. date: 2011-09-09 13:19:38

### O que é o SoX? ###

[SoX][soxhome] (Sound eXchange) é, como o autor o chama, o "canivete Suíço dos programas de processamento de som". Ele é gratuito, livre/de código aberto e roda em Windows, Mac e Linux.

O SoX pode reproduzir, gravar, converter, editar, dividir, combinar e aplicar vários efeitos a
arquivos de áudio de muitos formatos diferentes. <!--teaser_end-->

### Formatos Suportados ###

Em uma instalação padrão do Slackware Linux 13.37, os formatos suportados pelo SoX são:

8svx, aif, aifc, aiff, aiffc, al, amb, au, avr, caf, cdda, cdr, cvs, cvsd, cvu, 
dat, dvms, f32, f4, f64, f8, fap, flac, fssd, gsm, gsrt, hcom, htk, ima, ircam, 
la, lpc, lpc10, lu, mat, mat4, mat5, maud, mp2, mp3, nist, ogg, paf, prc, pvf, 
raw, s1, s16, s2, s24, s3, s32, s4, s8, sb, sd2, sds, sf, sl, smp, snd, sndfile 
(formatos suportados pela biblioteca Libsndfile), sndr, sndt, sou, sox (
formato interno), sph, sw, txw, u1, u16, u2, u24, u3, u32, u4, u8, ub, ul, uw, vms, voc, 
vorbis, vox, w64, wav, wavpcm, wv, wve, xa, xi

E mais alguns outros caso as bibliotecas associadas estejam instaladas.

Apenas alguns dos efeitos suportados:

bandpass (filtro passa-banda), chorus, delay, echo (eco), equalizer (equalizador), fade (fade in e out), highpass (filtro passa-alta), lowpass (filtro passa-baixa), pitch (altera apenas o tom), reverb (reverberação), reverse (inversão), riaa, speed (altera a velocidade e o tom), synth (gera formas básicas de onda), tempo (altera apenas a velocidade), tremolo, trim, vocoder

Para uma lista completa de formatos, efeitos e outras características, visite [esta página (em Inglês)][soxfeatures].

### Instalação ###

Versões para Windows e Mac podem ser baixadas diretamente da [página oficial de download][soxdownloads]. Para
Linux, o SoX pode ser compilado do código-fonte (disponível na mesma
página), ou instalado via repositórios de pacotes para distribuições específicas. No caso do
Slackware (a distribuição Linux que eu uso), ele é instalado por padrão
embora o suporte a geração de arquivos MP3 venha desabilitado, o que pode ser resolvido apenas 
executando novamente o script (SlackBuild) para compilá-lo, depois reinstalá-lo.

### Programas Inclusos ###

O SoX é uma ferramenta para linha de comando e vem com alguns mini programas (comandos) para
execução de diferentes tarefas:

#### Play ####

Reproduz arquivos de áudio nos formatos suportados, além de aplicar efeitos durante a reprodução caso
desejado.


#### Rec ####

Grava de um dispositivo (microfone, placa de som etc) para um arquivo em um dos
formatos suportados.


#### Soxi ####

Exibe informações sobre arquivos de áudio nos formatos suportados.


#### Sox ####

É comumente usado para processar arquivo (s) e salvar os resultados em outro arquivo, mas
na verdade ele é o núcleo do "play", do "rec" e do "soxi".


### Exemplos Básicos de Uso ###

Nota: estes exemplos foram executados no Linux, 	não sei se há diferenças nos comandos para outros sistemas.

#### Exibir Informações Sobre Arquivos ####

1. Exibe informações como tamanho, duração, codificação, taxa de bits (bitrate), número de canais,
taxa de amostragem (sample rate), comentários etc. de um arquivo chamado "musica.mp3":

	$ soxi musica.mp3

2. Exibe apenas a duração do arquivo acima:

	$ soxi -d musica.mp3


#### Reproduzindo Arquivos ####

1. Toca um arquivo chamado "exemplo.mp3":

	$ play exemplo.mp3

2. Toca um arquivo chamado "exemplo.mp3" com um efeito de reverberação (reverb):

	$ play exemplo.mp3 reverb

3. Reproduz o arquivo "exemplo.mp3" de trás para frente:

	$ play exemplo.mp3 reverse

4. Reproduz apenas os primeiros cinco segundos de "exemplo.mp3":

	$ play exemplo.mp3 trim 0 5

5. Toca o arquivo "exemplo.mp3", do quinto segundo em diante:

	$ play exemplo.mp3 trim 5

Nota: existem opções para controlar os parâmetros de reverb, trim etc., bem
como vários outros efeitos. Leia a seção "Obtendo Ajuda" abaixo para mais
informações.


#### Gravando ####

Captura o som do dispositivo de gravação padrão (por exemplo, um microfone) e salva em um arquivo
chamado "exemplo.wav":

	$ rec exemplo.wav

Nota: primeiro você precisa definir o dispositivo de gravação (por exemplo, nas configurações de som
 no Windows, ou com programas como "alsamixer" ou "aumix" no Linux).


#### Pausando e Continuando ####

Para pausar a reprodução ou gravação, pressione Ctrl-z. O SoX vai pausar e ficar em segundo plano (background). 
Para retomar de onde  parou e colocá-lo novamente em primeiro plano (foreground), digite o comando:

	$ fg

Nota: não sei se isso funciona da mesma forma (nem como/se funciona) no Windows.

#### Processamento e Conversão de arquivos ####

Estes comandos processam arquivo(s) e salvam o resultado em outro arquivo, até mesmo
convertendo-o para outro formato.

1. Converte um arquivo chamado "exemplo.wav" para "exemplo.mp3":

	$ sox exemplo.wav exemplo.mp3

2. Aplica um efeito de reverb (com os parâmetros padrões do SoX) ao arquivo "exemplo1.wav"
e salva o resultado em "exemplo2.wav":

	$ sox exemplo1.wav exemplo2.wav reverb

3. Une os arquivos "exemplo-parte1.flac" e "exemplo-parte2.flac" para formar
"exemplo-completo.flac":

	$ sox exemplo-parte1.flac exemplo-parte2.flac exemplo-completo.flac

4. Salva os primeiros cinquenta segundos de "exemplo1.mp3" para "exemplo2.ogg":

	$ sox exemplo1.mp3 exemplo2.ogg trim 0 50

5. Mescla (para que toquem simultaneamente) uma música de fundo ("musica.mp3") com uma gravação de voz ("discurso.wav"),
produzindo "apresentacao.ogg":

	$ sox -m musica.mp3 discurso.wav apresentacao.ogg

6. Mescla o fundo ("musica.mp3") na metade do volume e a voz
("discurso.wav") com o dobro de volume, produzindo "apresentacao.ogg":

	$ sox -m -v0.5 musica.mp3 -v2 discurso.wav apresentacao.ogg

Dica: se quiser "pré-visualizar" (ou seria "pré-ouvir"?) os efeitos sem alterar o arquivo, você pode usar
o "play" para aplicar os efeitos e ouvir:

	$ play -m -v0.5 musica.mp3 -v2 discurso.wav

Ajuste os parâmetros (neste exemplo, o volume, que é o
número após a opção "-v") até encontrar os valores que julgar apropriados, então
substitua o comando "play" por "sox" e especifique um arquivo de saída. Exemplo:

	$ sox -m -v0.5 musica.mp3 -v1.2 discurso.wav apresentacao.ogg


#### Gerando Áudio ####

O SoX também pode gerar algumas formas básicas de áudio como ondas senoidais (sine waves), triangulares (triangular waves), quadradas (square waves) e
"dente de serra" (sawtoot waves), além de algumas outras coisas como ruído "branco" ("white" noise), "marrom" ("brown" noise) e "rosa" ("pink" noise).

1. Este comando reproduz uma onda senoidal em 440Hz (a nota Lá/A4) durante um segundo. O ganho (e
volume do som) é diminuído para não ficar muito alto:

	$ play -n synth 1 sine 440 gain -10

2. Este faz a mesma coisa, mas usa o nome da nota em vez da frequência:

	$ play -n synth 1 sine A4 gain -10

3. Este outro comando salva o som para um arquivo chamado "senoide.wav" em vez de tocá-lo:

	$ sox -n senoide.wav synth 1 sine A4 gain -10


#### Suprimindo Informações ####

Se a quantidade de texto exibida na tela incomodar, você pode usar a opção "-q"
para que o SoX não exiba nenhuma informação, exceto alertas e erros. Isso funciona tanto com o "play", quanto com o "rec" e o "sox". Exemplo:

	$ play -q musica.mp3


### Obtendo Ajuda ###

Para mostrar todos os comandos do SoX, formatos e efeitos, digite:

	$ sox --help

Para "play", "rec" e "soxi", digite "play --help", "rec --help" e "soxi --help", respectivamente.

Nota: a ajuda é praticamente a mesma para o "sox", o "play" e o "rec", exceto pela
ordem dos arquivos de entrada/saída e efeitos.

Há também os manuais do usuário (em Inglês), com explicações mais detalhadas dos comandos,
parâmetros de efeito e exemplos. No Linux, se os manuais estiverem instalados, você pode lê-los offline digitando

	$  man sox

para os manuais do "sox", do "play" e do "rec",

	$ man soxformat

para todas as opções relacionadas aos formatos de arquivo suportados e

	$ man soxi

para o manual do "soxi". Há também o

	$ man libsox

para aqueles que querem mexer com código e a biblioteca da engine do SoX.

Você também pode ler os manuais online na [página de documentação do SoX][soxdocs].

### Links Externos ###

[Site oficial do SoX (em Inglês)](http://sox.sourceforge.net/)

[soxhome]: http://sox.sourceforge.net/
[soxfeatures]: http://sox.sourceforge.net/Docs/Features
[soxdownloads]: http://sourceforge.net/projects/sox/files/sox/
[soxdocs]: http://sox.sourceforge.net/Docs/Documentation
