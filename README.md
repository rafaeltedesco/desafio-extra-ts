# Desafio Extra Typescript

Este é um projeto desenvolvido em TypeScript utilizando Sequelize como ORM (Object-Relational Mapping). A aplicação pode ser executada usando Docker Compose.

## Instalação
1. Clone o repositório para sua máquina local.
2. Navegue até o diretório do projeto.

## Docker Compose
Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

## Configuração do Banco de Dados
No arquivo docker-compose.yml, verifique e ajuste, se necessário, as variáveis de ambiente relacionadas ao banco de dados.

## Executando a Aplicação
No diretório raiz do projeto, execute o seguinte comando para construir as imagens e iniciar os contêineres:

```bash
docker-compose up -d
```

Isso irá criar e executar os contêineres para a aplicação e o banco de dados.

Acesse o container utilizando o comando:
```bash
  docker exec -it desafio_extra sh
```

Execute o comando *npm run db:reset* para construir o banco e suas tabelas.

Após execute *npm run dev* para iniciar a aplicação.

O projeto será executado na porta *3001* do host local.

## Comandos Úteis do Docker Compose
Parar a aplicação e remover os contêineres:

```bash
docker-compose down
```

Visualizar os logs da aplicação:

```bash
docker-compose logs -f app-desafio-extra-ts
```

A seguir estão os scripts disponíveis no arquivo package.json:

start: Executa a aplicação em modo de produção.
lint: Executa o linting no código-fonte usando o ESLint.
dev: Executa a aplicação em modo de desenvolvimento com reinício automático.
build: Compila o código TypeScript para JavaScript.
db:reset: Executa o arquivo restore_db.sh, que realiza as seguintes ações:
  Compila o código TypeScript para JavaScript.
  Dropa o banco de dados existente.
  Cria um novo banco de dados.
  Executa as migrações do Sequelize.
  Popula o banco de dados com os dados iniciais.

## Rotas
A seguir estão as rotas disponíveis neste projeto:

POST /signup: Realiza o cadastro de um usuário e gera uma URL de ativação. Por padrão, o usuário é cadastrado como inativo.

POST /signin: Realiza o login enviando o e-mail e a senha do usuário. Se as informações estiverem corretas, o sistema retorna um token de autenticação.

GET /activate/:userId/:activationCode: Ativa a conta do usuário com base no ID do usuário e no código de ativação fornecidos na URL.

GET /show-profile: Retorna o perfil do usuário, incluindo as URLs cadastradas, desde que seja fornecido um token válido.

POST /short-url: Cria uma URL encurtada com base em uma URL original fornecida no corpo da requisição. É necessário enviar um token de autenticação válido para utilizar esta rota.

GET /:urlCode: Recebe o código da URL encurtada e redireciona para a URL original correspondente.

## Configuração do Banco de Dados
As informações de conexão com o banco de dados podem ser configuradas no arquivo config/database.ts.

Certifique-se de ter um banco de dados MySQL disponível. O Docker Compose configura um banco de dados MySQL usando a imagem `mysql: