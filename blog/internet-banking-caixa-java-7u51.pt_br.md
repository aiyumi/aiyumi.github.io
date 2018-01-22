.. title: Internet Banking Caixa e Java 7 Update 51
.. slug: internet-banking-caixa-java-7u51
.. keywords: 1.7_51, 1.7.0_51, 10.51.2, 7u51, caixa, caixa economica, caixa econômica, caixa economica federal, caixa econômica federal, cef, cm12, editar lista de sites, erro, erro cm12, exceção, exception.sites, internetbanking, internet banking, java, linux
.. description: 
.. tags: linux
.. date: 2014-01-26 11:51:31

Na semana passada (lá pelo dia 17 de janeiro de 2014), tive de atualizar a instalação do Java. Fazendo isso, a versão do meu Java passou a ser "Java JRE 1.7.0_51", e o plugin de navegadores "Java(TM) Plug-in 10.51.2". Mas aí, o internet banking da Caixa parou de funcionar. Sempre caía numa página com código de erro CM12, dizendo que houve um problema no cadastro de computadores, com um link para o site da Oracle para baixar o Java, mesmo com o Java instalado e funcionando perfeitamente (até o site do Banco do Brasil funcionava, só o da Caixa que não). Tentei o telefone do 0800 mas a ligação vivia caindo e não consegui resolver nada, então fui procurar por conta própria. Como eu uso Linux, pensei que fosse algum problema relacionado ao Linux e pesquisei de tudo quanto era jeito e nada. Até que encontrei este post:

[http://www.vivaolinux.com.br/dica/Java-JRE-17-51-Instalacao-facil-no-Debian-7-em-tres-passos](http://www.vivaolinux.com.br/dica/Java-JRE-17-51-Instalacao-facil-no-Debian-7-em-tres-passos)

Mais especificamente este comentário:

> [5] Comentário enviado por jairus em 21/01/2014 - 11:33h:
> 
> Bom dia pessoal !!!
> 
> O que aconteceu com o Java 7_51, foi a questão de Lista de Sites de Excessões, que deverá ser configurada de acordo com a necessidade de cada usuário.
> 
> A funcionalidade Lista de Sites de Exceção está sendo introduzida na release Java 7 Update 51. A inclusão do URL da aplicação
> na Lista de exceções permite aos usuários executarem RIAs (Rich Internet Applications) que normalmente seriam bloqueados por
> verificações de segurança.
> 
> Veja a seguir os casos que permitirão que as aplicações sejam executadas por meio da inclusão do URL da aplicação na lista de
> sites de exceção:
> 
> .Se a aplicação não estiver assinada com um certificado de uma autoridade de certificação confiável.
> .Se a aplicação estiver hospedada localmente.
> .Arquivo Jar sem o atributo de manifesto de Permissão.
> .Aplicação assinada com um certificado expirado.
> .O certificado usado para assinar a aplicação não pode ser marcado para revogação.
> 
> Gerenciar a Lista de Sites de Exceção
> 
> A lista de sites de exceção é gerenciada na guia Segurança do Painel de Controle do Java. A lista é mostrada na guia. Para
> adicionar, editar ou remover um URL da lista, clique em Editar Lista de Sites e siga as orientações mostradas.
> 
> Adicionar um URL
> 
> .Clique no botão Editar Lista de Sites.
> .Clique em Adicionar na janela Lista de Sites de Exceção.
> .Clique no campo vazio embaixo do campo Localização para inserir o URL.
> .Exemplo: http://myexample.com (observação: o URL deve começar com http:// ou https://)
> .Clique em OK para salvar o URL que você inseriu.
> .Clique em Continuar na caixa de diálogo Advertência de Segurança.
> 
> Editar um URL
> 
> .Clique duas vezes no URL que você deseja editar na janela Lista de Sites de Exceção.
> .Faça a alteração no URL.
> .Clique em OK para salvar as alterações.
> 
> Remover um URL
> 
> .Clique no URL que você deseja remover na janela Lista de Sites de Exceção.
> .Clique em Remover.
> .Clique em OK para salvar sua alteração.
> 
> Observação: se um conjunto de regras de implantação ativo for instalado no sistema, as regras de implantação terão
> precedência sobre a lista de sites de exceção. A lista de sites de exceção só é considerada quando a regra padrão se
> aplica. Consulte Conjunto de Regras de Implantação (http://docs.oracle.com/javase/7/docs/technotes/guides
> /jweb/deployment_rules.html) para obter mais informações sobre regras de implantação.
> 
> Fonte: http://java.com

Ok, pode ser isso, mas onde fica esse tal do painel de controle do Java? Nem sabia que existisse uma coisa dessas! Pesquisando mais um pouco, achei isso:

[https://blogs.oracle.com/brunoborges/entry/novo_java_7u51_e_os](https://blogs.oracle.com/brunoborges/entry/novo_java_7u51_e_os)

No Windows e no Mac, fica no painel de controle/preferências mesmo. No Linux, é para digitar o comando "jcontrol" num terminal. Vai aparecer uma interface gráfica com as configurações. Vá na aba "Segurança", depois em "Editar Lista de Sites" e em "Adicionar", então adicione estes dois endereços:

    https://internetbanking.caixa.gov.br
    https://internetbankingpf.caixa.gov.br

Outra forma de fazer isso é editar o arquivo "exception.sites" (é um arquivo de texto normal), colando os dois endereços nele.

No Windows, fica em: C:\Users\%USER%\AppData\LocalLow\Sun\Java\Deployment\security\exception.sites

No Mac: ~/Library/Application Support/Oracle/Java/Deployment/security/exception.sites

No Linux: ~/.java/deployment/security/exception.sites

Depois que eu fiz isso, o internet banking da Caixa finalmente voltou a funcionar!

Resumindo, o problema era um recurso que adicionaram nessa última versão do Java, e estava nas configurações do Java e não importa qual o sistema operacional. O ruim é que a solução pode não ser tão fácil de descobrir, principalmente para usuários leigos. Não uso Java (só tenho instalado mais por causa dos sites de bancos que insistem em usá-lo), não acompanho as novidades, e mesmo que acompanhasse, não é fácil de saber quais delas vão me afetar. Mas agora felizmente resolveu, e espero que este post seja útil para mais gente.