# Configuração de Atividade por evento

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Atividade por evento\
**PARA** inserir **OU** adaptar **OU** remover os dados de Atividade por evento

## CA01: Listar todas os eventos do sistema

**QUANDO** o usuário com permissão `Config.Atividades.Editar` clique em `Atividade por evento` no menu lateral esquerdo\
**ENTÃO** o sistema deve listar todos os eventos existentes no sistema

## CA02: Editar Atividade por evento

**QUANDO** o usuário com permissão `Config.Atividades.Editar` clique em `Atividades por evento` no menu lateral esquerdo\
**E** clicar em editar uma das Atividades por evento listados\
**E** selecionar uma das atividades já cadastradas no sistema\
**E** clicar em salvar\
**ENTÃO** o sistema deve vincular a atividade ao evento

## CA03: Cancelar edição de Atividade por evento

**QUANDO** o usuário com permissão `Config.Atividades.Editar` clique em `Atividades por evento` no menu lateral esquerdo\
**E** editar uma das Atividades já cadastrados\
**E** editar um dos dados\
**E** clicar em cancelar\
**ENTÃO** o sistema deve voltar com a listagem sem qualquer campo em aberto
