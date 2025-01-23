# App

Libary market app

## RFs (requisitos funcionais)

- [X] deve ser possivel se cadastrar
- [ ] deve ser possivel se autenticar
- [ ] deve ser possivel obter um perfil de um usuario logado
- [ ] deve ser possivel cadastrar um livro
- [ ] deve ser possivel editar as informações um livro
- [ ] deve ser possivel deletar um livro
- [ ] deve ser possivel ver livros de por categorias
- [ ] deve ser possivel ver livros por pesquisa de nome
- [ ] deve ser possivel ver livros por pesquisa de ano
- [ ] deve ser possivel ver livros por pesquisa de autor
- [ ] deve ser possivel ver a pagina de um livro
- [ ] deve ser possivel dar um numero de estrlas de 1 a 5 na pagina de um livro
- [ ] deve ser possivel comentar na pagina de um livro

## RNs (regras de negócio)

- [X] o usuário não pode se cadastrar com um e-mail duplicado
- [ ] um livro só pode ser apagado ou editado pelo autor ou um admin
- [ ] 
- [ ] 
- [ ] 

## RNFs (requisitos não-funcionais)

- [ ] A senha do usúario precisa estar criptografada 
- [ ] Os dados da aplicação precisam ser persistidos em um banco postgresSQL 
- [ ] Todas as listas de dados precisam estar paginadas com no maximo 20 itens
- [ ] O usuario deve ser identificado por um token jwt