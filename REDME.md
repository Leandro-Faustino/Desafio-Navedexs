# Projeto Desafio Navedex's Api #

## Sobre
<p>O sistema consiste em um criador de navedex's, nele tu poderá se cadastrar utilizando email e senha, e então ao logar terá acesso ao banco de dados dos seus navers, possuindo informações como: nomes, data de nascimento, cargos, tempo de empresa e projetos que participou.</p>

## Funcionalidades do sistema

### Rota de Usuario

* [/signup] * Rota de cadastro

<p>Deverá receber email e senha e criar novo registro no banco</p>

### Autenticação

* [/login] * Rota para poder logar no sistema

<p>Deverá retornar um token JWT para o usuário ter acesso à outras rotas
Navers</p>

###  Rotas  de Navers

* [/Index] * Rota para listagem dos Navers.

* [/Show] * Rota para detalhar informações de um único naver através de seu identificador

* [/Store] * Rota de Criação de Naver

* [/Update] * Rota Para Atualização de Naver

* [/Delete] * Rota Para Deletar um Naver

### Rotas de Projetos

* [/Index] * Rota para listagem dos Projetos

* [/Show] * Rota para detalhar um projeto

* [/Store] * Rota de Criação de Projeto

* [/Update] * Rota Para Atualização de Projeto

* [/Delete] * Rota Para Deletar um Projeto

## Test Api Naverdex's

### Para testar o projeto,basta clicar no botão 👇
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Test%20Naverdex's%20Back-End&uri=https%3A%2F%2Fraw.githubusercontent.com%2FLeandro-Faustino%2FDesafio-Navedexs%2Fmain%2FInsomnia_test.json)

* Clique no botão [RUN TEST API],
* Abrir no Insominia
* Ok para testar projeto

## Tecnologias usadas no projeto
👉  Node.js <br />
👉  express <br />
👉  typescript <br />
👉  jsonwebtoken <br />
👉  bcrypt <br />
👉  date-fns <br />
👉  jsonwebtoken <br />

## Dificuldades
<p>Por ser meu primeiro projeto feito sozinho,encontrei muita dificuldade nas relações das tabelas do banco de dados e filtragem dos dados em si,mais fico muito grato por ter conseguido desenvolver este desafio.</p>

<p>Bora pro proximo ...</p>
