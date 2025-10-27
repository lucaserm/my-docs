# Padrões de Arquitetura

O SGPL utiliza de alguns padrões de arquitetura, mas antes de aprofundar nos padrões, é importante entender o contexto em que eles são aplicados.

## Arquitetura Monolítica

A arquitetura monolítica é uma abordagem de desenvolvimento de software onde todos os componentes do sistema são implementados em uma única aplicação. Essa abordagem é simples e fácil de entender, mas pode ser limitada em termos de escalabilidade e manutenibilidade.

Conceitos como [Controllers](controllers.md), [Services](services.md) são muito importantes para o funcionamento do sistema. Eles são responsáveis por gerenciar as requisições do usuário e interagir com os dados do sistema. Além disso, o [Repository](repositories.md) é responsável por armazenar e recuperar dados do sistema.


## Ports and Adapters (Hexagonal)

O padrão Ports and Adapters é uma abordagem de arquitetura onde os componentes do sistema são organizados em camadas, cada uma com uma responsabilidade específica. A camada mais externa é a camada de entrada, que recebe as requisições do usuário e as encaminha para a camada de domínio. A camada de domínio é responsável por implementar as regras de negócio do sistema. A camada de infraestrutura é responsável por implementar as dependências externas do sistema, como bancos de dados e serviços externos.

O padrão Ports and Adapters é uma abordagem flexível e escalável, pois permite que os componentes do sistema sejam substituídos facilmente sem afetar o restante do sistema. Além disso, ele facilita a manutenção do sistema, pois cada componente tem uma responsabilidade específica e é fácil de entender e modificar.

Por isso a arquitetura do api-sgpl consiste em:

- `adapter`: tudo que entra ou sai do sistema
- `application`: tudo que interage com a aplicação (infra)
- `domain`: tudo que interage com o domínio da aplicação
