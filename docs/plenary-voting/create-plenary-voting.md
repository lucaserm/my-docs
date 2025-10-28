# Criar Votação em Plenário

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Votação em Plenário\
**PARA** inserir **OU** adaptar **OU** remover os dados de Votação em Plenário

---

## CA01: Cadastrar novo Votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Editar” clique em “nova movimentação”\
**E** clicar em “Votação em plenário”\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta um novo Votação em plenário\
**E** inserir na linha do tempo da proposta o registro do evento

## CA02: Editar Votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Editar” clique em editar nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Votação em plenário

## CA03: Inserir arquivos ao cadastrar Votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Editar” clique em “nova movimentação”\
**E** clicar em “Votação em plenário”\
**OU** editar uma Votação em plenário\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Editar” acesse uma proposta com Votação em plenário\
**E** o Votação em plenário contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Excluir” clique em excluir nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento da proposta

## CA06: Imprimir recibo de Votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.ImprimirRecibo” clique em Imprimir recibo do evento nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Votação em plenário

## CA07: Listar parlamentares no cadastro de Votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Editar” iniciar a criação de Votação em plenário\
**E** inserir os dados dos campos de “Legislatura”\
**E** “Sessão Legislativa”\
**E** “Sessão Parlamentar”\
**ENTÃO** o sistema deve listar os parlamentares cadastrados na sessão legislativa

## CA08: Listar emendas e vetos

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Editar” iniciar a criação de Votação em plenário\
**E** abrir seletor de “Emendas/Vetos”\
**ENTÃO** o sistema deve listar todas as emendas e vetos vinculadas a proposta

## CA09: Imprimir documento de votação em plenário

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.VotacaoPlenario.Editar” iniciar a criação de Votação em plenário\
**E** clicar em “Imprimir votação”\
**ENTÃO** o sistema deve exibir o documento de votação

## CA10: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta
**OU** um usuário externo acessar uma proposta\
**E** parâmetro “br.com.azi.sgpl.evento.VotacaoPlenario.mostrarAnexo” for “True”\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo na linha do tempo

## CA11: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro “br.com.azi.sgpl.evento.VotacaoPlenario.mostrarAnexo” for “False”\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

## CA12: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro “br.com.azi.sgpl.evento.VotacaoPlenario.mostrarAnexo” for “False”\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

## CA13: Imprimir documento no público com protocolo

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** que houver protocolo registrada\
**E** clicar em “Imprimir Votação em plenário” na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital

## CA14: Imprimir documento no público sem protocolo

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** a proposta está na U.O. em que o usuário está alocado\
**E** que não houver protocolo registrada\
**E** clicar em “Imprimir Votação em plenário” na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital

---
