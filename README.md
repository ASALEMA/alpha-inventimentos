# Alpha Investimentos API

> Este é um projeto de uma API escrito em `NodeJS`, `Express`, `MySql` e `JavaScript`, simulando o processo de compra e venda de uma corretora, bem como movimentações da carteira de um cliente. 


### Processo de desenvolvimento

Para este projeto foram realizadas as seguintes etapas:

1. Modelagem do banco de dados utilizando o `Draw.io`.
2. Para o desenvolvimento utilizei a IDE `Visual Studio Code`.
3. Sistemas operacional `Linux Ubuntu`.


A estrutura de tabelas foi pensada da seguinte maneira:

<img src="/img/modelagem.jpeg" alt="exemplo imagem">

### Descrevendo as tabelas

* **CLIENTE**: Tabela que armazena os dados dos clientes.
* **CONTA**: Tabela que armazena os dados relacionados as contas de clientes.
* **ATIVO**: Tabela que armazena os dados relacionados aos ativos da corretora.
* **CARTEIRA_CLIENTE**: Tabela que armazena os dados relacionados aos ativos em posse do cliente.
* **CARTEIRA_CORRETORA**: Tabela que armazena ativos disponíveis para compra.
* **TIPO_OPERACAO**: Tabela que armazena os tipos de operações disponíveis.
* **CLIENTE_HISTORICO_OPERACAO**: Tabela que armazena o histórico de operações de compra e venda de ativos. 


### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [ ] Testes de unidade
- [ ] Deploy da API
- [ ] Autenticação e autorização JWT
- [x] Documentação da API com Swagger
- [ ] Melhorar documentação do Swagger


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* É necessário ter a versão do `node-v16+`.
* Você tem uma máquina `Docker` e `Docker-compose`.
* A API esta configurada para executar na `porta 3000` e o MySql na `porta 3306`.

## 🚀 Instalando Alpha Investimentos API

Para instalar o **Alpha Investimentos API**, siga estas etapas:

Dentro da raiz do projeto:

Linux, macOS e Windows:
```
docker-compose up -d
```
**Obs.:** A aplicação pode demorar até uns 10 segundos para ficar disponível, pois estará se conectando com a porta do MySql.

## ☕ Usando Alpha Investimentos API

Para usar **Alpha Investimentos API**, siga estas etapas:

1. Acesse no seu navegador o endereço `http://localhost:3000/api-docs`.
2. Utilize o `código do cliente 1` para suas requisições.


## 📫 Contribuindo para Alpha Investimentos API

Para contribuir com **Alpha Investimentos API**, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
