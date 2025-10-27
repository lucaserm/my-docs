# Configuração de Atividade

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Atividade\
**PARA** inserir **OU** adaptar **OU** remover os dados de Atividade

## CA01: Cadastrar novo Atividade

**QUANDO** o usuário com permissão `Config.Atividades.Editar` clique em `Atividade` no menu lateral esquerdo\
**E** clicar em `Nova Atividade`\
**E** preencher os campos abertos na listagem\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Atividade\
**E** e listar na tela de `Atividades`

## CA02: Editar Atividade

**QUANDO** o usuário com permissão `Config.Atividades.Editar` clique em `Atividades` no menu lateral esquerdo\
**E** clicar em editar uma das Atividades listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Atividade

**QUANDO** o usuário com permissão `Config.Atividades.Excluir` clique em `Atividades` no menu lateral esquerdo\
**E** clicar em excluir uma das Atividades listados\
**E** não houver vínculo com a Atividade\
**ENTÃO** o sistema deve remover o Atividade do sistema

## CA04: Impedir Remoção de Atividade

**QUANDO** o usuário com permissão `Config.Atividades.Excluir` clique em `Atividades` no menu lateral esquerdo\
**E** clicar em excluir uma das Atividades listados\
**E** houver algum vínculo com a Atividade\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Cancelar adição ou edição de Atividade

**QUANDO** o usuário com permissão `Config.Atividades.Editar` clique em `Atividades` no menu lateral esquerdo\
**E** clicar em `Nova Atividade`\
**OU** editar uma das Atividades já cadastrados\
**E** preencher os campos abertos na listagem **OU** editar um dos dados\
**E** clicar em cancelar\
**ENTÃO** o sistema deve voltar com a listagem sem qualquer campo em aberto

## CA06: Filtrar Atividade

**QUANDO** o usuário com permissão `Config.Atividades.Visualizar` clique em `Atividades` no menu lateral esquerdo\
**E** adicionar um texto no campo superior direito\
**E** clicar na lupa **OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar as Atividades com base no texto inserido utilizando `contains`
