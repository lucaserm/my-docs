# Editar Emenda

---

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** editar evento de Emenda\
**PARA** adaptar os dados de Emenda

---

# CA01: Editar Emenda

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` clicar em editar Emenda nas ações da linha do tempo\
**E** realizar alterações no evento\
**E** clicar em salvar\
**ENTÃO** o sistema deve atualizar o cadastro de Emenda

# CA02: Inserir arquivos ao editar Emenda

**QUANDO** o usuário com permissão `Proposicao.NovaMovimentacao.Emenda.Editar` editar uma Emenda\
**E** inserir um ou mais anexos no fim do formulário\
**E** clicar em salvar\
**ENTÃO** o sistema deve inserir cadastrar o(s) anexo(s) no evento da proposta

---
