# Criar Movimentação Interna

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Movimentação Interna\
**PARA** inserir **OU** adaptar **OU** remover os dados de Movimentação Interna

## CA01: Cadastrar novo Movimentação Interna

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` clique em `nova movimentação`\
**E** clicar em `Movimentação Interna`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma nova Movimentação Interna\
**E** inserir na linha do tempo da proposta o registro de Movimentação Interna

## CA02: Editar Movimentação Interna

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` clique em editar Movimentação Interna nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Movimentação Interna

## CA03: Inserir arquivos ao cadastrar Movimentação Interna

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` clique em `nova movimentação`\
**E** clicar em `Movimentação Interna`\
**OU** editar uma Movimentação Interna\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Movimentação Interna

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` acesse uma proposta com Movimentação Interna\
**E** o Movimentação Interna contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Movimentação Interna

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Excluir` clique em excluir Movimentação Interna nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento de Movimentação Interna da proposta

## CA06: Imprimir recibo de Movimentação Interna

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.ImprimirRecibo` clique em Imprimir recibo de Movimentação Interna nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Movimentação Interna

## CA07: Receber/Acessar propostas

**QUANDO** o usuário que esteja na Unidade Organizacional de destino\
**E** a proposta não esteja protocolada\
**ENTÃO** o sistema deve permitir acessar a proposta

## CA08: Impedir acesso a proposta

**QUANDO** o usuário NÃO ESTIVER na Unidade Organizacional de destino\
**E** a proposta não esteja protocolada\
**ENTÃO** o sistema NÃO deve permitir acessar a proposta

## CA09: Inserir observação pública

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` disserte uma observação\
**E** deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA10: Inserir observação privada

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` disserte uma observação\
**E** NÃO deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema NÃO deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA11: Inserir signatários não obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` criar uma nova movimentação interna\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.tramitacaoInterna.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.tramitacaoInterna.usuarioSelecionado.isObrigatorio` for `False`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários não obrigatórios do documento

## CA12: Inserir signatários obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` criar uma nova movimentação interna\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.tramitacaoInterna.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.tramitacaoInterna.usuarioSelecionado.isObrigatorio` for `True`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários obrigatórios do documento

## CA13: Impedir inserir signatários

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.MovimentaçãoInterna.Editar` criar uma nova movimentação interna\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.tramitacaoInterna.usuarioSelecionado.isAssina` for `False`\
**ENTÃO** o sistema não deve permitir inserir signatários

## CA14: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.TRAMITACAO_INTERNA.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo da movimentação interna na linha do tempo

## CA15: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.TRAMITACAO_INTERNA.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo da movimentação interna na linha do tempo

## CA16: Imprimir documento de Movimentação Interna

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** que houver movimentação interna registrada\
**E** clicar em `Imprimir movimentação interna` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital da Movimentação Interna
