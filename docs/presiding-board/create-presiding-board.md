# Cadastros de Mesa Diretora

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Mesa Diretora\
**PARA** inserir **OU** adaptar **OU** remover os dados de Mesa Diretora

## CA01: Cadastrar nova Mesa Diretora

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.Editar` clique em `Mesas Diretoras` no menu lateral esquerdo\
**E** clicar em `Nova Mesa Diretora`\
**E** selecionar um dos usuários cadastrados pelo setup\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Mesa Diretora\
**E** e listar na tela de `Mesas Diretoras`\
**E** desbloquear a aba de `membros da mesa diretora`

## CA02: Editar Mesa Diretora

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.Editar` clique em `Mesas Diretoras` no menu lateral esquerdo\
**E** clicar em editar uma das Mesas Diretoras listadas\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Mesas Diretoras

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.Excluir` clique em `Mesas Diretoras` no menu lateral esquerdo\
**E** clicar em excluir um das Mesas Diretoras listados\
**E** não houver vínculo com a Mesa Diretora\
**ENTÃO** o sistema deve remover a Mesa Diretora do sistema

## CA04: Impedir Remoção de Mesas Diretoras

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.Excluir` clique em `Mesas Diretoras` no menu lateral esquerdo\
**E** clicar em excluir uma das Mesas Diretoras listadas\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Mesas Diretoras

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.Visualizar` clique em `Mesas Diretoras` no menu lateral esquerdo\
**E** clicar em visualizar uma das Mesas Diretoras listadas\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Cadastrar membro

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Membro da mesa diretora` dentro da edição`\
**OU** clicar em `Membros`na listagem de mesas diretoras\
**E** clicar em`Novo membro diretor`\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar o novo membro na mesa diretora

## CA07: Cancelar cadastro de membro

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Membro da mesa diretora`\
**E** clicar em `Novo membro diretor`\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E/OU** preencher os dados necessários\
**E** clicar em cancelar\
**ENTÃO** o sistema deve fechar os campos de edição

## CA08: Remover membro

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Excluir` estiver editando um já cadastrado\
**E** clicar em `Excluir` nas ações do membro\
**ENTÃO** o sistema deve remover o membro da mesa diretora

## CA09: Visualizar dados do membro

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**ENTÃO** o sistema deve abrir os campos na parte superior\
**E** inserir os dados do membro sem possibilidade de edição

## CA10: Cancelar visualização dos dados do membro

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**E** o sistema apresentar os dados\
**E** clicar em `cancelar`\
**ENTÃO** o sistema deve fechar os campos com os dados

## CA11: Filtrar membros

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Editar` estiver editando um já cadastrado\
**E** inserir algum caractere no campo de pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo nome do membro com `contains`

## CA12: Utilizar filtro avançado de membros

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Editar` estiver editando um já cadastrado\
**E** clicar em `mais filtros`\
**E** inserir algum dados de cargo **E/OU** atividade\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA13: Limpar filtro avançado de membros

**QUANDO** o usuário com permissão `Cadastros.MesaDiretora.MembrosMesaDiretora.Editar` estiver editando um já cadastrado\
**E** clicar em `mais filtros`\
**E** inserir algum dados de cargo **E/OU** atividade
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros
