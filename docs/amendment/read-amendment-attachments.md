# Buscar anexos de uma Emenda

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** buscar anexos de um evento de Emenda\
**PARA** averiguar os dados de Emenda

# CA01: Baixar arquivos cadastrados na Emenda
**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` acessar uma proposta com Emenda\
**E** a Emenda contenha um anexo inserido\
**E** clicar em um dos anexos\
**ENTÃO** o sistema deve realizar o download do arquivo
