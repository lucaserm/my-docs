---
title: Atualização Diária - 15/02
authors: [lucaserm]
tags: [api]
date: 2025-02-15T23:59  
---

## Resumo do Dia

Hoje implementamos melhorias significativas no sistema, incluindo a adição de `createdAt` e `updatedAt` em todas as classes, a simplificação da gestão de roles e ajustes no rate limit das APIs. Além disso, integramos o Lombok ao projeto, o que trouxe ganhos de produtividade e redução de código boilerplate.

---

<!-- truncate -->

## Atividades Realizadas

1. **Implementação de `createdAt` e `updatedAt`**: Adicionamos os campos `createdAt` e `updatedAt` em todas as classes para rastrear a criação e a atualização de registros. Isso melhora a auditoria e o monitoramento dos dados.

2. **Integração do Lombok**: Introduzimos o Lombok no projeto, uma biblioteca que automatiza a geração de código boilerplate, como getters, setters, construtores e métodos `toString`. O Lombok traz diversos benefícios:
    - **Redução de Código**: Elimina a necessidade de escrever manualmente métodos repetitivos.
    - **Legibilidade**: Mantém o código mais limpo e fácil de entender.
    - **Manutenção Simplificada**: Alterações nos campos são refletidas automaticamente nos métodos gerados.

3. **Simplificação da Gestão de Roles**: Mudamos a forma como as roles são tratadas. Agora, as roles são um atributo enum, e o antigo role "USER" foi removido. As roles disponíveis agora são apenas `ADMIN` e `MANAGER`, o que simplifica a lógica de permissões.

4. **Ajustes no Rate Limit**: Configuramos o rate limit global e por rota para melhorar a segurança e a performance do sistema:
    - Globalmente: 1000 requisições por minuto.
    - `/api/register`: 1 requisição por minuto.
    - `/api/login`: 5 requisições por minuto.
    - `/api/memes`: 2 requisições por minuto.
    - `/api/comments`: 5 requisições por minuto.

5. **Correções Relacionadas ao Lombok**: Resolvemos erros causados pela integração do Lombok, garantindo que todas as classes e métodos gerados funcionem corretamente.

## Próximos Passos

1. **Testes de Performance**: Realizar testes para garantir que as mudanças no rate limit e na gestão de roles não afetem negativamente a experiência do usuário.
2. **Documentação do Lombok**: Criar uma documentação interna sobre o uso do Lombok para facilitar a adoção pela equipe.

## Dúvidas e Desafios

- Como garantir que a remoção do role "USER" não cause impactos em sistemas legados ou integrações externas?
- Quais são as melhores práticas para monitorar e ajustar os limites de rate limit em produção?

## Conclusão

As implementações realizadas hoje trouxeram melhorias significativas no sistema, desde a auditoria de dados até a simplificação da gestão de roles e a integração do Lombok. Essas mudanças não apenas aumentam a eficiência do desenvolvimento, mas também garantem um sistema mais seguro e escalável.