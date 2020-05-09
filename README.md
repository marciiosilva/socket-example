# socket-example
Exemplo de socket nos cenários: Servidor, Sala "News" conectada no socket, e envio de mensagens para todos no servidor e para sala específica.

## Para executar:

Após ter o NodeJS instalado (http://www.nodejs.org), basta no diretório da aplicação digitar:

Rodando o projeto com NPM:

```
npm install
npm run
```
Rodando o projeto com Yarn:

```
yarn install
yarn start
```
**Testes realizados usando o terminal do meu editor (vscode: https://code.visualstudio.com/download)**

- Para visualizar tudo, abra 3 terminais na raiz do projeto, onde vamos simular o Cenário do Servidor (Responsável por escutar todas as salas (rooms) e pessoas conectadas no socket), Sala Especifica (onde algumas pessoas ouvem mensagens de uma sala especifica no socket) e o cenário de envio das mensagens (desenvolvido em nodejs para este exemplo, mas pode ser realizado pelo front-end que irá consumir a sua aplicação ou por outras linguagens (como PHP por exmeplo) através da requisição HTTP POST).

**No Terminal 1 digite:**

```
node serve.js
```

**No Terminal 2 digite:**

```
node connectRoom.js
```

**No Terminal 3 digite:**

```
node envia.js
```

<!-- CONTRIBUTING -->

## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request
