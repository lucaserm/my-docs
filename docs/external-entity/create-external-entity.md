# Cadastros de Entidades Externas

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Entidades Externas\
**PARA** inserir **OU** adaptar **OU** remover os dados de Entidades Externas

---

## CA01: Cadastrar nova Entidade Externa

**QUANDO** o usuário com permissão `Cadastros.EntidadeExterna.Editar` clique em `Entidades Externas` no menu lateral esquerdo\
**E** clicar em `Nova Entidade Externa`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Entidade Externa\
**E** e listar na tela de `Entidades Externas`

## CA02: Editar Entidade Externa

**QUANDO** o usuário com permissão `Cadastros.EntidadeExterna.Editar` clique em `Entidades Externas` no menu lateral esquerdo\
**E** clicar em editar um dos Entidades Externas listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Entidade Externa

**QUANDO** o usuário com permissão `Cadastros.EntidadeExterna.Excluir` clique em `Entidades Externas` no menu lateral esquerdo\
**E** clicar em excluir uma das Entidade Externa listadas\
**E** não houver vínculo com a Entidade Externa\
**ENTÃO** o sistema deve remover a Entidade Externa do sistema

## CA04: Impedir Remoção de Entidade Externa

**QUANDO** o usuário com permissão `Cadastros.EntidadeExterna.Excluir` clique em `Entidades Externas` no menu lateral esquerdo\
**E** clicar em excluir um dos Entidades Externas listados\
**E** houver algum vínculo com a Entidade Externa\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Entidade Externa

**QUANDO** o usuário com permissão `Cadastros.EntidadeExterna.Visualizar` clique em `Entidades Externas` no menu lateral esquerdo\
**E** clicar em visualizar um dos Entidades Externas listados\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

---
