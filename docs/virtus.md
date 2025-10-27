---
title: Virtus
---

# Sincronização com virtus

**EU, ENQUANTO** usuário com permissões adequadas\
**DESEJO** sincronizar documentos com o virtus\
**PARA** assinar **E** registrar os documentos em um processo digital

## CA01: Sincronizar ao cadastrar eventos

**QUANDO** o usuário com permissão para criar um evento\
**E** clicar em `Nova movimentação`\
**E** cadastrar qualquer evento que possua documento\
**E** clicar em salvar\
**E** parametro `br.com.azi.sgpl.integracao.virtus.ativo` for `True`\
**ENTÃO** o sistema deve sincronizar com o processo digital do virtus

## CA02: Falhar ao sincronizar

**QUANDO** o usuário com permissão para criar um evento\
**E** clicar em `Nova movimentação`\
**E** cadastrar qualquer evento que possua documento\
**E** clicar em salvar\
**E** parâmetro `br.com.azi.sgpl.integracao.virtus.ativo` for `True`\
**E** exceder OU falhar a comunicação com o virtus\
**ENTÃO** o sistema deve cadastrar o evento\
**E** disponibilizar o botão para sincronizar o documento

## CA03: Impedir sincronização com o virtus

**QUANDO** o usuário com permissão para criar um evento\
**E** clicar em `Nova movimentação`\
**E** cadastrar qualquer evento que possua documento\
**E** clicar em salvar\
**E** parâmetro `br.com.azi.sgpl.integracao.virtus.ativo` for `False`\
**ENTÃO** o sistema deve apenas salvar o evento na proposta

## CA04: Assinar documentos

**QUANDO** o usuário que seja signatário OU parlamentar\
**E** o documento estiver sincronizado com o processo digital\
**E** clicar em `Assinar documento`\
**E** sistema abrir iframe para assinatura no virtus\
**E** realizar a assinatura por token\
**ENTÃO** o sistema deve apresentar a assinatura no documento

## CA05: Perder assinatura do documento

**QUANDO** o usuário que seja signatário OU parlamentar\
**E** o documento estiver sincronizado com o processo digital\
**E** clicar em `editar` em um documento já assinado\
**E** clicar em salvar\
**ENTÃO** o sistema deve retirar a assinatura do documento
