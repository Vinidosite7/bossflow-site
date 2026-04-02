import { Link } from 'react-router-dom'

type Section = {
  n: string
  title: string
  body: string[]
  bullets?: string[]
  highlight?: boolean
}

const sections: Section[] = [
  {
    n: '1', title: 'Introdução',
    body: [
      'A BossFlow está comprometida com a privacidade e proteção dos dados pessoais dos seus usuários, em conformidade com a Lei Geral de Proteção de Dados Pessoais — LGPD (Lei nº 13.709/2018).',
      'Esta Política descreve quais dados coletamos, como os utilizamos, com quem compartilhamos e quais são seus direitos como titular dos dados.',
    ],
  },
  {
    n: '2', title: 'Dados Coletados',
    body: ['Coletamos as seguintes categorias de dados:'],
    bullets: [
      'Dados de cadastro: nome, e-mail e foto de perfil',
      'Dados do negócio: nome da empresa, logo, segmento de atuação',
      'Dados financeiros inseridos por você: receitas, despesas, metas (dados do seu negócio, não dados bancários)',
      'Dados de uso: páginas acessadas, funcionalidades utilizadas, data e hora de acesso',
      'Dados técnicos: endereço IP, tipo de dispositivo, navegador e sistema operacional',
    ],
    bodyAfter: ['Não coletamos dados de pagamento. Todas as transações de assinatura são processadas diretamente pela Cakto, nossa parceira de pagamentos.'],
  },
  {
    n: '3', title: 'Como Utilizamos os Dados',
    body: ['Utilizamos os dados coletados para:'],
    bullets: [
      'Fornecer, manter e melhorar os serviços da Plataforma',
      'Personalizar a experiência do Usuário',
      'Enviar notificações relacionadas ao uso da conta e da assinatura',
      'Responder a solicitações de suporte',
      'Analisar padrões de uso para aprimorar a Plataforma',
      'Cumprir obrigações legais e regulatórias',
    ],
  },
  {
    n: '4', title: 'Base Legal para o Tratamento',
    body: ['O tratamento de dados pessoais pela BossFlow tem como fundamento legal:'],
    bullets: [
      'Execução de contrato: para fornecer os serviços contratados',
      'Legítimo interesse: para melhoria da Plataforma e segurança',
      'Consentimento: para comunicações de marketing (quando aplicável)',
      'Cumprimento de obrigação legal: quando exigido por lei',
    ],
  },
  {
    n: '5', title: 'Compartilhamento de Dados',
    body: ['Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com:'],
    bullets: [
      'Cakto: para processamento de pagamentos das assinaturas',
      'Supabase: infraestrutura de banco de dados e autenticação',
      'Google: autenticação via Google OAuth (somente se você optar por fazer login com Google)',
      'Autoridades públicas: quando exigido por lei ou ordem judicial',
    ],
    bodyAfter: ['Todos os parceiros são contratualmente obrigados a proteger seus dados e utilizá-los apenas para as finalidades especificadas.'],
  },
  {
    n: '6', title: 'Retenção de Dados',
    body: ['Mantemos seus dados pelo tempo necessário:'],
    bullets: [
      'Conta ativa: enquanto você utilizar a Plataforma',
      'Após encerramento: até 90 dias para possibilitar reativação ou exportação',
      'Obrigações legais: pelo prazo exigido pela legislação aplicável',
    ],
    bodyAfter: ['Após os prazos de retenção, os dados são excluídos ou anonimizados.'],
  },
  {
    n: '7', title: 'Segurança dos Dados',
    highlight: true,
    body: ['Adotamos medidas técnicas e organizacionais para proteger seus dados:'],
    bullets: [
      'Criptografia em trânsito (HTTPS/TLS)',
      'Autenticação segura com Supabase Auth',
      'Controle de acesso por função (Owner, Admin, Member, Viewer)',
      'Monitoramento de acessos e atividades suspeitas',
    ],
    bodyAfter: ['Em caso de incidente de segurança que afete seus dados, você será notificado conforme exigido pela LGPD.'],
  },
  {
    n: '8', title: 'Seus Direitos como Titular',
    highlight: true,
    body: ['Nos termos da LGPD, você tem direito a:'],
    bullets: [
      'Confirmação e acesso: saber quais dados temos sobre você',
      'Correção: solicitar correção de dados inexatos ou desatualizados',
      'Eliminação: solicitar a exclusão de dados desnecessários',
      'Portabilidade: receber seus dados em formato estruturado',
      'Revogação do consentimento: a qualquer momento, sem ônus',
      'Oposição: opor-se ao tratamento realizado em desconformidade com a LGPD',
    ],
    bodyAfter: ['Para exercer seus direitos, entre em contato: privacidade@bossflow.pro'],
  },
  {
    n: '9', title: 'Cookies',
    body: ['Utilizamos cookies para:'],
    bullets: [
      'Manter sua sessão autenticada',
      'Lembrar preferências da interface',
      'Analisar o desempenho da Plataforma',
    ],
    bodyAfter: ['Você pode configurar seu navegador para bloquear cookies, mas isso pode afetar o funcionamento da Plataforma.'],
  },
  {
    n: '10', title: 'Menores de Idade',
    body: ['O BossFlow não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se tomarmos conhecimento disso, excluiremos os dados imediatamente.'],
  },
  {
    n: '11', title: 'Alterações nesta Política',
    body: ['Esta Política pode ser atualizada periodicamente. Alterações significativas serão comunicadas por e-mail ou notificação na Plataforma com antecedência mínima de 15 dias.'],
  },
  {
    n: '12', title: 'Encarregado de Dados (DPO)',
    body: ['Nosso Encarregado de Proteção de Dados pode ser contatado pelo e-mail: privacidade@bossflow.pro'],
  },
]

const accent = '#34d399'
const accentRgb = '52,211,153'
const purple = '#7c6ef7'
const purpleRgb = '124,110,247'

export default function Privacidade() {
  return (
    <div style={{ background: '#06060f', minHeight: '100vh', color: '#d0d0e0', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>

      {/* Glow de fundo */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500,
          background: `radial-gradient(ellipse at 50% 0%, rgba(${accentRgb},0.12), transparent 70%)`,
        }} />
      </div>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '18px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 20,
        background: 'rgba(6,6,15,0.85)',
        backdropFilter: 'blur(16px)',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/bossflow.png" alt="BossFlow" style={{ height: 26, objectFit: 'contain' }} />
        </Link>
        <Link to="/" style={{
          fontSize: 13, fontWeight: 600, color: purple,
          textDecoration: 'none', padding: '7px 16px', borderRadius: 10,
          background: `rgba(${purpleRgb},0.08)`,
          border: `1px solid rgba(${purpleRgb},0.2)`,
        }}>
          ← Voltar ao site
        </Link>
      </header>

      {/* Conteúdo */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 780, margin: '0 auto', padding: '72px 24px 100px' }}>

        {/* Hero */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 14px', borderRadius: 999, marginBottom: 24,
            background: `rgba(${accentRgb},0.08)`,
            border: `1px solid rgba(${accentRgb},0.2)`,
            fontSize: 12, fontWeight: 600, color: accent, letterSpacing: '0.05em',
          }}>
            🔒 LGPD — CONFORMIDADE
          </div>

          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(32px, 6vw, 52px)',
            fontWeight: 800,
            color: '#f0f0f8',
            margin: '0 0 16px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>
            Política de Privacidade
          </h1>

          <p style={{ fontSize: 15, color: '#5a5a7a', margin: '0 0 8px' }}>
            Última atualização: 04 de março de 2026
          </p>

          <div style={{
            width: 48, height: 3, borderRadius: 99, margin: '24px auto 0',
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }} />
        </div>

        {/* Card intro */}
        <div style={{
          padding: '22px 28px', borderRadius: 16, marginBottom: 40,
          background: `rgba(${accentRgb},0.04)`,
          border: `1px solid rgba(${accentRgb},0.15)`,
          display: 'flex', gap: 16, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0, marginTop: 2,
            background: `rgba(${accentRgb},0.1)`,
            border: `1px solid rgba(${accentRgb},0.25)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16,
          }}>🛡️</div>
          <p style={{ fontSize: 14, color: '#7a7a9a', lineHeight: 1.75, margin: 0 }}>
            Sua privacidade é importante para nós. Esta política explica de forma clara e transparente como o BossFlow coleta, utiliza e protege seus dados, em total conformidade com a{' '}
            <strong style={{ color: accent, fontWeight: 600 }}>LGPD (Lei nº 13.709/2018)</strong>.
          </p>
        </div>

        {/* Destaque "não vendemos dados" */}
        <div style={{
          padding: '16px 22px', borderRadius: 12, marginBottom: 56,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: 18 }}>✅</span>
          <p style={{ fontSize: 13, color: '#5a5a7a', margin: 0, lineHeight: 1.6 }}>
            <strong style={{ color: '#9a9ab8', fontWeight: 600 }}>Não vendemos seus dados.</strong>{' '}
            Nunca vendemos, alugamos ou trocamos informações pessoais com terceiros para fins de marketing.
          </p>
        </div>

        {/* Índice */}
        <div style={{
          padding: '20px 24px', borderRadius: 14, marginBottom: 56,
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#3a3a5a', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 14px' }}>
            Índice
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
            {sections.map(s => (
              <a key={s.n} href={`#s${s.n}`} style={{
                fontSize: 13, color: '#5a5a7a', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
                onMouseEnter={e => (e.currentTarget.style.color = accent)}
                onMouseLeave={e => (e.currentTarget.style.color = '#5a5a7a')}>
                <span style={{ fontSize: 11, color: accent, fontWeight: 700 }}>{s.n}.</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Seções */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {sections.map((s, idx) => (
            <div key={s.n} id={`s${s.n}`} style={{
              padding: '28px 32px',
              borderRadius: 16,
              marginBottom: 8,
              background: s.highlight
                ? `rgba(${accentRgb},0.04)`
                : idx % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent',
              border: s.highlight
                ? `1px solid rgba(${accentRgb},0.18)`
                : '1px solid rgba(255,255,255,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                  background: s.highlight
                    ? `rgba(${accentRgb},0.15)`
                    : `rgba(${accentRgb},0.07)`,
                  border: `1px solid rgba(${accentRgb},${s.highlight ? '0.35' : '0.18'})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 800, color: accent,
                  fontFamily: 'Syne, sans-serif',
                }}>
                  {s.n}
                </div>
                <h2 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 17, fontWeight: 700,
                  color: '#e0e0f0', margin: 0, letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h2>
                {s.highlight && (
                  <span style={{
                    marginLeft: 'auto', fontSize: 11, fontWeight: 700,
                    padding: '3px 10px', borderRadius: 99,
                    background: `rgba(${accentRgb},0.1)`,
                    color: accent, letterSpacing: '0.04em',
                  }}>
                    SEUS DIREITOS
                  </span>
                )}
              </div>

              {s.body?.map((p, i) => (
                <p key={i} style={{
                  fontSize: 14, color: '#6a6a8a', lineHeight: 1.8,
                  marginBottom: 10, marginLeft: 48,
                }}
                  dangerouslySetInnerHTML={{ __html: p }} />
              ))}

              {s.bullets && (
                <ul style={{ marginLeft: 48, marginBottom: 10, paddingLeft: 0, listStyle: 'none' }}>
                  {s.bullets.map((b, i) => (
                    <li key={i} style={{
                      fontSize: 14, color: '#6a6a8a', lineHeight: 1.75,
                      marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10,
                    }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%', flexShrink: 0, marginTop: 8,
                        background: accent, opacity: 0.5,
                      }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {s.bodyAfter?.map((p, i) => (
                <p key={i} style={{
                  fontSize: 13, color: '#5a5a78', lineHeight: 1.75,
                  marginBottom: 0, marginLeft: 48,
                  borderLeft: `2px solid rgba(${accentRgb},0.2)`,
                  paddingLeft: 14, marginTop: 12,
                  fontStyle: 'italic',
                }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          height: 1, margin: '64px 0 48px',
          background: `linear-gradient(90deg, transparent, rgba(${accentRgb},0.2), transparent)`,
        }} />

        {/* Footer CTA */}
        <div style={{
          textAlign: 'center',
          padding: '40px 32px',
          borderRadius: 20,
          background: `rgba(${accentRgb},0.03)`,
          border: `1px solid rgba(${accentRgb},0.1)`,
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: '#c0c0dc', margin: '0 0 8px', fontFamily: 'Syne, sans-serif' }}>
            Dúvidas sobre sua privacidade?
          </p>
          <p style={{ fontSize: 13, color: '#5a5a7a', margin: '0 0 24px' }}>
            Nosso DPO responde em até 15 dias úteis, conforme a LGPD.
          </p>
          <a href="mailto:privacidade@bossflow.pro" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '11px 24px', borderRadius: 12, fontSize: 14, fontWeight: 600,
            color: '#06060f', textDecoration: 'none',
            background: accent,
            boxShadow: `0 4px 24px rgba(${accentRgb},0.25)`,
          }}>
            privacidade@bossflow.pro
          </a>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 28 }}>
            <Link to="/termos" style={{ fontSize: 13, color: '#4a4a6a', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a4a6a')}>
              Termos de Uso
            </Link>
            <span style={{ color: '#2a2a3e' }}>·</span>
            <Link to="/" style={{ fontSize: 13, color: '#4a4a6a', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a4a6a')}>
              Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
