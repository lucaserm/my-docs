# Cadastro de Períodos Sessão Legislativa

**EU, ENQUANTO** usuário com permissões adequadas
**DESEJO** criar **OU** editar **OU** remover Sessão Legislativa
**PARA** inserir **OU** adaptar **OU** remover os dados de uma Sessão Legislativa

## CA01: Cadastrar nova Sessão Legislativa

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Editar` clique em `Sessões Legislativas` no menu lateral esquerdo\
**E** clicar em `Nova Sessão Legislativa`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Sessão Legislativa\
**E** e listar na tela de `Sessão Legislativa`

## CA02: Editar Sessão Legislativa

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Editar` clique em `Sessão Legislativa` no menu lateral esquerdo\
**E** clicar em editar uma das Sessão Legislativa Listadas\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Sessão Legislativa

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Excluir` clique em `Sessão Legislativa` no menu lateral esquerdo\
**E** clicar em excluir um das Sessão Legislativa Listados\
**E** não houver vínculo com a Sessão Legislativa\
**ENTÃO** o sistema deve remover a Sessão Legislativa do sistema

## CA04: Impedir Remoção de Sessão Legislativa

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Excluir` clique em `Sessão Legislativa` no menu lateral esquerdo\
**E** clicar em excluir uma das Sessão Legislativa listadas\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Sessão Legislativa

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Visualizar` clique em `Sessão Legislativa` no menu lateral esquerdo\
**E** clicar em visualizar uma das Sessão Legislativa listadas\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Filtrar Sessão Legislativa

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Visualizar` estiver na listagem de Sessão Legislativa\
**E** inserir dados da pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo número ou descrição com `contains`

## CA07: Utilizar filtro avançado de Parlamentares

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Visualizar` estiver na listagem de Sessão Legislativa\
**E** clicar em `mais filtros`\
**E** inserir algum dado de data da eleição\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA08: Limpar filtro de Parlamentares

**QUANDO** o usuário com permissão `Periodos.SessaoLegislativa.Parlamentar.Editar` estiver editando um já cadastrado\
**E** inserir algum dado de data da eleição\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros
