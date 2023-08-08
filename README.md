# Desafio Pontua - Marvel Dashboard

Desafio de front-end para a empresa Pontua.

## Como configurar o projeto

Após clonar o projeto, rode o comando npm install na pasta raiz para instalar as dependências necessárias

- Após criar conta no site https://developer.marvel.com/, entre na opção My Developer Account, e no campo de Authorized Referrers, adicione um \* para autorizar as requisições para qualquer domínio.

- Crie um arquivo .env na pasta raiz do projeto e adicione as seguintes chaves:

```js
   VITE_MARVEL_URL=https://gateway.marvel.com/v1/public
   VITE_MARVEL_PUBLIC_API_KEY=SUACHAVEMARVELPUBLICA
```

- Execute o servidor web:

```js
   npm run dev
```

- Substitua `SUACHAVEMARVELPUBLICA` pela chave disponivel em My Developer Account

- E-mail para login: douglas@pontua.com.br
- Senha: 1234
