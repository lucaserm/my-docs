---
title: Criar Proposição
---

# Criar Proposição

**EU, ENQUANTO** usuário com permissão `Proposicao.NovaProposiocao.DadosGerais.Editar`\
**DESEJO** criar uma proposição\
**PARA** iniciar o processo de tramitação dessa proposta

---

## CA01: Criar Proposta

**QUANDO** o usuário com permissão clicar em “nova proposição” no *menu lateral*\
**OU** na listagem de proposições\
**E** preencher os campos obrigatórios da criação de uma proposta\
**E** clicar em salvar\
**ENTÃO** o sistema deve criar uma nova proposta com as informações inseridas no formulário\
**E** criar eventos de dados gerais\
**E** de regime de tramitação\
**E** mostrar os dados de “Autor”, “Coautor(es)”, “Tipo de Proposição”, “Data de cadastro”, “Sigla” e “Ementa” no cabeçalho da proposta


## CA02: Obrigar inserir ementa

**QUANDO** o usuário com permissão clicar em “nova proposição” no menu lateral\
**OU** na listagem de proposições\
**E** preencher com um tipo de proposta (campo obrigatório) que em sua configuração esteja marcado o campo “Gera emenda”\
**ENTÃO** o sistema deve obrigar inserir emenda para realizar o cadastro

## CA03: Imprimir texto dos dados gerais

**QUANDO** o usuário com acesso a proposta\
**E** clicar em “Imprimir texto proposto”\
**ENTÃO** o sistema deve abrir um PDFviewer com o documento nato digital da proposta

## RN's

- [x] Deve existir uma permissão `Proposicao.NovaProposiocao.DadosGerais.Editar`
- [x] Deve existir um menu lateral na aplicação
- [x] Deve existir uma entidade de Proposição
- [x] Deve-se criar o evento de 'Dados Gerais' ao criar uma proposição
- [x] Deve-se criar o evento de 'Regime de Tramitação' ao criar uma proposição
- [x] Deve existir os campos de "Autor", "Coautor(es)", "Tipo de Proposição", "Data de cadastro", "Sigla" e "Ementa"
- [x] O campo 'Tipo de Proposta' deve ser obrigatório para a criação de uma nova proposição
