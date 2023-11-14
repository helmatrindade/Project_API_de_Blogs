#  API de Blogs

### 💻 Sobre o projeto
Este projeto é uma API desenvolvida em Node.js, que utiliza o Sequelize para operações de CRUD em posts. Seguindo os princípios do REST, a API exige autenticação de usuário para criar posts. Além disso, os posts são categorizados, estabelecendo uma relação bidirecional, o que significa que os posts podem ser associados a uma ou várias categorias, e as categorias podem conter vários posts, permitindo uma organização flexível e eficaz do conteúdo do blog.
<br>
### Tecnologias e Ferramentas
<div>
    <img src='https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' alt='JavaScript' />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="jwt"/>
</div>

### 💡 Orietações
Este projeto utiliza contêineres Docker para gerenciar o ambiente de desenvolvimento. Isso facilita a configuração do ambiente e garante a consistência entre diferentes sistemas. Certifique-se de ter o Docker instalado em seu sistema antes de prosseguir.
<br>

 <details>
 <summary> 🐳 Início rápido com Docker</summary><br>

**Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

```bash
# Rode os serviços `node` e `db` com o comando
docker-compose up -d --build
```

- Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

- Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

- A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

```bash
# Para ter acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
docker exec -it blogs_api bash

# Dentro do container, Instale as dependências.
npm install
```

- **Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 
<br>
<br>
</details>

 <details>
 <summary>🖥️ Início rápido sem Docker</summary><br>

-  Instale as dependências com `npm install`.
```bash
# em um terminal, inicie a aplicação
npm install
```

- Crie um arquivo `.env` na raiz do projeto seguindo o padrão do arquivo [`env.example`](./env.example) e o modifique de acordo com a necessidade.

```bash
    env $(cat .env) npm run dev
 ```

- Coloque `env $(cat .env)` antes de qualquer comando que for executar, por exemplo:

 ```bash
    env $(cat .env) npm run dev
```
</details>

<details>
 <summary>🤗 Minhas Contribuições</summary><br>

Neste projeto, minhas contribuições incluem:

- Criação das migrações para as tabelas `users`, `categories`, `blog_posts` e `posts_categories`.
- Desenvolvimento do modelo `User` em `src/models/User.js` com as propriedades corretas.
- Desenvolvimento do modelo `Category` em `src/models/Category.js` com as propriedades corretas.
- Desenvolvimento do modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades corretas.

- Implementação dos endpoints da API:
  1. `POST /login` para autenticação de usuário.
  2. `POST /user` para criação de novos usuários.
  3. `GET /user` para recuperar informações do usuário.
  4. `GET /user/:id` para trazer o user baseado no id.
  5. `POST /categories` para adicionar uma nova categoria a  tabela no banco de dados.
  7. `GET /post` para trazer todos os blogs post.

Essas contribuições representam minha parcela de trabalho neste projeto. Obrigada por conferir o projeto!
<br>
</details>

### 🙋‍♀️  Autor

- [@helmatrindade](https://github.com/helmatrindade)
