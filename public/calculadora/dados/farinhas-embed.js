const FARINHAS = [
  {
    "id": "caputo-pizzeria",
    "nome": "Caputo Pizzeria (saco azul)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      260,
      280
    ],
    "proteina": 12.5,
    "pl": [
      0.5,
      0.6
    ],
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      6,
      14
    ],
    "fermentacao_rt_temp_c": 22,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "nota": "Maturação — consulte ficha Caputo"
    },
    "fonte": "https://www.mulinocaputo.it/en/products/professional-pizzeria/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      55,
      70
    ],
    "max_alta_hidratacao": 70,
    "nota": "W260–280, 12,5% proteína — ideal para napolitana e média duração. Para 75–80% use Nuvola Super/Manitoba; Pizzeria fica com restrições."
  },
  {
    "id": "caputo-saccorosso",
    "nome": "Caputo Saccorosso / Cuoco (saco vermelho)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      300,
      320
    ],
    "proteina": 13,
    "pl": [
      0.5,
      0.6
    ],
    "hidratação": [
      60,
      68
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.2,
    "fermentacao_rt_h": [
      12,
      36
    ],
    "fermentacao_rt_temp_c": 22,
    "fonte": "https://www.mulinocaputo.it/en/products/saccorosso-5kg/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "nota": "W300–320, 13% proteína — longa fermentação em frio; focaccia 80% só com restrições.",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea",
      "pao"
    ],
    "hidratação_ideal": [
      63,
      70
    ],
    "hidratação_tecnica": [
      60,
      75
    ],
    "max_alta_hidratacao": 75,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "fonte": "Caputo: prolonged leavening in refrigerator cells"
    }
  },
  {
    "id": "caputo-chef",
    "nome": "Caputo Chef (saco marrom)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      300,
      320
    ],
    "proteina": 13,
    "hidratação": [
      60,
      68
    ],
    "sal": 2.5,
    "estilo": "contemporanea",
    "fermento_fresh_pct_base": 0.25,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "fonte": "https://www.mulinocaputo.it/ — linha Chef / Pizza University",
    "verificado": "2025-06-22",
    "confianca": "media",
    "nota": "Equivalente de uso ao Saccorosso/Cuoco em muitos mercados; confirmar lote.",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea",
      "pao"
    ],
    "hidratação_ideal": [
      63,
      70
    ],
    "hidratação_tecnica": [
      60,
      75
    ],
    "max_alta_hidratacao": 75
  },
  {
    "id": "caputo-manitoba",
    "nome": "Caputo Manitoba",
    "grupo": "importada",
    "tipo": "0",
    "w": [
      360,
      380
    ],
    "proteina": 14,
    "pl": [
      0.45,
      0.55
    ],
    "hidratação": [
      70,
      82
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.1,
    "fermentacao_rt_h": [
      24,
      72
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 3,
      "fonte": "Fermentação frio 48–72 h — revendedores Caputo; geladeira 0–4 °C ⚠️ teto frio não é ficha Pasini"
    },
    "aviso_fermentacao": "Acima de 48 h total: preferir maturação a 4 °C (fontes Caputo/revendedores). Site oficial cita produtos levedados e pastelaria — confirme lote.",
    "fonte": "https://www.mulinocaputo.it/pt/produzir/manitoba/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "nota": "W360–380, 14% proteína — farinha forte para levedados/longa fermentação; adequada para 80%+ quando bem manipulada.",
    "receitas": [
      "pao",
      "focaccia",
      "romana_pala",
      "contemporanea"
    ],
    "hidratação_ideal": [
      70,
      82
    ],
    "hidratação_tecnica": [
      70,
      85
    ],
    "max_alta_hidratacao": 85
  },
  {
    "id": "caputo-nuvola",
    "nome": "Caputo Nuvola",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      270,
      290
    ],
    "proteina": 12.5,
    "hidratação": [
      60,
      70
    ],
    "sal": 2.5,
    "estilo": "contemporanea",
    "fermento_fresh_pct_base": 0.35,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "fonte": "https://www.mulinocaputo.it/en/products/nuvola/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "nota": "Caputo: focaccia, pan pizza e contemporânea; W270–290. Para 80% fica no limite técnico — Nuvola Super é mais segura.",
    "receitas": [
      "focaccia",
      "contemporanea",
      "romana_tonda",
      "ny"
    ],
    "hidratação_ideal": [
      60,
      70
    ],
    "hidratação_tecnica": [
      65,
      80
    ],
    "max_alta_hidratacao": 80
  },
  {
    "id": "caputo-nuvola-super",
    "nome": "Caputo Nuvola Super",
    "grupo": "importada",
    "tipo": "0",
    "w": [
      320,
      340
    ],
    "proteina": 13.5,
    "pl": [
      0.5,
      0.6
    ],
    "hidratação": [
      70,
      82
    ],
    "hidratação_ideal": [
      70,
      80
    ],
    "hidratação_tecnica": [
      70,
      82
    ],
    "max_alta_hidratacao": 82,
    "sal": 2,
    "estilo": "contemporanea",
    "receitas": [
      "focaccia",
      "romana_pala",
      "contemporanea",
      "pao"
    ],
    "fermento_fresh_pct_base": 0.15,
    "fermentacao_rt_h": [
      24,
      72
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 3,
      "fonte": "Caputo: ideal pre-ferments/direct doughs; long leavening use cold control"
    },
    "fonte": "https://www.mulinocaputo.it/en/products/super-cloud/",
    "verificado": "2026-06-22",
    "confianca": "alta",
    "nota": "W320–340, 13,5% proteína — Caputo indica para focaccia, pala, contemporânea; adequada para alta hidratação."
  },
  {
    "id": "le5-napoletana",
    "nome": "Le 5 Stagioni Napoletana (Rossa)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      300,
      310
    ],
    "proteina": 13.5,
    "hidratação": [
      57,
      64
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fonte": "https://le5stagioni.com/ + Pizza Stories Le 5 Stagioni",
    "verificado": "2025-06-22",
    "confianca": "media"
  },
  {
    "id": "le5-oro",
    "nome": "Le 5 Stagioni Oro",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      380,
      390
    ],
    "proteina": 14,
    "pl": [
      0.55,
      0.65
    ],
    "hidratação": [
      65,
      75
    ],
    "sal": 2.5,
    "estilo": "contemporanea",
    "fermento_fresh_pct_base": 0.15,
    "fermentacao_rt_h": [
      18,
      24
    ],
    "fermentacao_rt_temp_c": 22,
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 3,
      "fonte": "Pandough/Le 5 Stagioni: até 72 h a frio para Oro"
    },
    "aviso_fermentacao": "Janela ambiente documentada 18–24 h. Para 25–72 h use geladeira (0–4 °C). Também usada em pani arricchiti — Le 5 Stagioni.",
    "fonte": "https://le5stagioni.com/en/prodotto/oro/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "receitas": [
      "focaccia",
      "romana_pala",
      "contemporanea",
      "pao"
    ],
    "hidratação_ideal": [
      65,
      75
    ],
    "hidratação_tecnica": [
      65,
      82
    ],
    "max_alta_hidratacao": 82,
    "nota": "W380–390, 14% proteína — muito forte. 80% possível tecnicamente, mas exige técnica e frio; fonte oficial não fixa hidratação."
  },
  {
    "id": "le5-classica",
    "nome": "Le 5 Stagioni Classica",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      280,
      300
    ],
    "proteina": 12,
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.35,
    "fermentacao_rt_h": [
      4,
      12
    ],
    "fonte": "https://le5stagioni.com/ — ficha Classica",
    "verificado": "2025-06-22",
    "confianca": "media"
  },
  {
    "id": "le5-superiore",
    "nome": "Le 5 Stagioni Superiore",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      330,
      330
    ],
    "proteina": 13,
    "hidratação": [
      55,
      72
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.18,
    "fermentacao_rt_h": [
      12,
      48
    ],
    "max_ambiente_h": 18,
    "max_total_h": 56,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "fonte": "Le 5 Stagioni: maturazione a temperatura controllata (frigorifero)"
    },
    "aviso_fermentacao": "Farinografo: assorbimento 57%. Longa lievitazione + frigorifero — ficha Superiore. Acima de 48 h total não documentado.",
    "fonte": "https://le5stagioni.com/prodotto/superiore/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "receitas": [
      "pao",
      "contemporanea",
      "focaccia"
    ],
    "hidratação_ideal": [
      57,
      72
    ],
    "hidratação_tecnica": [
      57,
      75
    ],
    "max_alta_hidratacao": 75,
    "nota": "Proteína 13%, absorção farinográfica 57%, longa maturação em geladeira. Para 80%: com restrições."
  },
  {
    "id": "pasini-verde",
    "nome": "Molino Pasini Verde (AVPN)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      280,
      310
    ],
    "proteina": 12.6,
    "pl": [
      0.5,
      0.6
    ],
    "hidratação": [
      58,
      68
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.25,
    "fermentacao_rt_h": [
      6,
      24
    ],
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "fonte": "Pasini: CONSERVATION TIME AT 0-4°C: 1-2 days"
    },
    "fonte": "https://www.molinopasini.com/en/flours/446-446-00-verde",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea"
    ],
    "hidratação_ideal": [
      58,
      68
    ],
    "hidratação_tecnica": [
      58,
      72
    ],
    "max_alta_hidratacao": 72,
    "nota": "W280–310, P/L 0,50–0,60 — média fermentação; não é primeira escolha para 80%."
  },
  {
    "id": "pasini-rossa",
    "nome": "Molino Pasini Rossa (pizza)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      300,
      320
    ],
    "proteina": 13,
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      6,
      18
    ],
    "fonte": "https://www.molinopasini.com/ — linha Rossa",
    "verificado": "2025-06-22",
    "confianca": "media"
  },
  {
    "id": "pasini-pizza",
    "nome": "Molino Pasini Pizza (1 kg)",
    "grupo": "importada",
    "tipo": "00",
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fermentacao_rt_h": [
      2,
      8
    ],
    "fonte": "https://www.molinopasini.com/it/farine/499-499-farina-per-pizza-e-focaccia-con-lievito",
    "verificado": "2025-06-22",
    "confianca": "media",
    "nota": "Massa curta a média — embalagem c/ fermento seco incluído (produto diferente)."
  },
  {
    "id": "anaconda-pizza",
    "nome": "Anaconda Pizza Tipo 1",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 10,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fonte": "Tabela nutricional 5g proteína / 50g porção — revendedores + anaconda.dainterage.com.br",
    "verificado": "2025-06-22",
    "confianca": "media",
    "nota": "Proteína 10% confirmada no rótulo; W não declarado.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "anaconda-longa",
    "nome": "Anaconda Pizza Longa Fermentação",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 10,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.15,
    "fermentacao_rt_h": [
      24,
      48
    ],
    "max_ambiente_h": 18,
    "max_total_h": 52,
    "fonte": "https://www.sindustrigo.com.br/ — processo 24–48 h (Anaconda FIPAN 2017)",
    "verificado": "2025-06-22",
    "confianca": "media",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      66
    ],
    "max_alta_hidratacao": 66
  },
  {
    "id": "venturelli-pizza",
    "nome": "Famiglia Venturelli Pizza (Globo)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 10,
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.35,
    "fonte": "https://moinhoglobo.com.br/produto/farinha-de-trigo-especial-para-pizza-famiglia-venturelli-5kg/",
    "verificado": "2025-06-22",
    "confianca": "media",
    "nota": "Alta extensibilidade — W não consta na ficha pública resumida.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      58,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "venturelli-alma",
    "nome": "Famiglia Venturelli Alma Italiana",
    "grupo": "nacional",
    "tipo": "1",
    "w": [
      320,
      320
    ],
    "proteina": 14,
    "hidratação": [
      70,
      82
    ],
    "sal": 2,
    "estilo": "contemporanea",
    "fermento_fresh_pct_base": 0.15,
    "fermentacao_rt_h": [
      24,
      48
    ],
    "max_ambiente_h": 24,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "fonte": "Pasini Verde — maturação 0–4 °C, 1–2 dias (referência para longa fermentação)"
    },
    "max_total_h": 56,
    "fonte": "https://famigliaventurelli.com.br/alma-italiana",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "nota": "W320, 14% proteína, até 80–82% hidratação — site oficial Venturelli. Adequada para alta hidratação.",
    "receitas": [
      "focaccia",
      "romana_pala",
      "contemporanea",
      "pao"
    ],
    "hidratação_ideal": [
      70,
      82
    ],
    "hidratação_tecnica": [
      70,
      82
    ],
    "max_alta_hidratacao": 82
  },
  {
    "id": "badotti-pizza",
    "nome": "Badotti Pizza e Salgados (Moinho Regio)",
    "grupo": "nacional",
    "tipo": "1",
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fonte": "https://www.moinhoregio.com.br/wp-content/uploads/MR_FICHA_TECNICA_UP_BADOTTI_PIZZA-E-SALGADOS.pdf",
    "verificado": "2025-06-22",
    "confianca": "media",
    "nota": "Estabilidade ≥10 min, P/L ≤1,50 no PDF; absorção % não consta.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "faripan-pizza",
    "nome": "Faripan Pizza (Moinho Nacional)",
    "grupo": "nacional",
    "tipo": "1",
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.35,
    "fonte": "https://www.moinhonacional.com.br/produtos/farinha-de-trigo-faripan-pizza",
    "verificado": "2025-06-22",
    "confianca": "baixa",
    "nota": "Ficha técnica resumida online — confirme parâmetros no saco.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      58,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "venturelli-panificacao",
    "nome": "Famiglia Venturelli Panificação (Globo)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 11,
    "hidratação": [
      68,
      78
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.25,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "max_ambiente_h": 24,
    "max_total_h": 48,
    "aviso_fermentacao": "Linha industrial para pães especiais/franceses — W não publicada no site Globo. Acima de 24 h: ⚠️ não confirmado; prefira farinhas de longa fermentação.",
    "fonte": "https://moinhoglobo.com.br/produto/farinha-de-trigo-purissima-25kg/",
    "verificado": "2025-06-22",
    "confianca": "media",
    "nota": "Pães especiais e franceses — Moinho Globo."
  },
  {
    "id": "anaconda-premium-pao",
    "nome": "Anaconda Premium Longa Fermentação (panificação)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 10,
    "hidratação": [
      65,
      75
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.12,
    "fermentacao_rt_h": [
      24,
      48
    ],
    "max_ambiente_h": 18,
    "max_total_h": 52,
    "aviso_fermentacao": "Site Anaconda: produção de pães com longa fermentação. Processo industrial 24–48 h (Sindustrigo). Acima de 48 h não documentado.",
    "fonte": "https://anaconda.dainterage.com.br/produto/farinha-de-trigo-anaconda-premium-longa-fermentacao-tipo-1/",
    "verificado": "2025-06-22",
    "confianca": "media"
  },
  {
    "id": "le5-semina",
    "nome": "Le 5 Stagioni Semina (Tipo 2)",
    "grupo": "importada",
    "tipo": "2",
    "proteina": 13,
    "hidratação": [
      70,
      78
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.12,
    "fermentacao_rt_h": [
      12,
      72
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 3,
      "fonte": "Le 5 Stagioni: lunga maturazione a temperatura controllata (frigorifero)"
    },
    "fonte": "https://le5stagioni.com/prodotto/semina/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "nota": "Tipo 2, min 13% proteína — pães aromáticos e longa maturação a frio."
  },
  {
    "id": "le5-mia-m",
    "nome": "Le 5 Stagioni MIA M (Tipo 1)",
    "grupo": "importada",
    "tipo": "1",
    "proteina": 13,
    "hidratação": [
      65,
      75
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      6,
      18
    ],
    "max_ambiente_h": 18,
    "max_total_h": 36,
    "aviso_fermentacao": "Ficha: medie lievitazioni — pane e pizza. Acima de 18 h ambiente ou 36 h total: ⚠️ use farinha de longa fermentação (Superiore, Semina, Manitoba).",
    "fonte": "https://le5stagioni.com/prodotto/mia-m/",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "nota": "Pane e pizza — mollica voluminosa; não é farinha de lunghissima lievitazione."
  },
  {
    "id": "pasini-soffio-lunga",
    "nome": "Molino Pasini Soffio Lunga Lievitazione",
    "grupo": "importada",
    "tipo": "1",
    "w": [
      390,
      420
    ],
    "proteina": 13,
    "pl": [
      0.5,
      0.55
    ],
    "hidratação": [
      70,
      80
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.1,
    "fermentacao_rt_h": [
      24,
      72
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "fonte": "Pasini: lunga maturazione — conservação 0–4 °C 1–2 dias (Verde)"
    },
    "fonte": "https://www.molinopasini.com/it/farine/566-566-soffio-tipo-1-lunga-lievitazione",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "receitas": [
      "pao",
      "focaccia",
      "romana_pala",
      "contemporanea"
    ],
    "hidratação_ideal": [
      70,
      80
    ],
    "hidratação_tecnica": [
      70,
      82
    ],
    "max_alta_hidratacao": 82
  },
  {
    "id": "pasini-primitiva400",
    "nome": "Molino Pasini Primitiva 400 (Tipo 2)",
    "grupo": "importada",
    "tipo": "2",
    "w": [
      400,
      450
    ],
    "hidratação": [
      70,
      82
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.08,
    "fermentacao_rt_h": [
      24,
      72
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "fonte": "Pasini Primitiva: lunghe e lunghissime lievitazioni"
    },
    "aviso_fermentacao": "W indicativo 400–450 — Pasini. Ciabatte, rosette, brioche; também pizza longa fermentação.",
    "fonte": "https://www.molinopasini.com/it/farine/510-510-primitiva-400-tipo-2",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "receitas": [
      "pao",
      "focaccia",
      "romana_pala",
      "contemporanea"
    ],
    "hidratação_ideal": [
      70,
      82
    ],
    "hidratação_tecnica": [
      70,
      85
    ],
    "max_alta_hidratacao": 85
  },
  {
    "id": "pasini-il-maestro",
    "nome": "Molino Pasini Il Maestro",
    "grupo": "importada",
    "tipo": "1",
    "w": [
      300,
      400
    ],
    "proteina": 12.5,
    "pl": [
      0.55,
      0.6
    ],
    "hidratação": [
      72,
      80
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.2,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "max_ambiente_h": 24,
    "max_total_h": 48,
    "aviso_fermentacao": "Ficha: impasti ad elevata idratazione a temperatura ambiente — Pasini. Acima de 24 h ambiente: use geladeira ou farinha Soffio/Primitiva.",
    "fonte": "https://www.molinopasini.com/en/flours/521-521-il-maestro",
    "verificado": "2025-06-22",
    "confianca": "alta",
    "nota": "Pasini: W300–400, impastos de alta umidade em temperatura ambiente.",
    "receitas": [
      "pao",
      "focaccia",
      "romana_pala",
      "contemporanea"
    ],
    "hidratação_ideal": [
      72,
      80
    ],
    "hidratação_tecnica": [
      72,
      82
    ],
    "max_alta_hidratacao": 82
  },
  {
    "id": "renata-dia-a-dia",
    "nome": "Renata Dia a Dia (Tipo 1 Especial)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 13,
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.35,
    "fonte": "https://renata.com.br/produto/farinha-de-trigo-renata-dia-a-dia",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 13 g/100 g — site Renata. W não declarado; faixa operacional conservadora.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      58,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "renata-super-premium",
    "nome": "Renata Super Premium (Tipo 1)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 12,
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.35,
    "fonte": "https://renata.com.br/produto/farinha-de-trigo-super-premium-renata",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 12 g/100 g — site Renata. W não declarado.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      58,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "renata-semolina-durum",
    "nome": "Renata Semolina de Trigo Durum (Tipo 1)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 14,
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fonte": "https://renata.com.br/produto/farinha-renata-semolina-de-trigo-durum",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 14 g/100 g; site Renata indica uso em pizzas. W não declarado.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      58,
      70
    ],
    "max_alta_hidratacao": 70
  },
  {
    "id": "dona-benta-tipo1",
    "nome": "Dona Benta Tradicional (Tipo 1)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 11,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fonte": "https://www.jmacedo.com.br/dona-benta/produtos/farinha-de-trigo-dona-benta-tipo-1-1kg-saco/",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 11 g/100 g — J.Macêdo. W não declarado.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "orquidea-tipo1",
    "nome": "Orquídea Tradicional (Tipo 1)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 11,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fonte": "https://orquidea.com.br/produtos/farinha-de-trigo-1kg",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 11 g/100 g — Moinho Orquídea. W não declarado.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "finna-tipo1",
    "nome": "Finna Tipo 1 (M. Dias Branco)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 9.3,
    "hidratação": [
      55,
      60
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.45,
    "fonte": "https://finna.com.br/pt/produtos/farinha-de-trigo-finna-tipo-1/",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 9,3 g/100 g — site Finna. W não declarado; proteína abaixo da média das farinhas de pizza.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      55,
      60
    ],
    "hidratação_tecnica": [
      55,
      62
    ],
    "max_alta_hidratacao": 62
  },
  {
    "id": "finna-pizza",
    "nome": "Finna Pizza (M. Dias Branco)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 12,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.35,
    "fonte": "https://finna.com.br/pt/produtos/farinha-de-trigo-tipo-1-pizza-5kg/",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 6 g/50 g porção (= 12 g/100 g) — site Finna. W não declarado.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "boa-sorte-tipo1",
    "nome": "Boa Sorte Tradicional (Tipo 1)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 11,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fonte": "https://www.jmacedo.com.br/outras-marcas/produtos/farinha-de-trigo-tradicional-boa-sorte-1kg-embalagem-papel/",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 11 g/100 g — J.Macêdo. W não declarado.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "nacional-especial-tipo1",
    "nome": "Nacional Especial (Tipo 1)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 11,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fonte": "https://www.moinhonacional.com.br/produtos/farinha-de-trigo-especial-nacional-tipo-1-25kg",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 5,5 g/50 g porção (= 11 g/100 g) — Moinho Nacional. W não declarado.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "primor-tradicional",
    "nome": "Primor Tradicional (Bunge)",
    "grupo": "nacional",
    "tipo": "1",
    "proteina": 11,
    "hidratação": [
      58,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fonte": "https://world.openfoodfacts.org/product/7891080147951/farinha-de-trigo-tradicional-primor",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "Proteína 11 g/100 g conforme tabela do rótulo (EAN 7891080147951). W não declarado; site Bunge não publica ficha nutricional online.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      58,
      62
    ],
    "hidratação_tecnica": [
      58,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "divella-00-pizza",
    "nome": "Divella 00 Pizza (1 kg / 5 kg)",
    "grupo": "importada",
    "tipo": "00",
    "proteina": 10.5,
    "hidratação": [
      55,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fermentacao_rt_h": [
      4,
      12
    ],
    "fonte": "https://www.divella.it/en/products/flour-type-00-pizza-1kg-5kg/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "Proteína 10,5 g/100 g — Divella. Lievitazione media; W não publicado nesta ficha.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      55,
      62
    ],
    "hidratação_tecnica": [
      55,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "divella-00-napoletana",
    "nome": "Divella 00 Napoletana (5 kg)",
    "grupo": "importada",
    "tipo": "00",
    "proteina": 11.6,
    "hidratação": [
      58,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      6,
      18
    ],
    "fonte": "https://www.divella.it/en/products/flour-type-00-for-neapolitan-pizza-5-kg/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "Proteína 11,6 g/100 g — Divella, farinha para pizza napolitana.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      58,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "divella-manitoba",
    "nome": "Divella Manitoba (Tipo 0, 1 kg)",
    "grupo": "importada",
    "tipo": "0",
    "proteina": 13,
    "hidratação": [
      65,
      75
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.15,
    "fermentacao_rt_h": [
      12,
      48
    ],
    "fonte": "https://www.divella.it/en/products/manitoba-flour-type-0-1-kg/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "Proteína 13 g/100 g — Divella; indicada para lievitazioni lunghe.",
    "receitas": [
      "pao",
      "contemporanea",
      "focaccia"
    ],
    "hidratação_ideal": [
      65,
      75
    ],
    "hidratação_tecnica": [
      65,
      80
    ],
    "max_alta_hidratacao": 80
  },
  {
    "id": "divella-00",
    "nome": "Divella 00 Multiuso (1 kg / 5 kg)",
    "grupo": "importada",
    "tipo": "00",
    "proteina": 9.5,
    "hidratação": [
      55,
      60
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.45,
    "fermentacao_rt_h": [
      2,
      8
    ],
    "fonte": "https://www.divella.it/en/products/flour-type-00-1kg-5kg/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "Proteína 9,5 g/100 g — Divella 00 uso geral; fase di lievitazione media.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      55,
      60
    ],
    "hidratação_tecnica": [
      55,
      62
    ],
    "max_alta_hidratacao": 62
  },
  {
    "id": "grassi-00-pizza-focaccia",
    "nome": "Molino Grassi 00 Pizza e Focaccia",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      290,
      290
    ],
    "pl": [
      0.5,
      0.5
    ],
    "hidratação": [
      56,
      68
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      6,
      18
    ],
    "fonte": "https://www.molinograssi.it/prodotto/farina-00-pizza-e-focaccia/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W290, P/L 0,50, assorbimento farinográfico A 56,0% — ficha Molino Grassi.",
    "receitas": [
      "napolitana",
      "ny",
      "focaccia"
    ],
    "hidratação_ideal": [
      56,
      65
    ],
    "hidratação_tecnica": [
      56,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "garofalo-w260",
    "nome": "Garofalo W260 (Tipo 00)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      225,
      295
    ],
    "proteina": 12,
    "pl": [
      0.4,
      1
    ],
    "hidratação": [
      53,
      68
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "fonte": "http://www.farine-garofalo.com/pdf/W260.pdf",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W225–295, proteína ≥12%, assorbimento >53% — scheda tecnica Garofalo. Pizza, pane, focacce; lievitazioni medio lunghe.",
    "receitas": [
      "napolitana",
      "ny",
      "focaccia",
      "pao"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      53,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "garofalo-w350",
    "nome": "Garofalo W350 (Tipo 00)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      310,
      390
    ],
    "proteina": 13,
    "pl": [
      0.4,
      1
    ],
    "hidratação": [
      54,
      75
    ],
    "sal": 2,
    "estilo": "contemporanea",
    "fermento_fresh_pct_base": 0.15,
    "fermentacao_rt_h": [
      12,
      48
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "fonte": "http://www.farine-garofalo.com/pdf/W350.pdf",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W310–390, proteína ≥13%, assorbimento >54% — scheda Garofalo. Pizza in teglia, grandi lievitati, alte idratazioni.",
    "receitas": [
      "focaccia",
      "romana_pala",
      "contemporanea",
      "pao"
    ],
    "hidratação_ideal": [
      65,
      75
    ],
    "hidratação_tecnica": [
      54,
      80
    ],
    "max_alta_hidratacao": 80
  },
  {
    "id": "padano-s20",
    "nome": "Mulino Padano S20 (Pizza)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      380,
      420
    ],
    "proteina": 15,
    "pl": [
      0,
      0.7
    ],
    "hidratação": [
      59,
      75
    ],
    "sal": 2,
    "estilo": "contemporanea",
    "fermento_fresh_pct_base": 0.12,
    "fermentacao_rt_h": [
      24,
      72
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "fonte": "https://store.mulinopadano.it/en/product/s20-pizza-flour/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W380–420, proteína min. 15%, assorbimento 59% — Mulino Padano. Longa maturação direct/indirect dough.",
    "receitas": [
      "focaccia",
      "romana_pala",
      "contemporanea",
      "pao"
    ],
    "hidratação_ideal": [
      59,
      72
    ],
    "hidratação_tecnica": [
      59,
      78
    ],
    "max_alta_hidratacao": 78
  },
  {
    "id": "mariani-00-rinforzata-pizza",
    "nome": "Molino Paolo Mariani 00 Rinforzata Pizza",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      280,
      300
    ],
    "proteina": 14,
    "pl": [
      0.45,
      0.55
    ],
    "hidratação": [
      58,
      70
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.25,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "fonte": "https://www.molinopaolomariani.com/wp-content/uploads/2025/05/T00-RINFORZATA-PIZZA-25-12.5-kg_Rev.04.pdf",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W280–300, proteína 13,5–14,5%, assorbimento min. 58% — scheda tecnica Molino Paolo Mariani.",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea"
    ],
    "hidratação_ideal": [
      58,
      68
    ],
    "hidratação_tecnica": [
      58,
      70
    ],
    "max_alta_hidratacao": 70
  },
  {
    "id": "clitunno-00-sr-pizza",
    "nome": "Molino sul Clitunno 00 SR Pizza",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      300,
      330
    ],
    "hidratação": [
      58,
      70
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.2,
    "fermentacao_rt_h": [
      24,
      60
    ],
    "max_ambiente_h": 24,
    "max_total_h": 60,
    "fonte": "https://www.molinosulclitunno.com/en/flours/farina-00-sr-pizza/",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "W300–330 — site Molino sul Clitunno; maturação média/longa 36–60 h. Proteína não publicada na ficha resumida online.",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea"
    ],
    "hidratação_ideal": [
      58,
      68
    ],
    "hidratação_tecnica": [
      58,
      72
    ],
    "max_alta_hidratacao": 72
  },
  {
    "id": "caputo-americana",
    "nome": "Caputo Americana (saco NY)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      360,
      380
    ],
    "proteina": 14.25,
    "pl": [
      0.45,
      0.5
    ],
    "hidratação": [
      60,
      68
    ],
    "sal": 2.5,
    "estilo": "ny",
    "fermento_fresh_pct_base": 0.25,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "fonte": "https://www.mulinocaputo.it/en/products/00-american/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W360–380, 14,25% proteína — Caputo indica pizza americana artesanal; hidratação não fixada na ficha.",
    "receitas": [
      "ny",
      "contemporanea"
    ],
    "hidratação_ideal": [
      60,
      68
    ],
    "hidratação_tecnica": [
      58,
      72
    ],
    "max_alta_hidratacao": 72
  },
  {
    "id": "caputo-americana-super",
    "nome": "Caputo Americana Super",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      380,
      400
    ],
    "proteina": 15.25,
    "pl": [
      0.5,
      0.6
    ],
    "hidratação": [
      62,
      72
    ],
    "sal": 2.5,
    "estilo": "ny",
    "fermento_fresh_pct_base": 0.2,
    "fermentacao_rt_h": [
      12,
      48
    ],
    "fonte": "https://www.mulinocaputo.it/en/products/00-American-super/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W380–400, 15,25% proteína — Caputo para pizza americana clássica.",
    "receitas": [
      "ny",
      "contemporanea",
      "focaccia"
    ],
    "hidratação_ideal": [
      62,
      72
    ],
    "hidratação_tecnica": [
      60,
      75
    ],
    "max_alta_hidratacao": 75
  },
  {
    "id": "caputo-integrale",
    "nome": "Caputo Integrale",
    "grupo": "importada",
    "tipo": "integral",
    "w": [
      170,
      190
    ],
    "proteina": 13,
    "pl": [
      0.8,
      0.9
    ],
    "hidratação": [
      65,
      75
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.2,
    "fermentacao_rt_h": [
      8,
      24
    ],
    "fonte": "https://www.mulinocaputo.it/en/products/integral/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W170–190, 13% proteína — farinha integral Caputo; P/L 0,80–0,90.",
    "receitas": [
      "pao",
      "contemporanea"
    ],
    "hidratação_ideal": [
      65,
      75
    ],
    "hidratação_tecnica": [
      65,
      78
    ],
    "max_alta_hidratacao": 78
  },
  {
    "id": "padano-s10",
    "nome": "Mulino Padano S10 (Pizza)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      290,
      320
    ],
    "proteina": 12,
    "pl": [
      0,
      0.65
    ],
    "hidratação": [
      57,
      65
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.35,
    "fermentacao_rt_h": [
      4,
      12
    ],
    "fonte": "https://store.mulinopadano.it/en/product/s10-pizza-flour/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W290–320, proteína min. 12%, assorbimento 57% — Mulino Padano; lievitazioni brevi/medie.",
    "receitas": [
      "napolitana",
      "ny"
    ],
    "hidratação_ideal": [
      57,
      65
    ],
    "hidratação_tecnica": [
      57,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "padano-s15",
    "nome": "Mulino Padano S15 (Pizza)",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      330,
      360
    ],
    "proteina": 13.5,
    "pl": [
      0,
      0.65
    ],
    "hidratação": [
      58,
      68
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      6,
      18
    ],
    "fonte": "https://store.mulinopadano.it/en/product/s15-pizza-flour/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W330–360, proteína min. 13,5%, assorbimento 58% — Mulino Padano; teglia romana e impasti indiretti.",
    "receitas": [
      "napolitana",
      "ny",
      "romana_pala",
      "contemporanea"
    ],
    "hidratação_ideal": [
      58,
      68
    ],
    "hidratação_tecnica": [
      58,
      72
    ],
    "max_alta_hidratacao": 72
  },
  {
    "id": "ambrosio-regina",
    "nome": "Molini Ambrosio Regina",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      290,
      310
    ],
    "proteina": 13,
    "pl": [
      0.6,
      0.7
    ],
    "hidratação": [
      57,
      68
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.3,
    "fermentacao_rt_h": [
      6,
      12
    ],
    "max_ambiente_h": 12,
    "max_total_h": 48,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 2,
      "fonte": "Ambrosio Regina: maturazione in cella a 4°C fino a 48 ore"
    },
    "fonte": "https://www.moliniambrosio.com/en/product/regina/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W290–310, 13 g proteína, hidratação min. 57%, assorbimento fino a 68% — Molini Ambrosio.",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea"
    ],
    "hidratação_ideal": [
      57,
      68
    ],
    "hidratação_tecnica": [
      57,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "ambrosio-napoli-antica",
    "nome": "Molini Ambrosio Napoli Antica",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      240,
      260
    ],
    "proteina": 12,
    "pl": [
      0.6,
      0.7
    ],
    "hidratação": [
      56.5,
      63
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fermentacao_rt_h": [
      2,
      6
    ],
    "max_ambiente_h": 6,
    "max_total_h": 24,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 1,
      "fonte": "Ambrosio Napoli Antica: maturazione a 4°C fino a 24 ore"
    },
    "fonte": "https://www.moliniambrosio.com/en/product/napoli-antica/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W240–260, 12 g proteína, hidratação min. 56,5%, assorbimento fino a 63% — lievitazione breve napoletana.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      56.5,
      63
    ],
    "hidratação_tecnica": [
      56.5,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "ambrosio-sorrentina",
    "nome": "Molini Ambrosio Sorrentina",
    "grupo": "importada",
    "tipo": "00",
    "proteina": 14,
    "hidratação": [
      58,
      70
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.2,
    "fermentacao_rt_h": [
      12,
      24
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "geladeira": {
      "temp_c": [
        0,
        4
      ],
      "max_dias": 3,
      "fonte": "Ambrosio Sorrentina: maturazione a 4°C fino a 72 ore; biga e poolish"
    },
    "fonte": "https://www.moliniambrosio.com/en/product/sorrentina/",
    "verificado": "2026-06-24",
    "confianca": "media",
    "nota": "14 g proteína — Molini Ambrosio; lievitazione lunga 12–24 h ambiente. W não publicado na ficha resumida online.",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea"
    ],
    "hidratação_ideal": [
      58,
      68
    ],
    "hidratação_tecnica": [
      58,
      72
    ],
    "max_alta_hidratacao": 72
  },
  {
    "id": "vigevano-verace",
    "nome": "Molino Vigevano Verace",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      200,
      230
    ],
    "proteina": 11.2,
    "hidratação": [
      55,
      62
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.4,
    "fermentacao_rt_h": [
      4,
      12
    ],
    "fonte": "https://molinovigevano.com/prodotto/verace/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W200–230, 11,2% proteína — Molino Vigevano; impasti diretti 4–12 h, croccantezza marcata.",
    "receitas": [
      "napolitana"
    ],
    "hidratação_ideal": [
      55,
      62
    ],
    "hidratação_tecnica": [
      55,
      65
    ],
    "max_alta_hidratacao": 65
  },
  {
    "id": "le5-manitoba",
    "nome": "Le 5 Stagioni Manitoba",
    "grupo": "importada",
    "tipo": "00",
    "proteina": 14.5,
    "hidratação": [
      65,
      78
    ],
    "sal": 2,
    "estilo": "pao",
    "fermento_fresh_pct_base": 0.12,
    "fermentacao_rt_h": [
      24,
      72
    ],
    "max_ambiente_h": 24,
    "max_total_h": 72,
    "fonte": "https://le5stagioni.com/de/prodotto/manitoba-2/",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "Proteína min. 14,5% (s.s.), cinzas max. 0,55% — Le 5 Stagioni; biga, poolish e longa fermentação a frio. W não publicado nesta ficha.",
    "receitas": [
      "pao",
      "focaccia",
      "contemporanea",
      "romana_pala"
    ],
    "hidratação_ideal": [
      65,
      78
    ],
    "hidratação_tecnica": [
      65,
      82
    ],
    "max_alta_hidratacao": 82
  },
  {
    "id": "soncini-pizza-red",
    "nome": "Molino Soncini Cesare Pizza Red",
    "grupo": "importada",
    "tipo": "00",
    "w": [
      260,
      340
    ],
    "proteina": 14.5,
    "pl": [
      0.5,
      0.6
    ],
    "hidratação": [
      58,
      68
    ],
    "sal": 2.5,
    "estilo": "napolitana",
    "fermento_fresh_pct_base": 0.2,
    "fermentacao_rt_h": [
      20,
      24
    ],
    "fonte": "https://www.molinosoncinicesare.com/msc_upload/1526155524_48_eng-SCHEDA-PIZZA-Red.pdf",
    "verificado": "2026-06-24",
    "confianca": "alta",
    "nota": "W260–340 (±20), 14,5% proteína, assorbimento 60% — Soncini; pizza media-lunga 20–24 h, metodo indireto.",
    "receitas": [
      "napolitana",
      "ny",
      "contemporanea"
    ],
    "hidratação_ideal": [
      58,
      65
    ],
    "hidratação_tecnica": [
      58,
      68
    ],
    "max_alta_hidratacao": 68
  },
  {
    "id": "personalizado",
    "nome": "— Personalizado (sem farinha fixa)",
    "grupo": "outro",
    "hidratação": [
      55,
      75
    ],
    "sal": 2.5,
    "estilo": "personalizado",
    "fermento_fresh_pct_base": 0.3,
    "fonte": "Preset manual",
    "confianca": "n/a"
  }
];
