---
title: Criar Emenda
---

# Criar Emenda

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de Emenda\
**PARA** inserir **OU** adaptar **OU** remover os dados de Emenda

# CA01: Cadastrar nova Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` clicar em
`Nova Movimentação`\
**E** clicar em `Emenda`\
**E** preencher os campos obrigatórios do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta uma nova Emenda\
**E** mostrar na tela de `Emenda em elaboração`
> (Há versão de atualização)

# CA02: Editar Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` clicar em editar Emenda nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Emenda

# CA03: Inserir arquivos ao cadastrar Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` clique em `Nova Movimentação`\
**E** clicar em `Emenda`\
**OU** editar uma Emenda\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

# CA04: Baixar arquivos cadastrados no Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` acessar uma proposta com Emenda\
**E** a Emenda contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

# CA05: Remover Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Excluir` clique em excluir Emenda nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento de Emenda da proposta

# CA06: Imprimir recibo de Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.ImprimirRecibo` clique em `Imprimir Recibo` de Emenda nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo da Emenda

# CA07: Inserir observação pública
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` dissertar uma observação\
**E** deixar a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

# CA08: Inserir observação privada
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` dissertar uma observação\
**E** NÃO deixar a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema NÃO deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

# CA09: Inserir signatários não obrigatórios
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` criar uma nova Emenda\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isObrigatorio` for `False`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários não obrigatórios do documento

# CA10: Inserir signatários obrigatórios
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` criar uma nova Emenda\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isObrigatorio` for `True`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários obrigatórios do documento

# CA11: Impedir inserir signatários
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` criar uma nova Emenda\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isAssina` for `False`\
**ENTÃO** o sistema não deve permitir inserir signatários

# CA12: Mostrar anexo na linha do tempo
**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.EMENDA.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo da Emenda na linha do tempo

# CA13: Ocultar anexo na linha do tempo
**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.EMENDA.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo da Emenda na linha do tempo

# CA14: Imprimir documento de Emenda
**QUANDO** o usuário com acesso ao sistema entrar em uma proposta não reservada\
**E** que houver `Emenda` registrada\
**E** clicar em `Imprimir Emenda` na linha do tempo\
**ENTÃO** o sistema deve abrir documento nato digital da Emenda

# CA15: Enviar para protocolo
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` clique em `enviar para protocolo` na tela de `Emendas em Elaboração`\
**ENTÃO** o sistema deve encaminhar para protocolo\
**E** listar emenda em `Emendas não Protocoladas`

# RN's

- [x] Deve existir um parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isAssina` do tipo booleano
- [x] Deve existir um parâmetro `br.com.azi.sgpl.integracao.signatarios.Emenda.usuarioSelecionado.isObrigatorio` do tipo booleano
- [x] Deve existir um parâmetro `br.com.azi.sgpl.evento.EMENDA.mostrarAnexo` do tipo booleano
- [x] Deve existir uma permissão `Proposicao.NovaMovimentacao.Emenda.Editar`
- [x] Deve existir uma permissão `Proposicao.NovaMovimentacao.Emenda.Excluir`
- [x] Deve existir uma permissão `Proposicao.NovaMovimentacao.Emenda.ImprimirRecibo`
- [x] Deve existir uma Entidade que faça referência à `Emenda`
- [x] Deve ser possível fazer o download de anexos da Emenda caso o usuário tenha permissão `Proposicao.NovaMovimentacao.Emenda.Editar`
- [x] Deve ser possível remover o evento de Emenda da proposta caso o usuário tenha permissão `Proposicao.NovaMovimentacao.Emenda.Excluir`
- [x] Deve ser possível abrir o documento do recibo da Emenda
- [x] Deve ser possível tornar a observação de uma Emenda `pública`
- [x] Deve ser possível tornar a observação de uma Emenda `privada`
- [x] Deve ser possível atribuir `Signatários` a uma Emenda
- [x] Deve ser possível, por meio de parâmetros, definir se os anexos estão disponíveis ou não para download
- [x] Deve ser possível enviar uma Emenda para ser protocolada
