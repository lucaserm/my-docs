# Criar Oficio

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Oficio\
**PARA** inserir **OU** adaptar **OU** remover os dados de Oficio

## CA01: Cadastrar novo Oficio

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Oficio.Editar` clique em `nova movimentação`\
**E** clicar em `Oficio`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta um novo Oficio\
**E** inserir na linha do tempo da proposta o registro do evento

## CA02: Editar Oficio

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Oficio.Editar` clique em editar nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Oficio

## CA03: Inserir arquivos ao cadastrar Oficio

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Oficio.Editar` clique em `nova movimentação`\
**E** clicar em `Oficio`\
**OU** editar um Oficio\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Votação em plenário

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Oficio.Editar` acesse uma proposta com Oficio\
**E** o Oficio contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Oficio

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Oficio.Excluir` clique em excluir nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento da proposta

## CA06: Imprimir recibo de Oficio

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Oficio.ImprimirRecibo` clique em Imprimir recibo do evento nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Ofício

## CA07: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.Oficio.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo na linha do tempo

## CA08: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.Oficio.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

## CA09: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.Oficio.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo
