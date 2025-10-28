# Buscar anexos de uma Emenda

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** buscar anexos de um evento de Emenda\
**PARA** averiguar os dados de Emenda

# CA01: Baixar arquivos cadastrados na Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` acessar uma proposta com Emenda\
**E** a Emenda contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo

## CA02: Mostrar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.EMENDA.mostrarAnexo` for `True`\
**ENTÃO** o sistema deve mostrar e permitir realizar download do anexo da Emenda na linha do tempo

## CA03: Ocultar anexo na linha do tempo

**QUANDO** o usuário com permissão para acessar uma proposta\
**OU** um usuário externo acessar uma proposta\
**E** parâmetro `br.com.azi.sgpl.evento.EMENDA.mostrarAnexo` for `False`\
**ENTÃO** o sistema deve impedir de visualizar e realizar download do anexo da Emenda na linha do tempo
