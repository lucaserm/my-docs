# Cadastros Períodos Sessão Parlamentar

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Sessão Parlamentar\
**PARA** inserir **OU** adaptar **OU** remover os dados de uma Sessão Parlamentar

---

## CA01: Cadastrar nova Sessão Parlamentar

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Editar` clique em `Sessões Parlamentares` no menu lateral esquerdo\
**E** clicar em `Nova Sessão Parlamentar`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Sessão Parlamentar\
**E** e listar na tela de `Sessão Parlamentar`

## CA02: Editar Sessão Parlamentar

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Editar` clique em `Sessão Parlamentar` no menu lateral esquerdo\
**E** clicar em editar uma das Sessão Parlamentar listadas\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Sessão Parlamentar

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Excluir` clique em `Sessão Parlamentar` no menu lateral esquerdo\
**E** clicar em excluir um das Sessão Parlamentar listadas\
**E** não houver vínculo com a Sessão Parlamentar\
**ENTÃO** o sistema deve remover a Sessão Parlamentar do sistema

## CA04: Impedir Remoção de Sessão Parlamentar

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Excluir` clique em `Sessão Parlamentar` no menu lateral esquerdo\
**E** clicar em excluir uma das Sessão Parlamentar listadas\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Sessão Parlamentar

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Visualizar` clique em `Sessão Parlamentar` no menu lateral esquerdo\
**E** clicar em visualizar uma das Sessão Parlamentar listadas\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Filtrar Sessão Parlamentar

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Visualizar` estiver na listagem de Sessão Parlamentar\
**E** inserir dados da pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo número ou descrição com `contains`

## CA07: Utilizar filtro avançado de Parlamentares

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Visualizar` estiver na listagem de Sessão Parlamentar\
**E** clicar em `mais filtros`\
**E** inserir algum dado de data da eleição\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA08: Limpar filtro de Parlamentares

**QUANDO** o usuário com permissão `Periodos.SessaoParlamentar.Editar` estiver editando um já cadastrado\
**E** inserir algum dado de data da eleição\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros

---
