# Criar Regime de Tramitação

**EU, ENQUANTO** usuário com permissões adequadas
**DESEJO** criar **OU** editar **OU** remover evento de regime de tramitação
**PARA** inserir **OU** adaptar **OU** remover os dados do regime de tramitação

## CA01: Cadastrar novo regime de tramitação

**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.RegimeTramitacao.Editar” clique em “nova movimentação”
**E** clicar em “Regime de tramitação”
**E** preencher os campos obrigatórios do formulário
**E** clicar em salvar
**ENTÃO** o sistema deve cadastrar na proposta um novo regime de tramitação
**E** inserir na linha do tempo da proposta o registro de regime de tramitação

## CA02: Editar regime de tramitação
**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.RegimeTramitacao.Editar” clique em editar Regime de tramitação nas ações da linha do tempo
**E** realizar alterações no evento
**E** clicar em salvar
**ENTÃO** o sistema deve atualizar o cadastro de regime de tramitação

## CA03: Inserir arquivos ao cadastrar regime de tramitação
**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.RegimeTramitacao.Editar” clique em “nova movimentação”
**E** clicar em “Regime de tramitação”
**OU** editar um regime de tramitação
**E** inserir um ou mais anexos no fim do formulário
**E** clicar em salvar
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

## CA04: Baixar arquivos cadastrados no regime de tramitação
**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.RegimeTramitacao.Editar” acesse uma proposta com regime de tramitação
**E** o regime de tramitação contenha um anexo inserido
**E** clicar em um dos anexos
**ENTÃO** o sistema deve realizar o download do arquivo

## CA05: Remover regime de tramitação
**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.RegimeTramitacao.Excluir” clique em excluir Regime de tramitação nas ações da linha do tempo
**E** confirmar no modal
**ENTÃO** o sistema deve remover o evento de regime de tramitação da proposta

## CA06: Imprimir recibo de regime de tramitação
**QUANDO** o usuário com permissão “Proposicao.NovaMovimentacao.RegimeTramitacao.ImprimirRecibo” clique em Imprimir recibo de Regime de tramitação nas ações da linha do tempo
**ENTÃO** o sistema deve abrir documento de recibo do regime de tramitação
