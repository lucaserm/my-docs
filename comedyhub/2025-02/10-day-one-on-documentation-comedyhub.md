---
slug: day-one-on-documentation-comedyhub
title: Primeiro Dia Documentando ComedyHub
authors: [lucaserm]
tags: [comedyhub, api]
date: 2025-02-10T23:59
---

## Tarefas de Desenvolvimento

### 1. Implementar Retorno do UserFolder

- **Objetivo**: Adicionar um retorno estruturado para o `userfolder`, que incluirá:
    - Nome do usuário
    - Quantidade de memes
    - Visibilidade
    - Data de criação
    - Autor do conteúdo

---

<!-- truncate -->

### 2. Refatoração: Mudar `UserFolder` para `Collection`

- **Objetivo**: Realizar uma refatoração no código, alterando o conceito de `UserFolder` para `Collection`. Isso deve garantir uma maior consistência e organização no sistema.

### 3. Separar Enums de Dentro das Classes

- **Objetivo**: Extrair os **enums** que estão atualmente implementados dentro das classes para arquivos e locais separados, melhorando a modularização do código.

### 4. Visibilidade das Collections

- **Objetivo**: Implementar controles de visibilidade das `collections`. Isso deve permitir que as coleções possam ser visíveis ou privadas, de acordo com as permissões definidas.

### 5. Adicionar Comentários nas Coleções

- **Objetivo**: Incluir uma funcionalidade para que as coleções possam receber **comentários**. Isso permitirá que os usuários interajam com as coleções, oferecendo feedback ou discutindo seu conteúdo.

### 6. Organização da API

- **Objetivo**: Melhorar a estrutura e organização da API para que ela siga um padrão similar ao de microsserviços. Isso envolve refatorações em endpoints e na arquitetura da API.

### 7. Restrições no Cargo do Usuário

- **Objetivo**: Impedir que um usuário altere o próprio cargo. Esse tipo de controle de permissão deve ser implementado para garantir a integridade do sistema de roles.

---

<!-- truncate -->