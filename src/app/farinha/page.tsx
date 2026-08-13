import Image from "next/image";
import {
  FARINHA_CHECKOUT_URL,
  FARINHA_SUPPORT_EMAIL,
} from "@/lib/constants";

const FAQ = [
  {
    q: "Só quero a calculadora — vale a pena?",
    a: "A Parte II resolve o cálculo, mas a Parte I explica por que sua farinha falha. Juntas, eliminam o chute.",
  },
  {
    q: "Já existem calculadoras grátis na internet.",
    a: "Nenhuma com presets AVPN, modo bolas, guia de farinha brasileira e acesso online exclusivo no mesmo pacote.",
  },
  {
    q: "Sou iniciante, vou entender?",
    a: 'Sim. Comece pelo capítulo 4 (rótulo) e use o modo "4 bolas × 250 g" na calculadora — o resto vem com a prática.',
  },
  {
    q: "Funciona no celular?",
    a: "Sim. A calculadora abre no navegador do celular ou computador — basta fazer login com o e-mail da compra.",
  },
  {
    q: "Certifica pizza AVPN?",
    a: "Não. O guia usa as faixas do Disciplinare como referência técnica e ensina a adaptar ao forno caseiro.",
  },
  {
    q: "Quais marcas de farinha comprar?",
    a: "O capítulo 7 traz o guia de compra BR — sempre conferindo a proteína no rótulo do lote.",
  },
  {
    q: "E se eu não gostar?",
    a: "Garantia de 7 dias pela Hotmart. Reembolso integral, sem perguntas.",
  },
  {
    q: "Como recebo o material?",
    a: "eBook na área de membros da Hotmart. A calculadora online fica em clape.com.br/calculadora — você recebe e-mail e senha de acesso após a compra.",
  },
] as const;

function CtaButton({
  href,
  children,
  note,
}: {
  href: string;
  children: React.ReactNode;
  note: string;
}) {
  return (
    <a className="btn" href={href}>
      {children}
      <small>{note}</small>
    </a>
  );
}

export default function FarinhaPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <div className="wrap">
          <div>
            <Image
              className="hero-logo"
              src="/farinha/logo-clape.png"
              alt="Clape"
              width={96}
              height={96}
              priority
            />
            <p className="kicker">pra quem cansou de errar massa</p>
            <h1>
              Pizza Começa <em>na Farinha.</em>
            </h1>
            <p className="sub lead">
              Escolha a farinha perfeita no supermercado brasileiro e calcule
              sua massa <strong>em gramas</strong> — pizza napolitana, NY,
              romana e pão. eBook + Calculadora online exclusiva.
            </p>
            <CtaButton
              href={FARINHA_CHECKOUT_URL}
              note="12× R$ 8,17 ou R$ 79 à vista · acesso imediato"
            >
              QUERO A FARINHA CERTA
            </CtaButton>
            <div className="hero-badges">
              <span className="badge">📕 PDF + EPUB</span>
              <span className="badge">🧮 Calculadora online</span>
              <span className="badge">📚 Referências AVPN citadas</span>
            </div>
          </div>
          <div className="hero-book">
            <Image
              src="/farinha/capa-livro.png"
              alt="Capa do eBook Pizza Começa na Farinha, por Igor Oliveira"
              width={480}
              height={640}
              priority
            />
            <div className="seal">
              <b>R$ 79</b>
              <span>ou 12× R$ 8,17</span>
            </div>
          </div>
        </div>
      </header>

      <section className="dor">
        <div className="wrap">
          <div>
            <p className="kicker">te parece familiar?</p>
            <h2>
              A receita era a mesma. <em>O resultado, nunca.</em>
            </h2>
            <ul>
              <li>A massa rasga na hora de abrir o disco</li>
              <li>Cresce bonito… e murcha no forno</li>
              <li>Gruda na bancada e você &quot;conserta&quot; com mais farinha</li>
              <li>Comprou &quot;tipo 00&quot; achando que era farinha forte</li>
              <li>Receita em xícara que nunca repete o resultado</li>
            </ul>
            <p className="virada">
              O problema quase nunca é a sua técnica. É{" "}
              <strong>farinha inadequada</strong> +{" "}
              <strong>proporção no chute</strong>. Este guia corrige os dois.
            </p>
          </div>
          <Image
            src="/farinha/il-maos-massa.png"
            alt="Mãos trabalhando a massa"
            width={520}
            height={520}
          />
        </div>
      </section>

      <section className="recebe">
        <div className="wrap center">
          <p className="kicker">o pacote completo</p>
          <h2>
            O que você <em>recebe</em>
          </h2>
          <div className="cards">
            <div className="card">
              <div className="ico">📕</div>
              <h3>eBook Pizza Começa na Farinha</h3>
              <p>
                8 capítulos + anexos. W, P/L, proteína, rótulo BR, farinha por
                estilo, diagnóstico de erros. PDF e EPUB.
              </p>
              <span className="tag">valor R$ 67</span>
            </div>
            <div className="card">
              <div className="ico">🧮</div>
              <h3>Calculadora de Massa</h3>
              <p>
                Online, no navegador do celular ou computador. Presets napolitana, NY, romana
                e pão. Modo &quot;quero X bolas&quot; e fermento seco 1:3. Login exclusivo para compradores.
              </p>
              <span className="tag">bônus · valor R$ 37</span>
            </div>
            <div className="card">
              <div className="ico">📊</div>
              <h3>Tabela-mestra + Glossário</h3>
              <p>
                Referência rápida de farinha por objetivo, hidratação por estilo
                e o vocabulário do padeiro.
              </p>
              <span className="tag">bônus · valor R$ 27</span>
            </div>
            <div className="card">
              <div className="ico">📋</div>
              <h3>Templates + Exercícios</h3>
              <p>
                Ficha de receita, Diário de farinha imprimível e 6 exercícios
                com gabarito para fixar o baker&apos;s math.
              </p>
              <span className="tag">bônus · valor R$ 17</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aprende">
        <div className="wrap">
          <Image
            src="/farinha/il-supermercado.png"
            alt="Escolhendo farinha no supermercado"
            width={480}
            height={480}
          />
          <div>
            <p className="kicker">do rótulo ao forno</p>
            <h2>
              O que você vai <em>aprender</em>
            </h2>
            <ul className="check">
              <li>
                Ler os <strong>5 números</strong> que definem qualquer farinha:
                W, P/L, proteína, Falling Number e cinzas
              </li>
              <li>
                Por que <strong>&quot;tipo 00&quot; não é farinha forte</strong>{" "}
                — e como não cair nesse mito
              </li>
              <li>
                Escolher farinha no mercado BR usando só o rótulo (proteína ≥ 12
                g como bússola)
              </li>
              <li>
                A farinha certa por estilo:{" "}
                <strong>napolitana (faixas AVPN), NY, romana, pão e levain</strong>
              </li>
              <li>
                <strong>Baker&apos;s math</strong>: farinha = 100% e todos os
                ingredientes em gramas
              </li>
              <li>
                Diagnosticar por que a massa deu errado — e corrigir na próxima
                fornada
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="numeros">
        <div className="wrap">
          <div className="num">
            <b>8</b>
            <span>capítulos + anexos completos</span>
          </div>
          <div className="num">
            <b>5</b>
            <span>presets de massa na calculadora</span>
          </div>
          <div className="num">
            <b>100%</b>
            <span>das afirmações com fonte ou rótulo de mercado</span>
          </div>
          <div className="num">
            <b>0</b>
            <span>estatística inventada ou promessa vazia</span>
          </div>
        </div>
      </section>

      <section className="oferta">
        <div className="wrap center">
          <p className="kicker">oferta completa</p>
          <h2>
            Tudo isso, <em>hoje</em>
          </h2>
          <div className="oferta-box">
            <ul>
              <li>
                <b>eBook Pizza Começa na Farinha</b> (PDF + EPUB) — R$ 67
              </li>
              <li>
                <b>Calculadora de Massa v2</b> online — R$ 37
              </li>
              <li>
                <b>Tabela-mestra + glossário</b> — R$ 27
              </li>
              <li>
                <b>Templates + exercícios</b> — R$ 17
              </li>
            </ul>
            <p className="valor-de">valor total: R$ 148</p>
            <p className="valor">
              12× R$ 8,17 <small>ou R$ 79 à vista</small>
            </p>
            <p
              style={{
                color: "#777",
                fontSize: "0.92rem",
                margin: "6px 0 22px",
              }}
            >
              Menos que dois deliveries de pizza — para usar toda semana.
            </p>
            <CtaButton
              href={FARINHA_CHECKOUT_URL}
              note="12× R$ 8,17 ou R$ 79 à vista · compra segura via Hotmart"
            >
              GARANTIR MEU ACESSO AGORA
            </CtaButton>
          </div>
          <div className="garantia">
            <div className="selo">🛡️</div>
            <p>
              <strong>Garantia incondicional de 7 dias.</strong> Se o guia e a
              calculadora não simplificarem sua próxima massa, peça reembolso
              direto na Hotmart. Sem perguntas.
            </p>
          </div>
        </div>
      </section>

      <section className="autor">
        <div className="wrap">
          <div className="autor-foto">
            <Image
              src="/farinha/il-margherita.png"
              alt="Igor Oliveira — Clape"
              width={150}
              height={150}
            />
          </div>
          <div>
            <p className="kicker">quem escreveu</p>
            <h2>
              Igor Oliveira — <em>Clape</em>
            </h2>
            <p>
              Desenvolve conteúdo prático para quem faz pizza e pão em casa e
              cansou de receitas em xícaras que nunca repetem o resultado. Em{" "}
              <em>Pizza Começa na Farinha</em>, reuniu escolha de farinha (W,
              proteína, rótulo BR), referências AVPN verificáveis e a Calculadora
              de Massa online — gramas certos, sem prometer certificação
              napolitana.
            </p>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p className="kicker center" style={{ display: "block", textAlign: "center" }}>
            dúvidas comuns
          </p>
          <h2 className="center">
            Perguntas <em>frequentes</em>
          </h2>
          {FAQ.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <p className="kicker">sua próxima fornada</p>
          <h2>
            No chute — ou <em>em gramas?</em>
          </h2>
          <p>
            Pare de adivinhar farinha e proporção. Entre na próxima massa
            sabendo exatamente o que comprar e quanto pesar.
          </p>
          <CtaButton
            href={FARINHA_CHECKOUT_URL}
            note="12× R$ 8,17 ou R$ 79 à vista · acesso imediato"
          >
            QUERO A FARINHA CERTA
          </CtaButton>
        </div>
      </section>

      <footer className="farinha-footer">
        <p>
          © {year} Igor Oliveira — Clape · Todos os direitos reservados.
        </p>
        <p style={{ marginTop: 6 }}>
          Material educativo. Não substitui orientação nutricional ou formação
          profissional. Não certifica pizza AVPN.
          <br />
          Suporte:{" "}
          <a href={`mailto:${FARINHA_SUPPORT_EMAIL}`}>
            {FARINHA_SUPPORT_EMAIL}
          </a>
        </p>
      </footer>
    </>
  );
}
