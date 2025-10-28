# Criar Emenda

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** remover evento de Emenda\
**PARA** inserir **OU** remover os dados de Emenda

---

## CA01: Cadastrar nova Emenda

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` clicar em
`Nova Movimentação`\
**E** clicar em `Emenda`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma nova Emenda\
**E** mostrar na tela de `Emenda em elaboração`

---

## RN's

- [x] Para criar uma emenda, é **necessário**, um autor, um tipo, um assunto, uma localidade (Cidade), dizer se é reservada ou pública, se possui justificativa e o texto proposto.
- [x] Caso o Tipo seja `Emenda Aglunitativa`, é **necessário** informar a ementa da emenda.

---
