.. title: Pequena Atualização de Status
.. slug: status-update-2011-08-04
.. keywords: acessibilidade, at-spi, atualizar, atualização, leitor de tela, linux, orca, problema, speech-dispatcher
.. description: Alguns problemas que tive ao tentar atualizar o AT-SPI e o Orca.
.. tags: Site Updates, linux
.. date: 2011-08-04 13:18:09

Depois de atualizar o Speech-Dispatcher, o leitor de telas Orca não conseguia detectar mais o sintetizador de voz em Japonês. Pensei que fosse porque estava desatualizado, então o atualizei junto com o AT-SPI, aí ele parou de funcionar. Até que o problema fosse resolvido, fiquei na linha de comando (console). Deu para fazer algumas coisas interessantes no modo texto, mas infelizmente não consegui usar nenhum leitor de telas com Japonês. Agora que finalmente estou com o Orca e o japonês de volta, escrevo este artigo.

Quanto ao problema que fez o Orca pifar... Diz-se que o AT-SPI1 e o 2 podem coexistir pacificamente no mesmo sistema, mas aqui, por algum motivo seus arquivos se misturaram e causaram um conflito. Não uso mais o AT-SPI1 por um longo tempo, então eu o removi. Depois de compilar e instalar o novo AT-SPI2, algumas dependências adicionais e o Orca, tudo parece estar de volta ao normal.

É isso por hoje. Em outros artigos, talvez eu fale sobre algumas das coisas interessantes que podem ser feitas no console. Por agora, estou feliz ao poder usar japonês no PC de novo!