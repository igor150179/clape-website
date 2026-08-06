/**
 * Fermentação — faixas documentadas.
 * AVPN: min ~8 h napolitana a ~20 °C; trabalho 20–27 °C; fermento 0,1–3 g/L água.
 * Pasini Verde: conservação 0–4 °C, 1–2 dias.
 */

export const ESTILOS = {
  napolitana: { hidr: 60, sal: 2.5, label: 'Napolitana', fonte: 'AVPN 55–62%' },
  ny: { hidr: 65, sal: 2.5, label: 'Pizza NY', fonte: 'Mercado ⚠️' },
  romana_tonda: { hidr: 72, sal: 2.5, label: 'Romana Tonda', fonte: 'Mercado ⚠️' },
  romana_pala: { hidr: 85, sal: 2.5, label: 'Romana in Pala', fonte: 'Mercado ⚠️' },
  focaccia: { hidr: 80, sal: 2.0, label: 'Focaccia', fonte: '75–82% — referências técnicas; ponto 80%' },
  pao: { hidr: 75, sal: 2.0, ferm: 1.0, label: 'Pão Rústico', fonte: 'Panificação ⚠️' },
  contemporanea: { hidr: 68, sal: 2.5, label: 'Contemporânea', fonte: 'Mercado ⚠️' },
  personalizado: { hidr: 60, sal: 2.5, label: 'Personalizado', fonte: 'Manual' },
};

export function limitesFermentacao(farinha, tempAmbienteC, estiloKey) {
  const rt = farinha?.fermentacao_rt_h;
  const refTemp = farinha?.fermentacao_rt_temp_c ?? 22;
  let maxAmbBase = farinha?.max_ambiente_h ?? rt?.[1] ?? 18;
  if (!farinha?.max_ambiente_h && rt && rt[1] > 24) {
    maxAmbBase = 24;
  }

  let maxAmbiente = maxAmbBase;
  if (tempAmbienteC > refTemp) {
    maxAmbiente = maxAmbBase * (refTemp / tempAmbienteC);
  } else if (tempAmbienteC < refTemp && tempAmbienteC >= 18) {
    maxAmbiente = maxAmbBase * Math.min(1.15, refTemp / tempAmbienteC);
  }
  maxAmbiente = Math.round(maxAmbiente * 10) / 10;

  let minHoras = rt?.[0] ?? 2;
  if (estiloKey === 'napolitana') minHoras = Math.max(minHoras, 8);

  const maxFrio = farinha?.geladeira
    ? (farinha.geladeira.max_dias || 2) * 24
    : 48;

  const bulkInicial = Math.min(4, Math.max(2, Math.round(maxAmbBase * 0.25)));

  return {
    min_h: minHoras,
    max_ambiente_h: maxAmbiente,
    max_so_ambiente_h: Math.floor(maxAmbiente),
    max_frio_h: maxFrio,
    max_total_h: farinha?.max_total_h ?? Math.round(bulkInicial + maxFrio + 4),
    geladeira_obrigatoria_acima_h: Math.ceil(maxAmbiente),
    bulk_inicial_h: bulkInicial,
    recuperacao_h: [1, 4],
    ref_temp_c: refTemp,
  };
}

export function planoFermentacao(horas, limites, usarGeladeira) {
  const lim = limites;
  if (!usarGeladeira) {
    if (horas <= lim.max_so_ambiente_h) {
      return { bulk_h: 0, geladeira_h: 0, recuperacao_h: 0, ok: true, msg: null };
    }
    return {
      bulk_h: 0, geladeira_h: 0, recuperacao_h: 0, ok: false,
      msg: `Acima de ${lim.max_so_ambiente_h} h em ambiente — risco de overproof.`,
    };
  }

  const bulk = lim.bulk_inicial_h;
  let recuperacao = Math.min(lim.recuperacao_h[1], Math.max(lim.recuperacao_h[0], Math.round(horas * 0.1)));
  let frio = horas - bulk - recuperacao;
  if (frio > lim.max_frio_h) {
    frio = lim.max_frio_h;
    recuperacao = Math.max(lim.recuperacao_h[0], horas - bulk - frio);
  }
  if (frio < 0) { frio = 0; recuperacao = Math.max(0, horas - bulk); }

  return {
    bulk_h: bulk,
    geladeira_h: Math.round(frio),
    recuperacao_h: recuperacao,
    ok: horas <= lim.max_total_h,
    msg: horas > lim.max_total_h ? `Máximo documentado: ~${lim.max_total_h} h.` : null,
  };
}

export function fermentoFreshPct(farinha, horasTotal, tempAmbienteC, usarGeladeira, hidratacaoPct) {
  const h = Math.max(2, Math.min(72, horasTotal));
  const hidrPct = hidratacaoPct || 60;
  const rt = farinha?.fermentacao_rt_h;
  const anchorH = rt ? (rt[0] + rt[1]) / 2 : 24;
  let base = farinha?.fermento_fresh_pct_base ?? null;

  if (base == null || farinha?.id === 'personalizado') {
    const aguaL = hidrPct / 100;
    const gMin = 0.1, gMax = 3;
    let pos = h <= 6 ? 0.9 : h <= 12 ? 0.55 : h <= 24 ? 0.3 : h <= 48 ? 0.12 : 0.05;
    if (usarGeladeira) pos *= 0.5;
    base = ((gMin + (gMax - gMin) * pos) * aguaL) / 10;
  } else {
    base = base * (anchorH / h);
  }

  if (usarGeladeira) base *= 0.55;
  if (tempAmbienteC > 28) base *= 0.85;
  if (tempAmbienteC < 18) base *= 1.12;

  const minPct = (0.1 * (hidrPct / 100)) / 10;
  if (farinha?.fermento_fresh_pct_base != null && farinha?.id !== 'personalizado') {
    return Math.round(Math.max(minPct, base) * 1000) / 1000;
  }
  const maxPct = (3 * (hidrPct / 100)) / 10;
  return Math.round(Math.max(minPct, Math.min(maxPct, base)) * 1000) / 1000;
}

export function hidratacaoRecomendada(farinha, estilo) {
  if (farinha?.hidratação) {
    const mid = (farinha.hidratação[0] + farinha.hidratação[1]) / 2;
    return Math.round(mid * 10) / 10;
  }
  return ESTILOS[estilo]?.hidr ?? 60;
}
