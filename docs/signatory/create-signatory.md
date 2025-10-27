# Cadastros de Signatários

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Signatários\
**PARA** inserir **OU** adaptar **OU** remover os dados de Signatários

## CA01: Cadastrar novo Signatário

**QUANDO** o usuário com permissão `Cadastros.Signatarios.Editar` clique em `Signatários` no menu lateral esquerdo\
**E** clicar em `Novo Signatário`\
**E** preencher os campos obrigatórios do formulário\
**E** selecionar um dos usuários cadastrados no sistema\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo Signatário\
**E** e listar na tela de `Signatários`

## CA02: Editar Signatário

**QUANDO** o usuário com permissão `Cadastros.Signatário.Editar` clique em `Signatários` no menu lateral esquerdo\
**E** clicar em editar um dos Signatários listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Signatário

**QUANDO** o usuário com permissão `Cadastros.Signatário.Excluir` clique em `Signatários` no menu lateral esquerdo\
**E** clicar em excluir um dos Signatário listados\
**E** não houver vínculo com o Signatário\
**ENTÃO** o sistema deve remover o Signatário do sistema

## CA04: Impedir Remoção de Signatário

**QUANDO** o usuário com permissão `Cadastros.Signatário.Excluir` clique em `Signatários` no menu lateral esquerdo\
**E** clicar em excluir um dos Signatários listados\
**E** houver algum vínculo com o Signatário\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Signatário

**QUANDO** o usuário com permissão `Cadastros.Signatário.Visualizar` clique em `Signatários` no menu lateral esquerdo\
**E** clicar em visualizar um dos Signatários listados\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados
