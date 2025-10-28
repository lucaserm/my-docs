# Criar Situação definitiva

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Situação definitiva\
**PARA** inserir **OU** adaptar **OU** remover os dados de Situação definitiva

---

## CA01: Cadastrar novo Situação definitiva

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.Editar` clique em `nova movimentação`\
**E** clicar em `Situação definitiva`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma novo Situação definitiva\
**E** inserir na linha do tempo da proposta o registro de Situação definitiva\
**E** mostrar os dados de `Nº do documento`, `Data documento`, `Data diário oficial`, `Número do Diário Oficial` e `Página Diário Oficial` no cabeçalho da proposta

## CA02: Editar Situação definitiva

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.Editar` clique em editar Situação definitiva nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Situação definitiva

## CA03: Inserir arquivos ao cadastrar Situação definitiva

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.Editar` clique em `nova movimentação`\
**E** clicar em `Situação definitiva`\
**OU** editar uma Situação definitiva\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Situação definitiva

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.Editar` acesse uma proposta com Situação definitiva\
**E** a Situação Definitiva contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Situação definitiva

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.Excluir` clique em excluir Situação definitiva a nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento de Situação definitiva da proposta

## CA06: Imprimir recibo de Situação definitiva

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.ImprimirRecibo` clique em Imprimir recibo de Situação definitiva nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Situação definitiva

## CA07: Inserir observação pública

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.Editar` disserte uma observação\
**E** deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA08: Inserir observação privada

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.SituacaoDefinitiva.Editar` disserte uma observação\
**E** NÃO deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema NÃO deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA09: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.SIT_DEFINITIVA.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo da Situação Definitiva na linha do tempo

## CA10: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.SIT_DEFINITIVA.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo do Situação definitiva na linha do tempo

---
