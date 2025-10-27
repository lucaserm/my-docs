# Configuração de Classes de Unidade Organizacional

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar OU editar OU remover Classes de Unidade Organizacional\
**PARA** inserir OU adaptar OU remover os dados de Classes de Unidade Organizacional

## CA01: Cadastrar nova Classes de Unidade Organizacional

**QUANDO** o usuário com permissão `Config.ClasseUO.Editar` clique em `Classes de Unidade Organizacional` no menu lateral esquerdo\
**E** clicar em `Nova Classes de Unidade Organizacional`\
**E** preencher os campos abertos na listagem\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova Classes de Unidade Organizacional\
**E** e listar na tela de `Classes de Unidade Organizacional`

## CA02: Editar Classes de Unidade Organizacional

**QUANDO** o usuário com permissão `Config.ClasseUO.Editar` clique em `Classes de Unidade Organizacional` no menu lateral esquerdo\
**E** clicar em editar uma das Classes de Unidade Organizacional listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Classes de Unidade Organizacional

**QUANDO** o usuário com permissão `Config.ClasseUO.Excluir` clique em `Classes de Unidade Organizacional` no menu lateral esquerdo\
**E** clicar em excluir uma das Classes de Unidade Organizacional listados\
**E** não houver vínculo com a Classes de Unidade Organizacional\
**ENTÃO** o sistema deve remover a Classes de Unidade Organizacional do sistema

## CA04: Impedir Remoção de Classes de Unidade Organizacional

**QUANDO** o usuário com permissão `Config.ClasseUO.Excluir` clique em `Classes de Unidade Organizacional` no menu lateral esquerdo\
**E** clicar em excluir uma das Classes de Unidade Organizacional listados\
**E** houver algum vínculo com a Classes de Unidade Organizacional\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Cancelar adição ou edição de Classes de Unidade Organizacional

**QUANDO** o usuário com permissão `Config.ClasseUO.Editar` clique em `Classes de Unidade Organizacional` no menu lateral esquerdo\
**E** clicar em `Nova Classes de Unidade Organizacional`
OU editar uma das Classes de Unidade Organizacional já cadastrados\
**E** preencher os campos abertos na listagem OU editar um dos dados\
**E** clicar em cancelar\
**ENTÃO** o sistema deve voltar com a listagem sem qualquer campo em aberto

## CA06: Filtrar Classes de Unidade Organizacional

**QUANDO** o usuário com permissão `Config.ClasseUO.Visualizar` clique em `Classes de Unidade Organizacional` no menu lateral esquerdo\
**E** adicionar um texto no campo superior direito\
**E** clicar na lupa OU apertar `enter`\
**ENTÃO** o sistema deve filtrar as Classes de Unidade Organizacional com base no texto inserido utilizando `contains`
