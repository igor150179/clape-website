# Calculadora — Acesso online

A calculadora em `/calculadora` exige login. Fluxo:

1. Comprador informa **e-mail da Hotmart** + **senha** (enviada na compra)
2. Recebe **código de 6 dígitos** por e-mail (válido 15 min)
3. Após confirmar, fica logado por **3 dias** neste aparelho
4. **Um aparelho por vez** — novo login encerra a sessão anterior

## Variáveis de ambiente (Vercel)

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
RESEND_API_KEY=
CALCULADORA_EMAIL_FROM=Clape <acesso@clape.com.br>
CALCULADORA_ADMIN_SECRET=        # Bearer token para provisionar usuários
HOTMART_WEBHOOK_SECRET=          # x-hotmart-hottok do webhook
```

Sem `RESEND_API_KEY`, códigos e senhas aparecem no log (apenas desenvolvimento).

## Provisionar comprador manualmente

```bash
curl -X POST https://clape.com.br/api/admin/provision \
  -H "Authorization: Bearer SEU_ADMIN_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"email":"comprador@email.com"}'
```

Resposta inclui senha gerada se você não enviar `"password"`.

## Webhook Hotmart

URL: `https://clape.com.br/api/webhooks/hotmart`

Configure o **hottok** igual a `HOTMART_WEBHOOK_SECRET`. Em compra aprovada, cria usuário e envia e-mail de boas-vindas. Em reembolso, desativa.

## Desativar acesso (reembolso)

```bash
curl -X DELETE https://clape.com.br/api/admin/provision \
  -H "Authorization: Bearer SEU_ADMIN_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"email":"comprador@email.com"}'
```
