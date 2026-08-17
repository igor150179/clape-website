const PRESETS_BIGA = [
  {
    "id": "giorilli-curta",
    "nome": "Biga curta — Piergiorgio Giorilli",
    "tipo": "biga_curta",
    "descricao": "Pré-fermento sólido clássico italiano. Hidratação baixa, fermentação controlada a 16–20 °C.",
    "biga_pct_farina_total": [
      30,
      50
    ],
    "biga_pct_default": 40,
    "biga_hidratação": [
      44,
      45
    ],
    "biga_hidratação_default": 45,
    "fermento_fresh_pct_biga": 1,
    "fermento_seco_pct_biga": null,
    "temp_repouso_c": [
      16,
      20
    ],
    "temp_repouso_default": 18,
    "temp_massa_biga_c": [
      18,
      20
    ],
    "fermentacao_h": [
      16,
      20
    ],
    "fermentacao_default": 18,
    "duas_farinhas": false,
    "farinha_biga": {
      "w_min": 320,
      "w_max": 380,
      "pl_ref": 0.55,
      "nota": "Farinha forte (W 320–380, P/L ~0,55)"
    },
    "refresco_oleo_pct": 0,
    "maturacao_frio_h": null,
    "regeneracao_ambiente_h": null,
    "fonte": "https://www.bakingwiththeory.com/theory/biga/",
    "fonte_label": "Baking With Theory — método Giorilli",
    "confianca": "alta",
    "notas": "Mistura rápida, sem desenvolver glúten. Fórmula da água: Tágua = 55 − Trepouso − Tfarinha. pH maduro 5,3–5,6 (opcional, com medidor)."
  },
  {
    "id": "giorilli-longa",
    "nome": "Biga longa — Piergiorgio Giorilli",
    "tipo": "biga_longa",
    "descricao": "Menor percentual de farinha na biga, fermentação estendida até 48 h (ambiente + frio).",
    "biga_pct_farina_total": [
      20,
      25
    ],
    "biga_pct_default": 22,
    "biga_hidratação": [
      44,
      45
    ],
    "biga_hidratação_default": 45,
    "fermento_fresh_pct_biga": 1,
    "fermento_seco_pct_biga": null,
    "temp_repouso_c": [
      16,
      20
    ],
    "temp_repouso_default": 18,
    "temp_massa_biga_c": [
      18,
      20
    ],
    "fermentacao_h": [
      24,
      48
    ],
    "fermentacao_default": 24,
    "fermentacao_fases": [
      {
        "fase": "ambiente",
        "horas": 24,
        "temp_c": 18,
        "nota": "Primeiras 24 h à temperatura ambiente controlada"
      },
      {
        "fase": "frio",
        "horas": 24,
        "temp_c": 4,
        "nota": "Até 24 h adicionais em fermabiga ou geladeira (~4 °C)"
      }
    ],
    "duas_farinhas": false,
    "farinha_biga": {
      "w_min": 320,
      "w_max": 380,
      "pl_ref": 0.55,
      "nota": "Farinha forte (W 320–380)"
    },
    "refresco_oleo_pct": 0,
    "maturacao_frio_h": null,
    "regeneracao_ambiente_h": null,
    "fonte": "https://www.bakingwiththeory.com/theory/biga/",
    "fonte_label": "Baking With Theory — biga longa",
    "confianca": "alta",
    "notas": "Para biga >30% da farinha total, fontes citam malt diastásico — consulte receita específica antes de usar."
  },
  {
    "id": "le5stagioni-pizza-classica",
    "nome": "Pizza clássica com biga — Le 5 Stagioni",
    "tipo": "receita_verificada",
    "descricao": "Receita oficial Le 5 Stagioni: farinha forte (Superior 00) na biga e farinha Nacional no refresco.",
    "biga_pct_farina_total": [
      40,
      40
    ],
    "biga_pct_default": 40,
    "biga_hidratação": [
      45,
      45
    ],
    "biga_hidratação_default": 45,
    "fermento_fresh_pct_biga": 1,
    "fermento_seco_pct_biga": null,
    "temp_repouso_c": [
      18,
      19
    ],
    "temp_repouso_default": 18.5,
    "temp_massa_biga_c": null,
    "fermentacao_h": [
      18,
      18
    ],
    "fermentacao_default": 18,
    "duas_farinhas": true,
    "farinha_biga": {
      "w_min": 300,
      "nota": "Farinha forte tipo Superior 00 (alto teor de proteínas) — Le 5 Stagioni"
    },
    "farinha_refresco": {
      "nota": "Farinha Nacional 00 (proteína mais baixa) para refresco"
    },
    "massa_final_hidratação": 60,
    "refresco_sal_pct": 2.7,
    "refresco_oleo_pct": 3,
    "maturacao_frio_h": 24,
    "maturacao_frio_temp_c": 4,
    "regeneracao_ambiente_h": 2,
    "cozimento": "330 °C, 3–4 min (forno profissional da receita)",
    "fonte": "https://pizzastories.le5stagioni.com/pt-br/ricetta/pizza-classica-com-biga-com-farinha-superior-00-e-refresco-com-farinha-nacional/",
    "fonte_label": "Le 5 Stagioni — Pizza Stories",
    "confianca": "alta",
    "notas": "Proporção verificada: 400 g Superior + 180 g água + 4 g fermento | refresco 600 g Nacional + 420 g água + 27 g sal + 30 g óleo. Hidratação total = 60%."
  },
  {
    "id": "napolitana-moderna-biga",
    "nome": "Napolitana moderna com biga",
    "tipo": "referencia_mercado",
    "descricao": "Massa final de alta hidratação reforçada com biga sólida. Não é método AVPN (massa direta).",
    "biga_pct_farina_total": [
      30,
      50
    ],
    "biga_pct_default": 40,
    "biga_hidratação": [
      45,
      50
    ],
    "biga_hidratação_default": 45,
    "fermento_fresh_pct_biga": 1,
    "temp_repouso_c": [
      16,
      18
    ],
    "temp_repouso_default": 17,
    "fermentacao_h": [
      12,
      24
    ],
    "fermentacao_default": 18,
    "duas_farinhas": false,
    "farinha_biga": {
      "w_min": 280,
      "nota": "Farinha adequada a massas de alta hidratação"
    },
    "massa_final_hidratação": [
      70,
      80
    ],
    "massa_final_hidratação_default": 72,
    "refresco_sal_pct": 2.5,
    "refresco_oleo_pct": 0,
    "aviso_avpn": true,
    "fonte": "https://www.pizzablab.com/learning-and-resources/general-articles/biga-vs-poolish/",
    "fonte_label": "PizzaBlab — biga em massas 70–80%",
    "confianca": "media",
    "notas": "O Disciplinare AVPN 2024 descreve massa direta; esta preset é referência de mercado para estilo moderno/canotto, não certificação AVPN."
  }
];
