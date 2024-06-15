# Portal Estágio

Disponível em https://portalestagio.com/.

Atualmente o projeto encontra-se em um estágio inicial, com poucas funcionalidades implementadas.
Caso queira contribuir, consulte a seção [como contribuir](#como-contribuir).

## Sobre o Projeto

Este projeto é um _web app_ para conectar empresas que oferecem estágios e candidatos que procuram oportunidades, feito através do grupo [Os Programadores](https://osprogramadores.com). 

As empresas podem cadastrar as suas vagas e os candidatos podem se candidatar a elas.

## Como Contribuir

#### Agradecemos o seu interesse em contribuir para o `Portal De Estágios`! 
Este é um projeto [open source](https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto) e todas as contribuições são bem-vindas!. 

Aqui estão algumas maneiras de contribuir:

1. **Grupo Os Programadores**: 
   1. As discussões sobre esse projeto estão sendo feita através do [grupo Os Programadores, no Telegram](https://t.me/osprogramadores). 
   2. O [site oficial](https://osprogramadores.com) do grupo é https://osprogramadores.com/.
   2. Adicionalmente você pode contribuir com as discussões em andamento nas issues/discussões abertas.
   3. Caso não encontre o tópico da discussão que deseja, crie uma issue ou discussão sobre o tópico.
   
2. **Contribuir com o código**: 
   1. Faça um fork do projeto, caso ainda não tenha um;
   2. Crie uma branch;
   3. Faça as suas alterações (não esqueça de commitar as mudanças para o seu repositório!);
   4. Abra um Pull Request para dar um _merge_ com as suas modificações. 
      1. Se houver uma issue associada as suas mudanças, mencione-a no seu PR.
      2. Descreva o que foi modificado e o porquê no seu PR, isso facilitará o processo de revisão.

Caso precise de um guia de estudos, recomendamos a leitura [deste guia](GUIA.md).


> Para conferir as issues e as discussões em andamento você pode acessá-las diretamente através das suas respectivas abas no topo desta página.

---
## Licença

Este projeto utiliza a licença [GNU LGPL v3](https://www.gnu.org/licenses/lgpl-3.0.en.html). Uma cópia da licença, em inglês, está disponível em [LICENSE.md](LICENSE.md).

--- 

## Executando a aplicação

A aplicação está sendo criada usando [NextJS](https://nextjs.org/).

### Requisitos:

* [Node.js 18.17](https://nodejs.org/en), ou mais recente, precisa estar instalado na sua máquina. 
  * Recomendamos instalar as versões LTS

##### Comando para iniciar a aplicação em modo desenvolvimento:

```shell
npm run dev
```
Siga as instruções exibidas na linha de comando para acessar a aplicação no navegador padrão do seu computador.

> Lembrando que, caso você não tenha instalado as dependências do projeto o comando acima falhará! 
 
Para conferir se ainda há alguma dependência que não foi instalada execute o comando `npm list`. 
Se a saída do comando apresentar mensagens de erro, você precisa instalá-las.

Para instalar as dependências do projeto, execute o seguinte comando:  
```shell
npm install
```

### Gerenciamento de versões do Node

Para instalar e gerenciar diferentes versões do node.js você pode usar as seguintes ferramentas:

- Caso você utilize Linux, pode utilizar o [nvm](https://github.com/nvm-sh/nvm)
- Caso você utilize Windows, pode utilizar o [nvm-windows](https://github.com/coreybutler/nvm-windows)

Ambos são ferramentas amplamente utilizadas e difundidas para facilitar a instalação/manutenção do Node.

Informações sobre como instalá-las estão disponíveis nos seus respectivos repositórios. 

> Caso tenha dificuldades nesta etapa, peça ajuda no [grupo Os Programadores, no Telegram](https://t.me/osprogramadores). 

--- 

## Usando o Git e o GitHub

Se você é novo no Git e no GitHub, aqui estão alguns passos para começar:

1. **Fork do Repositório**: 
   1. No canto superior direito da página do repositório, clique no botão "**_Fork_**".
1. **Clone o Repositório**: 
   1. No seu repositório _forkado_, clique no botão "Code" e copie a URL do seu repositório.
   1. Abra seu terminal e navege até a pasta onde deseja clonar o repositório.
   1. Digite o comando `git clone url` substituindo _**url**_ pela URL do seu repositório que você copiou no **item 2.i**. 
      1. Exemplo: 
`git clone https://github.com/OsProgramadores/portalestagio.git`
1. **Crie uma nova Branch**: 
   1. Existem algumas formas para se criar uma nova branch. Você pode fazer isso pelo seu terminal com os seguintes comandos:
      1. `git checkout -b nome-da-branch`
      1. `git switch -c nome-da-branch`
   1. Em ambos os comandos você deve substituir `nome-da-branch` pelo nome que deseja dar ao seu branch.
1. **Faça suas alterações**:
   1. Adicione, edite ou delete arquivos conforme necessário.
1. **Salvando suas alterações**:
   1. Após ter salvo as suas alterações, você precisa adicioná-las ao repositório. Para fazer isso você precisa adicionar as mudanças/inserções/remoções dos arquivos ao git.
   1. Em um terminal, no repositório onde você fez as alterações, digite o comando `git status`.
   1. O resultado deste comando deve-lhe informar sobre as modificações feitas no repositório e o que está pendente para ser enviado.
   1. Adicione as modificações necessárias utilizando o comando `git add arquivo`, onde  `arquivo` é o nome do arquivo com o caminho para ele.
      1. Alternativamente você pode adicionar um diretório inteiro repassando o caminho para o diretório no lugar do `arquivo`. 
      1. Para adicionar o diretório atual você pode usar o comando `git add .`
   1. Confira se todos os arquivos necessários foram adicionados.
   1. Uma vez que você tenha adicionado os arquivos necessários, agora é hora de gerar um novo commit para salvar suas modificações.
   1. Você pode fazer isso usando o comando`git commit -m "sua mensagem de commit"`, alterando "mensagem de commit" por algo que explique suas alterações.
1. **Enviando suas alterações para o GitHub**:
   1. Após ter criado o commit, você precisa enviar as suas alterações para o GitHub.
   1. Você pode fazer isso utilizando o comando `git push --set-upstream origin nome_da_sua_branch`.
1. **Abrindo um Pull Request**: 
   1. Após você ter enviado as suas alterações, volte para a página do seu repositório _forkado_ no GitHub.
   1. Um botão _**Compare & pull request**_ deverá ser exibido. Clique nele para criar seu PR (Pull Request).
   1. Escreva uma descrição das suas alterações e clique no botão "Create pull request".
   1. Aguarde o processo de revisão do seu PR.

