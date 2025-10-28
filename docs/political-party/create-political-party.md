# Cadastros de partidos

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover partidos\
**PARA** inserir **OU** adaptar **OU** remover os dados de partidos

---

## CA01: Cadastrar novo Partido

**QUANDO** o usuário com permissão `Cadastros.Partido.Editar` clique em `Partidos` no menu lateral esquerdo\
**E** clicar em `Novo Partido`\
**E** preencher os campos obrigatórios do formulário\
**E** opcionalmente, inserir uma imagem\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo partido\
**E** e listar na tela de `Partidos`

## CA02: Editar Partido

**QUANDO** o usuário com permissão `Cadastros.Partido.Editar` clique em `Partidos` no menu lateral esquerdo\
**E** clicar em editar um dos partidos listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Partido

**QUANDO** o usuário com permissão `Cadastros.Partido.Excluir` clique em `Partidos` no menu lateral esquerdo\
**E** clicar em excluir um dos partidos listados\
**E** não houver vínculo com o partido\
**ENTÃO** o sistema deve remover o partido do sistema

## CA04: Impedir Remoção de Partido

**QUANDO** o usuário com permissão `Cadastros.Partido.Excluir` clique em `Partidos` no menu lateral esquerdo\
**E** clicar em excluir um dos partidos listados\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Partido

**QUANDO** o usuário com permissão `Cadastros.Partido.Visualizar` clique em `Partidos` no menu lateral esquerdo\
**E** clicar em visualizar um dos partidos listados\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

---
