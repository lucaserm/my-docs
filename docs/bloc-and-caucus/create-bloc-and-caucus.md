# Cadastros de Blocos e Bancadas

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Blocos e Bancadas\
**PARA** inserir **OU** adaptar **OU** remover os dados de Blocos e Bancadas

## CA01: Cadastrar novo Blocos e Bancadas

**QUANDO** o usuário com permissão `Cadastros.Bancadas.Editar` clique em `Blocos e Bancadas` no menu lateral esquerdo\
**E** clicar em `Nova Blocos/Bancadas`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo Blocos e Bancadas\
**E** e listar na tela de `Blocos e Bancadas`\
**E** desbloquear a aba de `membros da Blocos e Bancadas`

## CA02: Editar Blocos e Bancadas

**QUANDO** o usuário com permissão `Cadastros.Bancadas.Editar` clique em `Blocos e Bancadas` no menu lateral esquerdo\
**E** clicar em editar um dos Blocos e Bancadas listadas\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Blocos e Bancadas

**QUANDO** o usuário com permissão `Cadastros.Bancadas.Excluir` clique em `Blocos e Bancadas` no menu lateral esquerdo\
**E** clicar em excluir um das Comissões listados\
**E** não houver vínculo com a Comissão\
**ENTÃO** o sistema deve remover a Comissão do sistema

## CA04: Impedir Remoção de Blocos e Bancadas

**QUANDO** o usuário com permissão `Cadastros.Bancadas.Excluir` clique em `Blocos e Bancadas` no menu lateral esquerdo\
**E** clicar em excluir um dos Blocos e Bancadas listadas\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Blocos e Bancadas

**QUANDO** o usuário com permissão `Cadastros.Bancadas.Visualizar` clique em `Blocos e Bancadas` no menu lateral esquerdo\
**E** clicar em visualizar um dos Blocos e Bancadas listadas\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Cadastrar membro

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Membro do Blocos e Bancadas` dentro da edição\
**OU** clicar em `Membros` na listagem de Blocos e Bancadas\
**E** clicar em `Novo membro diretor`\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar o novo membro na Blocos e Bancadas

## CA07: Cancelar cadastro de membro

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Membro do Blocos e Bancadas`\
**E** clicar em `Novo membro diretor`\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E/OU** preencher os dados necessários\
**E** clicar em cancelar\
**ENTÃO** o sistema deve fechar os campos de edição

## CA08: Remover membro

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Excluir` estiver editando um já cadastrado\
**E** clicar em `Excluir` nas ações do membro\
**ENTÃO** o sistema deve remover o membro do Blocos e Bancadas

## CA09: Visualizar dados do membro

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**ENTÃO** o sistema deve abrir os campos na parte superior\
**E** inserir os dados do membro sem possibilidade de edição

## CA10: Cancelar visualização dos dados do membro

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**E** o sistema apresentar os dados\
**E** clicar em `cancelar`\
**ENTÃO** o sistema deve fechar os campos com os dados

## CA11: Editar dados do membro

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Editar` estiver editando um já cadastrado\
**E** clicar em `Editar` nas ações do membro\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar as alterações

## CA12: Filtrar membros

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Editar` estiver editando um já cadastrado\
**E** inserir algum caractere no campo de pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo nome do membro com `contains`

## CA13: Utilizar filtro avançado de membros

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Editar` estiver editando um já cadastrado\
**E** clicar em `mais filtros`\
**E** inserir algum dado de cargo **E/OU** legislatura/sessão **E/OU** Situação\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA14: Limpar filtro avançado de membros

**QUANDO** o usuário com permissão `Cadastros.Bancadas.MembrosBancada.Editar` estiver editando um já cadastrado\
**E** clicar em `mais filtros`\
**E** inserir algum dado de cargo **E/OU** legislatura/sessão **E/OU** Situação\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros
