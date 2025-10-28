# Criar Período de Pauta

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Período de Pauta\
**PARA** inserir **OU** adaptar **OU** remover os dados de Período de Pauta

---

## CA01: Cadastrar novo Período de Pauta

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.PeriodoPauta.Editar` clique em `nova movimentação`\
**E** clicar em `Período de Pauta`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta um novo Período de Pauta\
**E** inserir na linha do tempo da proposta o registro do evento

## CA02: Editar Período de Pauta

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.PeriodoPauta.Editar` clique em editar nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Período de Pauta

## CA03: Inserir arquivos ao cadastrar Período de Pauta

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.PeriodoPauta.Editar` clique em `nova movimentação`\
**E** clicar em `Período de Pauta`\
**OU** editar um Período de Pauta\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Período de Pauta

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.PeriodoPauta.Editar` acesse uma proposta com Período de Pauta\
**E** o Protocolo contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Período de Pauta

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.PeriodoPauta.Excluir` clique em excluir nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento da proposta

## CA06: Imprimir recibo de Período de Pauta

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.PeriodoPauta.ImprimirRecibo` clique em Imprimir recibo do evento nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Período de Pauta

## CA07: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.PeriodoPauta.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo na linha do tempo

## CA08: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.PeriodoPauta.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

## CA09: Finalizar período de pauta

**QUANDO** o usuário com permissão para acessar uma proposta\
**E** com permissão `Proposicao.NovaMovimentacao.PeriodoPauta.Editar`\
**E** editar evento de periodo de pauta\
**E** clicar em `Finalizar`\
**ENTÃO** o sistema deve registrar como `Finalizada` ao lado do titulo do evento na linha do tempo

---
