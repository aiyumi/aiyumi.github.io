.. title: Mudança de Blog e de Servidor
.. slug: static-blog-migration
.. date: 2015-12-04 16:11:33
.. tags: Site Updates

Pelo visual, pode parecer que o blog não mudou nada, mas na verdade, mudou bem radicalmente. O blog agora é estático, só com páginas HTML e não precisa mais de PHP nem de banco de dados.

### Por que um Blog Estático?

Basicamente, blogs estáticos funcionam assim: eu escrevo os posts em alguma linguagem de marcação (eu uso [Markdown][mdhp]) em um editor de texto qualquer, então um programa gerador (geralmente de linha de comando) transforma os posts em HTML e os combina com os templates do leiaute das páginas (cabeçalho, menus, conteúdo etc.) e gera todas as páginas HTML, que podem ser enviadas para um servidor qualquer. Para mim, escrever no meu editor de texto preferido e dar alguns simples comandos para gerar e fazer upload das páginas é muito mais confortável do que ficar horas apanhando de uma interface web pesada e cheia de JavaScript (razão pela qual nunca me dei bem com o WordPress).

Já faz um tempo que venho querendo migrar para um blog estático. Tinha testado vários programas para gerar blogs estáticos (também conhecidos como "static blog generators") mas nenhum tinha exatamente os recursos que eu queria (principalmente suporte a conteúdo em vários idiomas). Até comecei a tentar criar meu próprio programa (em Perl) mas acabei desistindo. Até que, este ano (2015), encontrei este software chamado [Nikola][nikolahp] (que é escrito em Python). Poucos testes depois, concluí que ele faz tudo o que eu quero (e um pouco mais) e decidi que a hora de migrar havia chegado.

### E Por que a Mudança de Servidor?

Vim usando o serviço de hospedagem da [DreamHost][dhhp] desde 2007 e nunca tive problemas. Particularmente, gosto bastante da [ótima documentação disponível na wiki][dhwiki], do acesso SSH que também possibilita fazer upload de arquivos via Rsync em vez de FTP (basicamente, é bem mais rápido porque envia apenas o que for diferente entre os arquivos da minha máquina e os do servidor, em vez de reenviar tudo outra vez), da possibilidade de instalar outros programas no servidor (tem instruções na wiki), da possibilidade de editar as configurações do PHP, entre outras coisas, e por último mas não menos importante, as newsletters mensais bem-humoradas :P . Então por que resolvi mudar de hospedagem? Por alguns simples motivos: por mais que todos esses recursos sejam interessantes, ao longo dos anos, descobri que não preciso de tudo isso. Não tenho mais tanto tempo para desenvolver sites como tinha antes, quando contratei o serviço em 2007, na época em que eu ainda não tinha emprego e achava que ia trabalhar criando sites. Mas aí, consegui um emprego de programadora Perl, os anos se passaram e, no final das contas, o único site que venho mantendo (mais ou menos) ativamente é este em que você está agora, que mal precisava de PHP e MySQL. Agora que o site é estático, nem disso eu preciso mais! E com o Dólar alto beirando os quatro reais, fica inviável continuar pagando por todos esses recursos que não estou usando. Dito isso, mesmo que eu não use mais o serviço, eu ainda considero a hospedagem da DreamHost muito boa e recomendo para quem não tiver problema com o Dólar :P e precisa de um servidor com MySQL, PHP (ou Perl ou Python que também vêm inclusos no plano) e acesso SSH.

O registro do domínio (o "warpstar.net") ainda vai continuar na DreamHost (não só porque eu gosto dos recursos inclusos no plano como proteção de privacidade no whois, mas também porque isso serve de desculpa para eu continuar recebendo as newsletters mensais engraçadas :P *). Porém, agora o blog está hospedado no [GitHub Pages][ghpageshp] e as páginas são enviadas via Git (que também só envia as diferenças em vez de reenviar tudo toda vez), e de quebra, o site até ganhou controle de versão :D !

* Edit: ou pelo menos era o que eu pensava. descobri que se eu cancelar a hospedagem, mesmo que mantiver o registro de domínio, não vou receber mais a newsletter. Que pena... :(

Edit (2016/03/04): parece que não é bem assim! Apesar do que a página de cancelamento disse, eu ainda continuo recebendo as newsletters :D !

Os motivos acima são importantes para mim, mas no fim das contas, o que realmente importa para as outras pessoas é que o conteúdo está todo aqui, as URLs continuam as mesmas e o site continua no ar. A conversão talvez não tenha sido cem porcento. Pode haver alguns bugs aqui e ali, e pretendo ir corrigindo à medida que os encontrar.


[mdhp]: https://daringfireball.net/projects/markdown/
[nikolahp]: https://getnikola.com/
[dhhp]: http://www.dreamhost.com/r.cgi?362621
[dhwiki]: http://wiki.dreamhost.com/
[ghpageshp]: https://pages.github.com/