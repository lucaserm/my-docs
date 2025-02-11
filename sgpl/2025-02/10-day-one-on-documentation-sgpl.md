---
slug: day-one-on-documentation-sgpl
title: Primeiro Dia Documentando SGPL
authors: [lucaserm]
tags: [sgpl-api, sgpl-app]
---

## Resumo do Dia

No primeiro dia de documentação do projeto **SGPL**, foquei em melhorias relacionadas à representação das emendas, refatoração de código e estudo das entidades do projeto. Abaixo estão os detalhes das atividades realizadas.

---

<!-- truncate -->

## Atividades Realizadas

### 1. Melhorias na Representação das Emendas
- **Refatoração do Código do Modal**:
    - Alterei a forma como os dados são expostos para a tabela paginada dentro do modal.
    - Mudei o local do botão e ajustei o texto do mesmo para melhorar a usabilidade.
- **Adição de Novo Botão**:
    - Adicionei um botão nas "ações" para permitir a mudança do status da emenda que ainda está pendente de desenvolvimento.

### 2. Estudo das Entidades do Projeto
- Comecei a analisar como as entidades do projeto funcionam para entender melhor o fluxo das emendas.
- Planejo adicionar um novo atributo do tipo `enum` para representar o status das emendas. Os possíveis valores serão:
    - **Em Aguardo**
    - **Aprovada**
    - **Reprovada**

---

## Próximos Passos
- Finalizar a implementação do atributo `status` nas emendas.
- Testar as mudanças realizadas no modal e na tabela paginada.

---

## Dúvidas e Desafios
- Preciso entender melhor como o fluxo de aprovação/reprovação de emendas impactará outras partes do sistema.
- Verificar se a adição do atributo `status` exigirá mudanças no banco de dados.

---

## Conclusão
O primeiro dia de documentação foi produtivo, com foco em melhorias de usabilidade e preparação para novas funcionalidades.