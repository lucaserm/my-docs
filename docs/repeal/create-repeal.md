# Criar Revogação

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Revogação\
**PARA** inserir **OU** adaptar **OU** remover os dados de Revogação

## CA01: Cadastrar novo Revogação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` clique em `nova movimentação`\
**E** clicar em `Revogação`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma nova Revogação\
**E** inserir na linha do tempo da proposta o registro de Revogação

## CA02: Editar Revogação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` clique em editar Revogação nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Revogação

## CA03: Inserir arquivos ao cadastrar Revogação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` clique em `nova movimentação`\
**E** clicar em `Revogação`\
**OU** editar uma Revogação\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Revogação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` acesse uma proposta com Revogação\
**E** o Revogação contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Revogação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Excluir` clique em excluir Revogação nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento de Revogação da proposta

## CA06: Imprimir recibo de Revogação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.ImprimirRecibo` clique em Imprimir recibo de Revogação nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Revogação

## CA07: Inserir observação pública

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` disserte uma observação\
**E** deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA08: Inserir observação privada

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` disserte uma observação\
**E** NÃO deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema NÃO deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA09: Inserir signatários não obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` criar uma nova Revogação\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.revogacao.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.revogacao.usuarioSelecionado.isObrigatorio` for `False`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários não obrigatórios do documento

## CA10: Inserir signatários obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` criar uma nova Revogação\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.revogacao.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.revogacao.usuarioSelecionado.isObrigatorio` for `True`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários obrigatórios do documento

## CA11: Impedir inserir signatários

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Revogacao.Editar` criar uma nova Revogação\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.revogacao.usuarioSelecionado.isAssina` for `False`\
**ENTÃO** o sistema não deve permitir inserir signatários

## CA12: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.REVOGACAO.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo da Revogação na linha do tempo

## CA13: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.REVOGACAO.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo da Revogação na linha do tempo

## CA14: Imprimir documento de Revogação

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** que houver Revogação registrada\
**E** clicar em `Imprimir Revogação` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital da Revogação
