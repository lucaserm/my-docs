# Signatários na Emenda

## CA01: Inserir signatários não obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` criar uma nova Emenda\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isObrigatorio` for `False`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários não obrigatórios do documento

## CA02: Inserir signatários obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` criar uma nova Emenda\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isObrigatorio` for `True`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários obrigatórios do documento

## CA03: Impedir inserir signatários

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` criar uma nova Emenda\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isAssina` for `False`\
**ENTÃO** o sistema não deve permitir inserir signatários
