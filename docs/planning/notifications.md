---
id: notifications
title: Notifications
description: Planning notifications.
slug: /planning/notifications
tags:
  - Releases
  - docusaurus
---

# Gerenciamento de notificações

## Filtragem de notificações

Deve ser possível filtrar notificações por:

- **Tipo:**

  - `COMMENT_CREATED`, `NEW_FOLLOWER`, etc.
    A rota deve aceitar esses valores separados por vírgula, ex:

```bash
  GET /notifications?type=COMMENT_CREATED,NEW_FOLLOWER&isRead=true&limit=20&cursor=<createdAt>
  Authorization: Bearer
```

- Status de leitura: `isRead=true` ou `false`
- Prioridade: `LOW`, `MEDIUM`, `HIGH`, `URGENT`

## Marcar notificação como lida

- Endpoint para marcar uma notificação específica como lida pelo `id`.
- Endpoint para marcar todas as notificações como lidas, respeitando os filtros da seção: [Filtragem de notificações](#filtragem-de-notificações)

## Verificar notificações não lidas

- Endpoint para verificar se existem notificações não lidas para o usuário.

# Estrutura da notificação

## Campos básicos da entidade `Notification`

| **Campo**   | **Tipo**                                                         | **Descrição**                             |
| ----------- | ---------------------------------------------------------------- | ----------------------------------------- |
| `id`        | `string`                                                         | Identificador único                       |
| `readAt`    | `Date \| null`                                                   | Data e hora de leitura (nulo se não lida) |
| `createdAt` | `Date`                                                           | Data e hora da criação                    |
| `priority`  | `Priority`                                                       | Prioridade da notificação                 |
| `userId`    | `string`                                                         | ID do usuário destinatário                |
| `type`      | [`NotificationType`](#dados-específicos-por-tipo-de-notificação) | Tipo da notificação                       |
| `data`      | `Object`                                                         | Dados específicos conforme o tipo         |

## Valores possíveis para `Priority`

- `LOW`
- `MEDIUM`
- `HIGH`
- `URGENT`

## Dados específicos por tipo de notificação

### Entidades

- #### `NEW_FOLLOWER`

> João começou a seguir você.

- Priority: LOW

| **Campo** | **Tipo**          |
| --------- | ----------------- |
| follower  | [`Actor`](#actor) |

- #### `POST_LIKED`

> João curtiu seu post.

- Priority: LOW

| **Campo** | **Tipo**                      |
| --------- | ----------------------------- |
| post      | [`PostPreview`](#postpreview) |
| actor     | [`Actor`](#actor)             |

- #### `COMMENT_CREATED`

> João comentou no seu post.

<aside>
💡 Não notificar se for resposta.
</aside>

- Priority: HIGH

| **Campo** | **Tipo**                            |
| --------- | ----------------------------------- |
| actor     | [`Actor`](#actor)                   |
| comment   | [`CommentPreview`](#commentpreview) |
| post      | [`PostPreview`](#postpreview)       |

- #### `COMMENT_REPLIED`

> João respondeu seu comentário.

- Priority: HIGH

| **Campo** | **Tipo**                        |
| --------- | ------------------------------- |
| reply     | [`ReplyPreview`](#replypreview) |
| actor     | [`Actor`](#actor)               |

- #### `COMMENT_LIKED`

> João curtiu seu comentário.

- Priority: MEDIUM

| **Campo** | **Tipo**                            |
| --------- | ----------------------------------- |
| actor     | [`Actor`](#actor)                   |
| comment   | [`CommentPreview`](#commentpreview) |

- #### `REPLY_LIKED`

- Priority: MEDIUM

| **Campo** | **Tipo**                        |
| --------- | ------------------------------- |
| actor     | [`Actor`](#actor)               |
| reply     | [`ReplyPreview`](#replypreview) |

- #### `MESSAGE_RECEIVED`

> 'Olá, bom dia!'

- Priority: URGENT

| **Campo** | **Tipo**                            |
| --------- | ----------------------------------- |
| message   | [`MessagePreview`](#messagepreview) |
| actor     | [`Actor`](#actor)                   |

- #### `COMMENT_MENTION`

> João mencionou você em um comentário.

- Priority: URGENT

| **Campo** | **Tipo**                            |
| --------- | ----------------------------------- |
| comment   | [`CommentPreview`](#commentpreview) |
| actor     | [`Actor`](#actor)                   |

- #### `REPLY_MENTION`

> João mencionou você em uma resposta.

- Priority: URGENT

| **Campo** | **Tipo**                        |
| --------- | ------------------------------- |
| reply     | [`ReplyPreview`](#replypreview) |
| actor     | [`Actor`](#actor)               |

- #### `MESSAGE_MENTION`

> João mencionou você em uma mensagem.

- Priority: URGENT

| **Campo** | **Tipo**                            |
| --------- | ----------------------------------- |
| message   | [`MessagePreview`](#messagepreview) |
| actor     | [`Actor`](#actor)                   |

- #### `SYSTEM_POST_PUBLISHED`

> Seu chub foi publicado!

- Priority: LOW

| **Campo** | **Tipo**                      |
| --------- | ----------------------------- |
| post      | [`PostPreview`](#postpreview) |

- #### `SYSTEM_POST_IN_REVIEW`

> Seu chub foi para revisão.

- Priority: LOW

| **Campo** | **Tipo**                      |
| --------- | ----------------------------- |
| post      | [`PostPreview`](#postpreview) |

- #### `SYSTEM_POST_REJECTED`

> Seu chub foi rejeitado.

- Priority: HIGH

### Value Objects

- #### `Actor`

| **Campo** | **Tipo**       |
| --------- | -------------- |
| id        | string         |
| avatarUrl | string \| null |
| username  | string         |
| name      | string         |

- #### `PostPreview`

| **Campo**    | **Tipo**         |
| ------------ | ---------------- |
| id           | `string`         |
| thumbnailUrl | `string \| null` |

<aside>
💡 `thumbnailUrl` pode ser `null` porque o Post pode estar em revisão.
</aside>

- #### `CommentPreview`

| **Campo**      | **Tipo**  |
| -------------- | --------- |
| id             | `string`  |
| postId         | `string`  |
| content        | `string`  |
| hasAttachments | `boolean` |

- #### `ReplyPreview` extends `CommentPreview`

| **Campo** | **Tipo** |
| --------- | -------- |
| commentId | `string` |

- #### `MessagePreview`

| **Campo**      | **Tipo**  |
| -------------- | --------- |
| id             | `string`  |
| chatId         | `string`  |
| content        | `string`  |
| hasAttachments | `boolean` |

## Evitar múltiplas notificações

O tipo de notificação que possuir maior prioridade precederá caso dois tipos de notificações sejam cabíveis.

Ex:

- Usuário comentou no seu meme, te mencionando.

> _Nesse caso, `COMMENT_MENTION` será a única enviada, pois tem prioridade `URGENT` enquanto `COMMENT_CREATED` tem prioridade `HIGH`_

Caso as duas notificações possuam mesmo nível de prioridade, escolha manualmente.
