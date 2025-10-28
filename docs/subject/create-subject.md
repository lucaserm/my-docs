# Configuração de Assuntos

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Assuntos\
**PARA** inserir **OU** adaptar **OU** remover os dados de Assuntos

---

## CA01: Cadastrar novo Assunto

**QUANDO** o usuário com permissão `Config.Assuntos.Editar` clique em `Assuntos` no menu lateral esquerdo\
**E** clicar em `Novo Assunto`\
**E** preencher os campos abertos na listagem\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo Assunto\
**E** e listar na tela de `Assuntos`

## CA02: Editar Assunto

**QUANDO** o usuário com permissão `Config.Assuntos.Editar` clique em `Assuntos` no menu lateral esquerdo\
**E** clicar em editar um dos Assuntos listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover Assunto

**QUANDO** o usuário com permissão `Config.Assuntos.Excluir` clique em `Assuntos` no menu lateral esquerdo\
**E** clicar em excluir um dos Assuntos listados\
**E** não houver vínculo com o Assunto\
**ENTÃO** o sistema deve remover o Assunto do sistema

## CA04: Impedir Remoção de Assunto

**QUANDO** o usuário com permissão `Config.Assuntos.Excluir` clique em `Assuntos` no menu lateral esquerdo\
**E** clicar em excluir um dos Assuntos listados\
**E** houver algum vínculo com o Assunto\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O registro selecionado possui relacionamentos no sistema.`

## CA05: Cancelar adição ou edição de Assunto

**QUANDO** o usuário com permissão `Config.Assuntos.Editar` clique em `Assuntos` no menu lateral esquerdo\
**E** clicar em `Novo Assunto`\
**OU** editar um dos assuntos já cadastrados\
**E** preencher os campos abertos na listagem **OU** editar um dos dados\
**E** clicar em cancelar\
**ENTÃO** o sistema deve voltar com a listagem sem qualquer campo em aberto

## CA06: Filtrar Assunto

**QUANDO** o usuário com permissão `Config.Assuntos.Visualizar` clique em `Assuntos` no menu lateral esquerdo\
**E** adicionar um texto no campo superior direito\
**E** clicar na lupa **OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar os assuntos com base no texto inserido utilizando `contains`

---
