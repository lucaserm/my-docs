# Criar Anexo

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** criar **OU** editar **OU** remover evento de anexo\
**PARA** inserir **OU** adaptar **OU** excluir os dados do anexo

---

## CA01: Cadastrar novo evento de Anexo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` clique em `nova movimentação`\
**E** clicar em `Anexo`\
**E** inserir um anexo\
**E** clicar em salvar\
**ENTÃO** o sistema deve cadastrar na proposta um novo evento de anexo\
**E** inserir na linha do tempo da proposta o registro de anexo com o arquivo inserido

## CA02: Editar Anexo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` clique em editar Anexo nas ações da linha do tempo\
**E** inserir **OU** trocar documentos de anexo\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de anexo

## CA03: Baixar arquivos cadastrados no regime de tramitação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` acesse uma proposta com Anexo\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA04: Remover regime de tramitação

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Excluir` clique em excluir Anexo nas ações da linha do tempo\
**E** confirmar no modal\
**ENTÃO** o sistema deve remover o evento de Anexo da proposta

## CA06: Imprimir recibo de Anexo

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.ImprimirRecibo` clique em Imprimir recibo de Anexo nas ações da linha do tempo\
**ENTÃO** o sistema deve abrir documento de recibo do Anexo

## CA07: Inserir observação pública

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` disserte uma observação\
**E** deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA08: Inserir observação privada

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` disserte uma observação\
**E** NÃO deixe a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema NÃO deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA09: Inserir signatários não obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` criar um novo anexo\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.anexo.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.anexo.usuarioSelecionado.isObrigatorio` for `False`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários não obrigatórios do documento

## CA10: Inserir signatários obrigatórios

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` criar um novo anexo\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.anexo.usuarioSelecionado.isAssina` for `True`\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.anexo.usuarioSelecionado.isObrigatorio` for `True`\
**E** selecionar os signatários cadastrados no sistema no botão de `Signatários`\
**ENTÃO** o sistema deve inserir como signatários obrigatórios do documento

## CA11: Impedir inserir signatários

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Anexo.Editar` criar um novo anexo\
**E** parâmetro `br.com.azi.sgpl.integracao.signatarios.anexo.usuarioSelecionado.isAssina` for `False`\
**ENTÃO** o sistema não deve permitir inserir signatários

## CA12: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.ANEXO.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo na linha do tempo

## CA13: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.ANEXO.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo na linha do tempo

---
