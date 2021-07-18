<h1 align="center">API para Loja de Carros - CARUPI</h1>

</div>

## Índice

- [Sobre](#Sobre)
- [Tecnologias](#Tecnologias)
- [Iniciando o projeto](#Iniciando)

<hr>

<!-- About -->

# Sobre

<p align="left">API desenvolvida com o objetivo de fazer um CRUD para uma loja de carros.</p>

<!-- TECHNOLOGIES -->

# Tecnologias

- [Tecnologias]()
  - [Node JS](https://nodejs.org/en/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/pt-br/)
  - [MongoDB](https://www.mongodb.com/)
    - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
    - [Mongoose](https://mongoosejs.com/)
  - [Jest](https://jestjs.io/pt-BR/)

<hr>

<!-- TECHNOLOGIES -->

# Iniciando

##### Pré-requisitos

- Node JS

  ```sh
  https://nodejs.org/en/
  ```

- Yarn ou Npm

  ```sh
  https://yarnpkg.com/
  ```

- PostgresSQL

  ```sh
  https://www.mongodb.com/
  ```

- MongoDB Atlas

  ```sh
  https://www.mongodb.com/cloud/atlas
  ```

<hr>

### Preparando o ambiente

##### Execute este comando para clonar o projeto

```bash
$ git clone https://github.com/LevyAM/rest-api-cars-carupi
```

##### ou use a opção de download.

##### Instale as dependências

```bash
$ yarn ou npm install
```

##### Crie uma conta no site MongoDB e configure seus dados

```bash
$ https://www.mongodb.com
```

<p align="left">Acesse o site do MongoDB Atlas para criar um cluster na nuvem utilizando o MongoDb Atlas</p>

```bash
$ https://www.mongodb.com/cloud/atlas
```

<p align="left">Siga o Passo-a-Passo no MongoDB Atlas e crie um projeto de um cluster com pelo menos um usuário com acesso de leitura e escrita. Guarde as informações do usuário e o link de conexão com o banco de dados conforme modelo do arquivo model.env, criando o seu próprio arquivo .env, caso necessário</p>

```bash
#MONGODB ATLAS USER
MONGO_USER=user_cloud_atlas
MONGO_PASSWORD=password_cloud_atlas

#MONGODB CONNECTION
CONNECTION=mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@carupi-cars.zbvzl.mongodb.net/cars?retryWrites=true&w=majority
```

<p align="left">O link pode ser editado dentro do index na pasta mongoose:</p>

```bash
$ cd src/shared/indra/mongoose/index.ts
```

<p align="left">Execute a aplicação usando o comando</p>

```bash
$ yarn start
```

<hr>

<!-- ROTAS -->

# ROTAS

```bash
http://localhost:PORT/
```

<p align="left">A porta pode ser setada através do .env conforme model.env </p>

```bash
#SERVER PORT
PORT=3333
```

### POST

```bash
http://localhost:PORT/car
```

<p align="left">A rota POST permite o cadastro de carros e retorna o STATUS 201 Created, quando o cadastro for realizado com sucesso</p>

### GET

```bash
http://localhost:PORT/car
```

<p align="left">A rota GET lista todos os carros cadastrados e retorna o STATUS 200 OK</p>

### DELETE

```bash
http://localhost:PORT/car/:car_id
```

<p align="left">A rota DELETE deleta um carro de acordo com o seu car_id e retorna o STATUS 200 OK</p>

<hr>

<!-- ROTAS -->
