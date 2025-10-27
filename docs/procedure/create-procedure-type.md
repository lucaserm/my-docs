# Configuração de Tipo de Tramitação

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Tipo de Tramitação\
**PARA** inserir **OU** adaptar **OU** remover os dados de Tipo de Tramitação

## CA01: Cadastrar novo Tipo de Tramitação

**QUANDO** o usuário com permissão `Config.TiposTramite.Editar` clique em `Tipo de Tramitação` no menu lateral esquerdo\
**E** clicar em `Novo Tipo de Tramitação`\
**E** preencher os campos abertos na listagem\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo Tipo de Tramitação\
**E** e listar na tela de `Tipo de Tramitação`

## CA02: Editar Tipo de Tramitação

**QUANDO** o usuário com permissão `Config.TiposTramite.Editar` clique em `Tipo de Tramitação` no menu lateral esquerdo\
**E** clicar em editar uma das Tipo de Tramitação listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Tipo de Tramitação

**QUANDO** o usuário com permissão `Config.TiposTramite.Excluir` clique em `Tipo de Tramitação` no menu lateral esquerdo\
**E** clicar em excluir uma das Tipo de Tramitação listados\
**E** não houver vínculo com a Tipo de Tramitação\
**ENTÃO** o sistema deve remover o Tipo de Tramitação do sistema

## CA04: Impedir Remoção de Tipo de Tramitação

**QUANDO** o usuário com permissão `Config.TiposTramite.Excluir` clique em `Tipo de Tramitação` no menu lateral esquerdo\
**E** clicar em excluir uma das Tipo de Tramitação listados\
**E** houver algum vínculo com a Tipo de Tramitação\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Cancelar adição ou edição de Tipo de Tramitação

**QUANDO** o usuário com permissão `Config.TiposTramite.Editar` clique em `Tipo de Tramitação` no menu lateral esquerdo\
**E** clicar em `Nova Tipo de Tramitação`\
**OU** editar uma das Tipo de Tramitação já cadastrados\
**E** preencher os campos abertos na listagem **OU** editar um dos dados\
**E** clicar em cancelar\
**ENTÃO** o sistema deve voltar com a listagem sem qualquer campo em aberto

## CA06: Filtrar Tipo de Tramitação

**QUANDO** o usuário com permissão `Config.TiposTramite.Visualizar` clique em `Tipo de Tramitação` no menu lateral esquerdo\
**E** adicionar um texto no campo superior direito\
**E** clicar na lupa **OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar as Tipo de Tramitação com base no texto inserido utilizando `contains`
