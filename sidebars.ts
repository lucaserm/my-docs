import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
const sidebars: SidebarsConfig = {
  docs: [
    "introduction",
    "credentials",
    {
      type: "category",
      label: "Arquitetura",
      items: [
        "architecture/arch-patterns",
        "architecture/controllers",
        "architecture/services",
        "architecture/repositories",
      ],
    },
    {
      type: "category",
      label: "Proposição",
      items: [
        "proposition/create-proposition",
        "proposition/create-proposition-type",
      ],
    },
    {
      type: "category",
      label: "Emenda",
      items: [
        "amendment/amendment-params",
        "amendment/create-amendment",
        "amendment/update-amendment",
        "amendment/delete-amendment",
        "amendment/read-amendment-attachments",
      ],
    },
    {
      type: "category",
      label: "Veto",
      items: ["veto/create-veto"],
    },
    {
      type: "category",
      label: "Regime de Tramitação",
      items: ["procedure/create-procedure", "procedure/create-procedure-type"],
    },
    {
      type: "category",
      label: "Anexo",
      items: ["attachment/create-attachment"],
    },
    {
      type: "category",
      label: "Movimentação Interna",
      items: ["internal-movement/create-internal-movement"],
    },
    {
      type: "category",
      label: "Protocolo",
      items: ["protocol/create-protocol"],
    },
    {
      type: "category",
      label: "Período de Pauta",
      items: ["docket-period/create-docket-period"],
    },
    {
      type: "category",
      label: "Comissão",
      items: [
        "committee/create-committee-event",
        "committee/create-committee-entity",
      ],
    },
    {
      type: "category",
      label: "Relator na Comissão",
      items: ["committee-reporter/create-committee-reporter"],
    },
    {
      type: "category",
      label: "Votação na Comissão",
      items: ["committee-voting/create-committee-voting"],
    },
    {
      type: "category",
      label: "Votação no Plenário",
      items: ["plenary-voting/create-plenary-voting"],
    },
    {
      type: "category",
      label: "Ofício",
      items: ["official-letter/create-official-letter"],
    },
    {
      type: "category",
      label: "Texto Final",
      items: ["final-text/create-final-text"],
    },
    {
      type: "category",
      label: "Situação Definitiva",
      items: ["final-situation/create-final-situation"],
    },
    {
      type: "category",
      label: "Partido",
      items: ["political-party/create-political-party"],
    },
    {
      type: "category",
      label: "Parlamentar",
      items: ["parliamentarian/create-parliamentarian"],
    },
    {
      type: "category",
      label: "Revogação",
      items: ["repeal/create-repeal"],
    },
    {
      type: "category",
      label: "Signatário",
      items: ["signatory/create-signatory"],
    },
    {
      type: "category",
      label: "Mesa Diretora",
      items: ["presiding-board/create-presiding-board"],
    },
    {
      type: "category",
      label: "Entidade Externa",
      items: ["external-entity/create-external-entity"],
    },
    {
      type: "category",
      label: "Blocos e Bancadas",
      items: ["bloc-and-caucus/create-bloc-and-caucus"],
    },
    {
      type: "category",
      label: "Unidade Organizacional",
      items: [
        "organizational-unit/create-organizational-unit",
        "organizational-unit/config-organizational-unit",
      ],
    },
    {
      type: "category",
      label: "Período Legislatura",
      items: ["legislative-term/create-legislative-term"],
    },
    {
      type: "category",
      label: "Período Sessão Legislativa",
      items: ["legislative-session/create-legislative-session"],
    },
    {
      type: "category",
      label: "Períodos Sessão Parlamentar",
      items: ["parliamentarian-session/create-parliamentarian-session"],
    },
    {
      type: "category",
      label: "Atividade",
      items: [
        "activity/create-activity",
        "activity/create-activity-by-event",
        "activity/create-activity-by-profile",
      ],
    },
    {
      type: "category",
      label: "Assunto",
      items: ["subject/create-subject"],
    },
    "virtus",
  ],
};
export default sidebars;
