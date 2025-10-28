# Observação Pública da Emenda

## CA01: Inserir observação pública
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` dissertar uma observação\
**E** deixar a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo

## CA02: Inserir observação privada
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` dissertar uma observação\
**E NÃO** deixar a seleção de `tornar observação pública` selecionada\
**ENTÃO** o sistema **NÃO** deve exibir na linha do tempo a observação da movimentação no ambiente interno e externo
