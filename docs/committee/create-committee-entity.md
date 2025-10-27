# Criar Entidade de Comissão

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Comissão\
**PARA** inserir **OU** adaptar **OU** remover os dados de Comissão

## CA01: Cadastrar nova Comissão

**QUANDO** o usuário com permissão `Cadastros.Comissao.Editar` clique em `Comissões` no menu lateral esquerdo\
**E** clicar em `Nova Comissão`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Comissão\
**E** e listar na tela de `Comissões`\
**E** desbloquear a aba de `membros da Comissão`

## CA02: Editar Comissão

**QUANDO** o usuário com permissão `Cadastros.Comissao.Editar` clique em `Comissões` no menu lateral esquerdo\
**E** clicar em editar uma das Comissões listadas\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Comissão

**QUANDO** o usuário com permissão `Cadastros.Comissao.Excluir` clique em `Comissões` no menu lateral esquerdo\
**E** clicar em excluir um das Comissões listados\
**E** não houver vínculo com a Comissão\
**ENTÃO** o sistema deve remover a Comissão do sistema

## CA04: Impedir Remoção de Comissão

**QUANDO** o usuário com permissão `Cadastros.Comissao.Excluir` clique em `Comissões` no menu lateral esquerdo\
**E** clicar em excluir uma das Comissões listadas\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Comissão

**QUANDO** o usuário com permissão `Cadastros.Comissao.Visualizar` clique em `Comissões` no menu lateral esquerdo\
**E** clicar em visualizar uma das Comissões listadas\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Cadastrar membro

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Membro da Comissão` dentro da edição\
**OU** clicar em `Membros` na listagem de Comissões\
**E** clicar em `Novo membro diretor`\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar o novo membro na Comissão

## CA07: Cancelar cadastro de membro

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Membro da Comissão`\
**E** clicar em `Novo membro diretor`\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E/OU** preencher os dados necessários\
**E** clicar em cancelar\
**ENTÃO** o sistema deve fechar os campos de edição

## CA08: Remover membro

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Excluir` estiver editando um já cadastrado\
**E** clicar em `Excluir` nas ações do membro\
**ENTÃO** o sistema deve remover o membro da Comissão

## CA09: Visualizar dados do membro

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**ENTÃO** o sistema deve abrir os campos na parte superior\
**E** inserir os dados do membro sem possibilidade de edição

## CA10: Cancelar visualização dos dados do membro

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**E** o sistema apresentar os dados\
**E** clicar em `cancelar`\
**ENTÃO** o sistema deve fechar os campos com os dados

## CA11: Editar dados do membro

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Editar` estiver editando um já cadastrado\
**E** clicar em `Editar` nas ações do membro\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar as alterações

## CA12: Filtrar membros

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Editar` estiver editando um já cadastrado\
**E** inserir dados da pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA13: Limpar filtro de membros

**QUANDO** o usuário com permissão `Cadastros.Comissao.MembrosComissao.Editar` estiver editando um já cadastrado\
**E** inserir algum dado\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros
