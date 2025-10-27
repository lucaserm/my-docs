# Cadastros de parlamentares

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover parlamentares\
**PARA** inserir **OU** adaptar **OU** remover os dados de parlamentares

## CA01: Cadastrar novo parlamentares

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.Editar` clique em `parlamentares` no menu lateral esquerdo\
**E** clicar em `Novo Parlamentar`\
**E** selecionar um dos usuários cadastrados pelo setup\
**E** preencher os campos obrigatórios do formulário\
**E** opcionalmente, inserir uma imagem\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo parlamentar\
**E** e listar na tela de `parlamentares`\
**E** desbloquear outras abas de cadastro e históricos

## CA02: Editar parlamentares

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.Editar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar um dos Parlamentares listados\
**E** modificar algum dado\
**E** clicar em salvar\
**ENTÃO** o sistema deve salvar os dados alterados

## CA03: Remover parlamentares

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.Excluir` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em excluir um dos Parlamentares listados\
**E** não houver vínculo com o Parlamentar\
**ENTÃO** o sistema deve remover o Parlamentar do sistema

## CA04: Impedir Remoção de parlamentares

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.Excluir` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em excluir um dos Parlamentares listados\
**E** houver algum vínculo com o partido\
**ENTÃO** o sistema deve impedir a exclusão e emitir a mensagem `Não é possível realizar a exclusão. O Parlamentar selecionado possui relacionamentos no sistema.`

## CA05: Visualizar dados de parlamentares

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.Visualizar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em visualizar um dos Parlamentares listados\
**ENTÃO** o sistema deve direcionar o usuário para uma tela de apenas visualização dos dados

## CA06: Cadastrar filiação no parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoFiliação.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Filiação`\
**E** clicar em `Nova Filiação`\
**E** selecionar um dos partidos cadastrados no sistema\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar uma nova filiação ao parlamentar

## CA07: Remover filiação do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoFiliação.Excluir` estiver editando um já cadastrado\
**E** clicar em `Remover filiação`\
**ENTÃO** o sistema deve remover a filiação do parlamentar

## CA08: Cadastrar endereço residencial

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.DadosGerais.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Endereço residencial`\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo endereço residencial

## CA09: Cadastrar Contato

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.DadosGerais.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Contato`\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo Contato

## CA10: Cadastrar Gabinete

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.DadosGerais.Editar` estiver cadastrando\
**OU** editando um já cadastrado\
**E** clicar em `Gabinete`\
**E** selecionar uma das unidades organizacionais cadastradas no sistema\
**E** preencher os dados necessários\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar um novo Gabinete

## CA11: Visualizar histórico de legislaturas do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoLegislatura.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de legislaturas`\
**ENTÃO** o sistema deve listar todas as legislaturas na qual o parlamentar possui vínculo

## CA12: Filtrar histórico de legislaturas do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoLegislatura.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de legislaturas`\
**E** inserir algum caractere no campo de pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo número **OU** descrição com `contains`

## CA13: Utilizar filtro avançado do histórico

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoLegislatura.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de legislaturas`\
**E** clicar em `mais filtros`\
**E** inserir datas da eleição\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA14: Limpar filtro avançado de membros

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoLegislatura.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de legislaturas`\
**E** clicar em `mais filtros`\
**E** inserir datas da eleição\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os dados do histórico

## CA15: Visualizar histórico de Filiações do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoFiliação.Visualizar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Filiações`\
**ENTÃO** o sistema deve listar todas as Filiações na qual o parlamentar possui vínculo

## CA16: Filtrar histórico de Filiações do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoFiliação.Visualizar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Filiações`\
**E** inserir algum caractere no campo de pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo nome **OU** sigla com `contains`

## CA17: Visualizar histórico de comissões do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoComissoes.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Comissões`\
**ENTÃO** o sistema deve listar todas as Comissões na qual o parlamentar possui vínculo

## CA18: Filtrar histórico de comissões do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoComissoes.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Comissões`\
**E** inserir algum caractere no campo de pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo nome da comissão com `contains`

## CA19: Utilizar filtro avançado do histórico

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoComissoes.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Comissões`\
**E** clicar em `mais filtros`\
**E** inserir cargo **OU** data da designação **OU** Legislatura **OU** Sessão Legislativa\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA20: Limpar filtro avançado de histórico

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoComissoes.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Comissões`\
**E** clicar em `mais filtros`\
**E** inserir cargo **OU** data da designação **OU** Legislatura **OU** Sessão Legislativa\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os dados do histórico

## CA21: Visualizar histórico de mesa diretora do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoMesaDiretora.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Mesa Diretora`\
**ENTÃO** o sistema deve listar todas as Mesas diretoras na qual o parlamentar possui vínculo

## CA22: Filtrar histórico de mesa diretora do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoMesaDiretora.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Mesa Diretora`\
**E** inserir algum caractere no campo de pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pela descrição com `contains`

## CA23: Utilizar filtro avançado do histórico

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoMesaDiretora.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Mesa Diretora`\
**E** clicar em `mais filtros`\
**E** inserir Unidade Organizacional **OU** data da designação **OU** cargo\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA24: Limpar filtro avançado do histórico

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoMesaDiretora.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados
**E** clicar em `Histórico de Mesa Diretora`\
**E** clicar em `mais filtros`\
**E** inserir Unidade Organizacional **OU** data da designação **OU** cargo\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os dados do histórico

## CA25: Visualizar histórico de Bancadas do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoBancadas.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Bancadas`\
**ENTÃO** o sistema deve listar todas as Bancadas na qual o parlamentar possui vínculo

## CA26: Filtrar histórico de comissões do parlamentar

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoBancadas.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Bancadas`\
**E** inserir algum caractere no campo de pesquisa\
**E** clicar na lupa\
**OU** apertar `enter`\
**ENTÃO** o sistema deve filtrar pelo nome da bancada com `contains`

## CA23: Utilizar filtro avançado do histórico

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoBancadas.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Bancadas`\
**E** clicar em `mais filtros`\
**E** inserir o tipo **OU** data da designação **OU** Unidade Organizacional\
**E** apertar `enter`\
**OU** clicar em `buscar`\
**ENTÃO** o sistema deve filtrar pelos dados selecionados

## CA24: Limpar filtro avançado do histórico

**QUANDO** o usuário com permissão `Cadastros.Parlamentar.HistoricoBancadas.Pesquisar` clique em `Parlamentares` no menu lateral esquerdo\
**E** clicar em editar **OU** visualizar um dos Parlamentares listados\
**E** clicar em `Histórico de Bancadas`\
**E** clicar em `mais filtros`\
**E** inserir o tipo **OU** data da designação **OU** Unidade Organizacional\
**E** apertar `Limpar filtro`\
**ENTÃO** o sistema deve limpar os campos\
**E** listar todos os dados do histórico
