---
id: api-reference
title: API Reference
---

# API Reference

ComedyHub's API is based around two core layers, a HTTPS/REST API for general operations, and persistent secure WebSocket based connection for sending and subscribing to real-time events. The most common use case of the ComedyHub API will be providing a service, or access to a platform through the JWT token.

#### Base URL

```http
https://api.thecomedyhub.com.br/api
```

## API Versioning

ComedyHub exposes different versions of our API. You should specify which version to use by including it in the request path like `https://api.thecomedyhub.com.br/api/v{version_number}`. Omitting the version number from the route will route requests to the current default version (marked below). You can find the change log for the newest API version here.

##### API Versions

| **VERSION** | **STATUS**   | **DEFAULT** |
| ----------- | ------------ | ----------- |
| 2           | Available    | ✅          |
| 1           | Discontinued | ❌          |

## Error Messages

Starting in API v1, we've created error formatting in form error responses. The response will tell you which JSON field contains the error, the status code, and a human readable error message. We will be frequently adding new error messages, so a complete list of errors is not feasible and would be almost instantly out of date. Here are some examples instead:

- `401 Unauthorized`

```json
{
  "message": "Acesso negado. Autenticação necessária.",
  "field": null,
  "statusCode": 401
}
```

- `409 Conflict`

```json
{
  "message": "Erro de integridade de dados: ERROR: value too long for type character varying(255)",
  "field": null,
  "statusCode": 409
}
```

- `422 Unprocessable Entity`

```json
[
  {
    "message": "Description must be at most 200 characters",
    "field": "description",
    "statusCode": 422
  },
  {
    "message": "Visibility must not be null",
    "field": "visibility",
    "statusCode": 422
  },
  {
    "message": "Name must not be blank",
    "field": "name",
    "statusCode": 422
  }
]
```

- `498 Invalid Token`

```json
{
  "message": "Token inválido ou expirado",
  "field": null,
  "statusCode": 498
}
```

- `503 Service Unavailable`

```json
{
  "timestamp": "2025-08-09T19:59:08.754+00:00",
  "path": "/api/v2/notifications",
  "status": 503,
  "error": "Service Unavailable",
  "requestId": "ff29a309-14778"
}
```

## Authentication

Authenticating with the ComedyHub API can be done in just one way:

1. Using an JWT bearer token gained through the API.

Authentication is performed with the `Authorization` HTTP header in the format `Authorization: Bearer YOUR_JWT_TOKEN`.

#### Example Bearer Token Authorization Header

`Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.token.token`

## UUID

## ISO8601 Date/Time

ComedyHub utilizes the [`ISO8601`](https://www.loc.gov/standards/datetime/iso-tc154-wg5_n0038_iso_wd_8601-1_2016-02-16.pdf) format for most Date/Times returned in our models. This format is referred to as type `ISO8601` within tables in this documentation.

## Nullable and Optional Resource Fields

Resource fields that may contain a `null` value have types that are prefixed with a question mark. Resource fields that are optional have names that are suffixed with a question mark.

#### Example Nullable and Optional Fields

| **FIELD**                    | **TYPE** |
| ---------------------------- | -------- |
| optional_field?              | string   |
| nullable_field               | ?string  |
| optional_and_nullable_field? | ?string  |

## HTTP API

### Rate Limiting

The HTTP API tries to implements a process for limiting and preventing excessive requests in accordance with [`RFC 6585`](https://datatracker.ietf.org/doc/html/rfc6585#section-4).
API users that regularly hit and ignore rate limits will have their API keys revoked, and be blocked from the platform. For more information on rate limiting of requests, please see the [`Rate Limits`](topics/rate-limits) section.

### Boolean Query Strings

Certain endpoints in the API are documented to accept booleans for their query string parameters.
While there is no standard system for boolean representation in query string parameters, Discord represents such cases using `True`, `true`, or `1` for true and `False`, `false` or `0` for false.
