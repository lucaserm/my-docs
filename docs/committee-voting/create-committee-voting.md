# Criar Votação na Comissão

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Votação na Comissão\
**PARA** inserir **OU** adaptar **OU** remover os dados de Votação na Comissão

## CA01: Cadastrar novo Votação na Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.VotacaoComissao.Editar` clique em `nova movimentação`\
**E** clicar em `Votação na Comissão`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta um novo Votação na Comissão\
**E** inserir na linha do tempo da proposta o registro do evento

## CA02: Editar Votação na Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.VotacaoComissao.Editar` clique em editar nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Votação na Comissão

## CA03: Inserir arquivos ao cadastrar Votação na Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.VotacaoComissao.Editar` clique em `nova movimentação`\
**E** clicar em `Votação na Comissão`\
**OU** editar uma Votação na Comissão\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Votação na Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.VotacaoComissao.Editar` acesse uma proposta com Votação na Comissão\
**E** o Votação na Comissão contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Votação na Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.VotacaoComissao.Excluir` clique em excluir nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento da proposta

## CA06: Imprimir recibo de Votação na Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.VotacaoComissao.ImprimirRecibo` clique em Imprimir recibo do evento nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Votação na Comissão

## CA07: Listar parlamentares no cadastro de votação na comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.VotacaoComissao.Editar` iniciar a criação de votação na comissão\
**E** inserir os dados dos campos de `Comissão/Sessão Legislativa/Relator`\
**E**` Sessão Legislativa`\
**ENTÃO** o sistema deve listar os parlamentares cadastrados na sessão legislativa

## CA08: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.VotacaoComissão.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo na linha do tempo

## CA09: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.VotacaoComissão.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

## CA10: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.VotacaoComissão.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

## CA11: Imprimir documento no público com protocolo

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** que houver protocolo registrada\
**E** clicar em `Imprimir Votação na comissão` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital

## CA12: Imprimir documento no público sem protocolo

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** a proposta está na U.O. em que o usuário está alocado\
**E** que não houver protocolo registrada\
**E** clicar em `Imprimir Votação na comissão` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital
