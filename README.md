<p align="center">
  <a href="#-sobre"> Sobre </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-conceitos-utilizados">Conceitos Utilizados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-material-de-apoio">Material de apoio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-baixar">Como baixar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#️-funcionalidades">Funcionalidades</a>
</p>

# 🏷️ Sobre

Esse projeto foi desenvolvido com o objetivo de praticar a criação controle de acesso de usuário, utilizando NodeJS.

[Link da API](https://nlw-valorize.herokuapp.com/)

## 📖  Conceitos Utilizados

Foi abordado durante o desenvolvimento da API `Many to One`, utilizando `TypeORM`, autentificação com JWT, inserindo id do user para ser empregado no `middleware` de validação das rotas, de acordo com as permissões. Além disso foi utilizado a lib `class-transformer` para manipular as informações expostas ao cliente.

## 📚 Material de apoio

- [TypeORM](typeorm.io/)
- [JWT](https://jwt.io)
- [BCrypt](https://www.npmjs.com/package/bcrypt)
- [JsonWebToken](www.npmjs.com/package/jsonwebtoken)

## ⬇️ Como baixar
```bash

    // Clonar repositório
    $ git clone https://github.com/BrunoSSantana/nlw_valoriza

    // Acessar diretório
    $ cd nlw_valoriza

    // Instalar dependências
    $ yarn

    // Iniciar projeto
    $ yarn dev
```
## Documentação
  Para abrir o arquivo de documentaçã o é necessário a instalação do [insomnia](https://insomnia.rest/download). Em seguida é a importação do arquivo como [mostra na documentação](https://docs.insomnia.rest/insomnia/import-export-data).

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=nlw_valoriza&uri=https%3A%2F%2Fraw.githubusercontent.com%2FBrunoSSantana%2Fnlw_valoriza%2Fmain%2Fapi_doc.json)

## ☑️ Funcionalidades

- [x] Cadastro de Users
- [x] Autenticacao de Users
- [x] Criação de Tags
- [x] Criação de Compliments
- [x] Relacionamento User_Compliment
- [x] Relacionamento Compliment_Tag
- [x] Listagem de todos os Usuário
- [x] Listagem de todas as Tags
- [x] Listagem de Compliments por usuário que enviou
- [x] Listagem de Compliments por usuário que recebeu
- [x] Envio de email ao criar o Compliment


## Author
<a href="https://github.com/BrunoSSantana/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/61945340?s=400&u=882004ebbccf5ae04e55fe4b27a5e704c3a95bab&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Bruno Santana</b></sub></a> <a href="https://github.com/BrunoSSantana/" title="Rocketseat">🚀</a>

Feito com 💜 por Bruno Santana 👋🏽

<!-- ## Acknowledgements -->
## License

Esse projeto está sob licença MIT. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#-sobre)
