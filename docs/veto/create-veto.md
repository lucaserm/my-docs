# Criar Veto

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Veto\
**PARA** inserir **OU** adaptar **OU** remover os dados de Veto

---

## CA01: Cadastrar novo Veto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` clique em `nova movimentação`\
**E** clicar em `Veto`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma nova Veto\
**E** mostrar na tela de `Veto em elaboração`

## CA02: Editar Veto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` clique em editar Veto nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Veto

## CA03: Inserir arquivos ao cadastrar Veto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` clique em `nova movimentação`\
**E** clicar em `Veto`\
**OU** editar uma Veto\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no Veto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` acesse uma proposta com Veto\
**E** o Veto contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover Veto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Excluir` clique em excluir Veto nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento de Veto da proposta

## CA06: Imprimir recibo de Veto

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.ImprimirRecibo` clique em Imprimir recibo de Veto nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Veto

## CA07: Inserir observação pública

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` disserte uma observação\
**E** deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA08: Inserir observação privada

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` disserte uma observação\
**E** NÃO deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema NÃO deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA09: Inserir signatários não obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` criar uma nova Veto\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Veto.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Veto.usuarioSelecionado.isObrigatorio` for `False`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários não obrigatórios do documento

## CA10: Inserir signatários obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` criar uma nova Veto\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Veto.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Veto.usuarioSelecionado.isObrigatorio` for `True`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários obrigatórios do documento

## CA11: Impedir inserir signatários

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Veto.Editar` criar uma nova Veto\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Veto.usuarioSelecionado.isAssina` for `False`\
**ENTÃO** o sistema não deve permitir inserir signatários

## CA12: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.Veto.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo da Veto na linha do tempo

## CA13: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.VETO.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo da Veto na linha do tempo

## CA14: Imprimir documento de Veto

**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** que houver Veto Registrada\
**E** clicar em `Imprimir Veto` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital da Veto

---
