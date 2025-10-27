# Criar Protocolo

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Protocolo\
**PARA** inserir **OU** adaptar **OU** remover os dados de Protocolo

## CA01: Cadastrar novo Protocolo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` clique em `nova movimentação`\
**E** clicar em `Protocolo`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma nova Protocolo\
**E** inserir na linha do tempo da proposta o registro do evento

## CA02: Editar Protocolo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` clique em editar nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Protocolo

## CA03: Inserir arquivos ao cadastrar Protocolo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` clique em `nova movimentação`\
**E** clicar em `Protocolo`\
**OU** editar um Protocolo\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Protocolo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` acesse uma proposta com Protocolo\
**E** o Protocolo contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Protocolo
`
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Excluir` clique em excluir nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento da proposta

## CA06: Imprimir recibo de Protocolo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.ImprimirRecibo` clique em Imprimir recibo do evento nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Protocolo

## CA07: Gerar número de protocolo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` inicie um cadastro de protocolo\
**E** a configuração do tipo da proposta permitir gerar o número de protocolo\
**E** clique em `Gerar` no número do protocolo\
**ENTÃO** o sistema deve inserir um novo número de protocolo a partir do último cadastro no formato `XXXXX/20XX` (<número>/<ano>)

## CA08: Gerar número de processo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` inicie um cadastro de protocolo\
**E** a configuração do tipo da proposta permitir gerar o número de processo\
**E** clique em `Gerar` no número do processo\
**ENTÃO** o sistema deve inserir um novo número de processo a partir do último cadastro no formato `XXXXX/20XX` (<número>/<ano>)

## CA09: Gerar número de projeto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` inicie um cadastro de protocolo\
**E** a configuração do tipo da proposta permitir gerar o número de projeto\
**E** clique em `Gerar` no número do projeto\
**ENTÃO** o sistema deve inserir um novo número de projeto a partir do último cadastro no formato `XXXXX/20XX` (<número>/<ano>)

## CA10: Impedir de gerar número

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` inicie um cadastro de protocolo\
**E** a configuração do tipo da proposta NÃO permitir gerar algum dos números\
**E** clique em `Gerar` no número que não for permitido\
**ENTÃO** o sistema deve emitir a mensagem `Este tipo de Proposição não gera Nº de <tipo de numeração>`

## CA11: Inserir signatários não obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` criar um novo Protocolo\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Protocolo.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Protocolo.usuarioSelecionado.isObrigatorio` for `False`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários não obrigatórios do documento

## CA10: Inserir signatários obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` criar um novo Protocolo\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Protocolo.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Protocolo.usuarioSelecionado.isObrigatorio` for `True`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários obrigatórios do documento

## CA11: Impedir inserir signatários

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` criar um novo Protocolo\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Protocolo.usuarioSelecionado.isAssina` for `False`\
**ENTÃO** o sistema não deve permitir inserir signatários

## CA12: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.PROTOCOLO.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo na linha do tempo

## CA13: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.PROTOCOLO.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

## CA14: Imprimir documento com protocolo

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** que houver protocolo registrada\
**E** clicar em `Imprimir Protocolo` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital

## CA15: Imprimir documento no público sem protocolo

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** a proposta está na U.O. em que o usuário está alocado\
**E** que não houver protocolo registrada\
**E** clicar em `Imprimir Protocolo` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital

## CA16: Protocolar emendas e vetos

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` clique em `nova movimentação`\
**E** clicar em `Protocolo`\
**E** selecionar emenda **OU** veto\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta um novo Protocolo\
**E** inserir na linha do tempo da proposta o registro do evento\
**E** listar na tela de `Emendas protocoladas`

## CA17: Gerar número de emenda **OU** veto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Protocolo.Editar` inicie um cadastro de protocolo de emenda **OU** veto\
**E** clique em `Gerar` no número da emenda **OU** veto\
**ENTÃO** o sistema deve inserir um novo número de emenda **OU** veto a partir do último cadastro no formato `XXXXXX`
