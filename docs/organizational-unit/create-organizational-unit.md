# Cadastros de Unidade Organizacional

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Unidade Organizacional\
**PARA** inserir **OU** adaptar **OU** remover os dados de uma Unidade Organizacional

---

## CA01: Cadastrar nova Unidade Organizacional

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.Editar` clique em `Unidades Organizacionais` no menu lateral esquerdo\
**E** clicar em `Nova Unidade Organizacional`\
**E** preencher os campos obrigatórios do formulário\
**E** selecionar um usuário chefe da Unidade organizacional\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Unidade Organizacional\
**E** e listar na tela de `Unidades Organizacionais`\
**E** desbloquear a aba de `usuários`\
**E** vincular Unidade Organizacional ao usuário selecionado como chefe

## CA02: Editar Unidade Organizacional

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.Editar` clique em `Unidades Organizacionais` no menu lateral esquerdo\
**E** clicar em editar uma das Unidades Organizacionais Listadas\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Unidade Organizacional

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.Excluir` clique em `Unidade Organizacional` no menu lateral esquerdo\
**E** clicar em excluir um das Unidades Organizacionais listados\
**E** não houver vínculo com a Unidade Organizacional\
**ENTÃO** o sistema deve remover a Unidade Organizacional do sistema

## CA04: Impedir Remoção de Unidade Organizacional

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.Excluir` clique em `Unidades Organizacionais` no menu lateral esquerdo\
**E** clicar em excluir uma das Unidades Organizacionais listadas\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de Unidade Organizacional

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.Visualizar` clique em `Unidades Organizacionais` no menu lateral esquerdo\
**E** clicar em visualizar uma das Unidades Organizacionais listadas\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Cadastrar Usuário

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Usuários` dentro da edição`\
**OU** clicar em `Membros`na listagem de Unidades Organizacionais\
**E** clicar em`Novo membro diretor`\
**E** selecionar um dos parlamentares cadastrados no sistema\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar o novo usuário da Unidade Organizacional

## CA07: Cancelar cadastro de usuário

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Usuário`\
**E** clicar em `Novo usuário`\
**E** selecionar um dos parlamentares cadastrados no sistema\
E/**OU** preencher os dados necessários\
**E** clicar em cancelar\
**ENTÃO** o sistema deve fechar os campos de edição

## CA08: Remover usuário

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Excluir` estiver editando um já cadastrado\
**E** clicar em `Excluir` nas ações do membro\
**ENTÃO** o sistema deve remover o usuário da Unidade Organizacional

## CA09: Visualizar dados do usuário

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**ENTÃO** o sistema deve abrir os campos na parte superior\
**E** inserir os dados do membro sem possibilidade de edição

## CA10: Cancelar visualização dos dados do membro

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Visualizar` estiver editando um já cadastrado\
**E** clicar em `Visualizar` nas ações do membro\
**E** o sistema apresentar os dados\
**E** clicar em `cancelar`\
**ENTÃO** o sistema deve fechar os campos com os dados

## CA11: Editar dados do membro

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Editar` estiver editando um já cadastrado\
**E** clicar em `Editar` nas ações do membro\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar as alterações

## CA12: Filtrar membros

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Editar` estiver editando um já cadastrado\
**E** inserir dados da pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo nome do usuário com `contains`

## CA13: Utilizar filtro avançado de usuários

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Editar` estiver editando um já cadastrado\
**E** clicar em `mais filtros`\
**E** inserir algum dado de Situação\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA14: Limpar filtro de membros

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.UsuarioUO.Editar` estiver editando um já cadastrado\
**E** inserir algum dado de Situação\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os membros

## CA15: Cadastrar endereço e contato

**QUANDO** o usuário com permissão `Cadastros.UnidadeOrganizacional.DadosUO.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Endereço e contato`\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo endereço e contato

---
