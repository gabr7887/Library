# App

Libary app

## RFs (requisitos funcionais)

- [X] deve ser possivel se cadastrar
- [X] deve ser possivel se autenticar
- [X] deve ser possivel obter um perfil de um usuario logado
- [X] deve ser possivel cadastrar um livro
- [X] deve ser possivel obter um livro
- [X] deve ser possivel ver livros por pesquisa de nome


## RNs (regras de negócio)

- [X] o usuário não pode se cadastrar com um e-mail duplicado
- [ ] um livro só pode ser apagado pelo autor

## RNFs (requisitos não-funcionais)

- [X] A senha do usúario precisa estar criptografada 
- [X] Os dados da aplicação precisam ser persistidos em um banco postgresSQL 
- [ ] Todas as listas de dados precisam estar paginadas com no maximo 20 itens
- [ ] O usuario deve ser identificado por um token jwt