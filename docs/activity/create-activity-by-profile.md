# Configuração de Atividade por perfil

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover Atividade por perfil\
**PARA** inserir **OU** adaptar **OU** remover os dados de Atividade por perfil

## CA01: Listar todas os perfis do sistema

**QUANDO** o usuário com permissão `Inicio.Dashboard.VisualizarDashboard` clique em `Atividade por perfil` no menu lateral esquerdo\
**ENTÃO** o sistema deve listar todos os perfis existentes no sistema

## CA02: Editar Atividade por perfil

**QUANDO** o usuário com permissão `Inicio.Dashboard.VisualizarDashboard` clique em `Atividades por perfil` no menu lateral esquerdo\
**E** clicar em editar uma das Atividades por perfis listados\
**E** selecionar uma das atividades já cadastradas no sistema\
**E** clicar em salvar\
**ENTÃO** o sistema deve vincular a atividade ao perfil

## CA03: Cancelar edição de Atividade por perfil

**QUANDO** o usuário com permissão `Inicio.Dashboard.VisualizarDashboard` clique em `Atividades por perfil` no menu lateral esquerdo\
**E** editar uma das Atividades já cadastrados\
**E** editar um dos dados\
**E** clicar em cancelar\
**ENTÃO** o sistema deve voltar com a listagem sem qualquer campo em aberto
