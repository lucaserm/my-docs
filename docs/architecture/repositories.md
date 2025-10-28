# Repositories

---

## O que são os Repositories?

O "Repository" é responsável por armazenar e recuperar dados do sistema. Ele é uma camada de abstração que permite que o sistema interaja com diferentes tipos de armazenamento de dados, como bancos de dados, arquivos ou serviços externos.

Infelizmente no SGPL, o suporte a Repositories não está completo, tendo em vista que o benefício de ter uma camada de abstração é que o sistema pode interagir com diferentes tipos de armazenamento de dados, como bancos de dados, arquivos ou serviços externos.

Geralmente em aplicações maiores o "Repository" é uma interface que define os métodos necessários para interagir com o armazenamento de dados. Essa interface é implementada por classes concretas que fornecem a lógica específica para cada tipo de armazenamento.

Mas atualmente a 'abstração' se resume a uma implementação direta do JPA, o que não é errado, mas se quiséssemos implementar um Repository para armazenamento em memória, por exemplo, teríamos que criar uma nova classe que implemente métodos específicos para essa implementação, ou seja, não estamos abstraindo.

---

## Onde estão localizados?

Para Repositories que salvam dados no banco local ou integrações, usa-se respectivamente:

- `src/main/java/br/com/azi/sgpl/adapter/gateway/dataprovider`
- `src/main/java/br/com/azi/sgpl/adapter/gateway/integration/<integration>/repository`

---
