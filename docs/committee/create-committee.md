# Criar Comissão

**EU, ENQUANTO** usuário com permissões adequadas
**DESEJO** criar **OU** editar **OU** remover evento de Comissão
**PARA** inserir **OU** adaptar **OU** remover os dados de Comissão

## CA01: Cadastrar novo Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Comissao.Editar` clique em `nova movimentação`\
**E** clicar em `Comissão`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta um novo Comissão\
**E** inserir na linha do tempo da proposta o registro do evento

## CA02: Editar Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Comissao.Editar` clique em editar nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Comissão

## CA03: Inserir arquivos ao cadastrar Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Comissao.Editar` clique em `nova movimentação`\
**E** clicar em `Comissão`\
**OU** editar um Comissão\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Comissao.Editar` acesse uma proposta com Comissão\
**E** o Comissão contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Comissao.Excluir` clique em excluir nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento da proposta

## CA06: Imprimir recibo de Comissão

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Comissao.ImprimirRecibo` clique em Imprimir recibo do evento nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Comissão

## CA07: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.Comissão.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo na linha do tempo

## CA08: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.Comissão.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo
