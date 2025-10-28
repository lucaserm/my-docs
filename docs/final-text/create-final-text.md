# Criar Texto Final

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Texto Final\
**PARA** inserir **OU** adaptar **OU** remover os dados de Texto Final

---

## CA01: Cadastrar novo Texto Final

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.Editar` clique em `nova movimentação`\
**E** clicar em `Texto Final`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma novo Texto Final\
**E** inserir na linha do tempo da proposta o registro de Texto Final

## CA02: Editar Texto Final

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.Editar` clique em editar Texto Final nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Texto Final

## CA03: Inserir arquivos ao cadastrar Texto Final

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.Editar` clique em `nova movimentação`\
**E** clicar em `Texto Final`\
**OU** editar uma Texto Final\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Texto Final

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.Editar` acesse uma proposta com Texto Final\
**E** o Texto Final contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Texto Final

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.Excluir` clique em excluir Texto Final a nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento de Texto Final da proposta

## CA06: Imprimir recibo de Texto Final

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.ImprimirRecibo` clique em Imprimir recibo de Texto Final nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Texto Final

## CA07: Inserir observação pública

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.Editar` disserte uma observação\
**E** deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA08: Inserir observação privada

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.TextoFinal.Editar` disserte uma observação\
**E** NÃO deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema NÃO deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA09: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.TEXTO_FINAL.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo do Texto Final na linha do tempo

## CA10: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.TEXTO_FINAL.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo do Texto Final na linha do tempo

---
