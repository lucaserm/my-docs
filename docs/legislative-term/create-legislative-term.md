# Cadastro de Períodos Legislaturas

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Legislaturas\
**PARA** inserir **OU** adaptar **OU** remover os dados de uma Legislaturas

---

## CA01: Cadastrar nova Legislaturas

**QUANDO** o usuário com permissão `Periodos.Legislatura.Editar` clique em `Legislaturas` no menu lateral esquerdo\
**E** clicar em `Nova Legislaturas`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Legislaturas\
**E** e listar na tela de `Legislaturas`\
**E** desbloquear a aba de `Parlamentares`

## CA02: Editar Legislaturas

**QUANDO** o usuário com permissão `Periodos.Legislatura.Editar` clique em `Legislaturas` no menu lateral esquerdo\
**E** clicar em editar uma das Legislaturas Listadas\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Legislaturas

**QUANDO** o usuário com permissão `Periodos.Legislatura.Excluir` clique em `Legislaturas` no menu lateral esquerdo\
**E** clicar em excluir um das Legislaturas listados\
**E** não houver vínculo com a Legislatura\
**ENTÃO** o sistema deve remover a Legislatura do sistema

## CA04: Impedir Remoção de Legislaturas

**QUANDO** o usuário com permissão `Periodos.Legislatura.Excluir` clique em `Legislaturas` no menu lateral esquerdo\
**E** clicar em excluir uma das Legislaturas listadas\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Legislaturas

**QUANDO** o usuário com permissão `Periodos.Legislatura.Visualizar` clique em `Legislaturas` no menu lateral esquerdo\
**E** clicar em visualizar uma das Legislaturas listadas\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Filtrar Legislatura

**QUANDO** o usuário com permissão `Periodos.Legislatura.Visualizar` estiver na listagem de legislaturas\
**E** inserir dados da pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo número ou descrição com `contains`

## CA07: Utilizar filtro avançado de Parlamentares

**QUANDO** o usuário com permissão `Periodos.Legislatura.Visualizar` estiver na listagem de legislaturas\
**E** clicar em `mais filtros`\
**E** inserir algum dado de data da eleição\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA08: Limpar filtro de Parlamentares

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Editar` estiver editando um já cadastrado\
**E** inserir algum dado de data da eleição\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros

## CA09: Inserir Parlamentar na legislatura

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Parlamentares` dentro da edição`\
**OU** clicar em `Parlamentares`na listagem de Legislaturas\
**E** clicar em`Associar parlamentar a legislatura `\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve associar o parlamentar na Legislatura

## CA10: Cancelar cadastro de parlamentar

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Parlamentares`\
**E** clicar em `Associar parlamentar a legislatura `\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E/OU** preencher os dados necessários\
**E** clicar em cancelar\
**ENTÃO** o sistema deve fechar os campos de edição

## CA11: Remover usuário

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Excluir` estiver editando um já cadastrado\
**E** clicar em `Excluir` nas ações do membro\
**ENTÃO** o sistema deve remover o usuário da Legislaturas

## CA12: Visualizar dados do Parlamentar

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**ENTÃO** o sistema deve abrir os campos na parte superior\
**E** inserir os dados do membro sem possibilidade de edição

## CA13: Cancelar visualização dos dados do Parlamentar

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**E** o sistema apresentar os dados\
**E** clicar em `cancelar`\
**ENTÃO** o sistema deve fechar os campos com os dados

## CA14: Editar dados do Parlamentar

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Editar` estiver editando um já cadastrado\
**E** clicar em `Editar` nas ações do membro\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar as alterações

## CA15: Filtrar Parlamentares

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Editar` estiver editando um já cadastrado\
**E** inserir dados da pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo nome do usuário com `contains`

## CA16: Utilizar filtro avançado de Parlamentares

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Editar` estiver editando um já cadastrado\
**E** clicar em `mais filtros`\
**E** inserir algum dado de data da diplomação **E/OU** Situação\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA17: Limpar filtro de Parlamentares

**QUANDO** o usuário com permissão `Periodos.Legislatura.Parlamentar.Editar` estiver editando um já cadastrado\
**E** inserir algum dado de data da diplomação **E/OU** Situação\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros

---
