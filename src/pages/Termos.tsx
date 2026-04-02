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
    n: '1', title: 'Aceitação dos Termos',
    body: [
      'Ao acessar ou utilizar a plataforma BossFlow ("Plataforma"), você ("Usuário") concorda com estes Termos de Uso. Se não concordar com algum dos termos, não deverá utilizar a Plataforma.',
      'A BossFlow reserva-se o direito de modificar estes Termos a qualquer momento. Alterações relevantes serão comunicadas por e-mail ou notificação na Plataforma.',
    ],
  },
  {
    n: '2', title: 'Descrição do Serviço',
    body: ['O BossFlow é uma plataforma SaaS de gestão empresarial e financeira voltada para negócios brasileiros. Os serviços incluem:'],
    bullets: [
      'Dashboard financeiro com receitas, despesas e lucro em tempo real',
      'Gestão de metas mensais e acompanhamento de progresso',
      'Controle de tarefas e equipe',
      'Cadastro e gestão de múltiplas empresas',
      'Notificações e alertas financeiros',
      'Relatórios e análises de desempenho',
    ],
  },
  {
    n: '3', title: 'Criação de Conta e Responsabilidades',
    body: ['Para utilizar o BossFlow, o Usuário deve criar uma conta com informações verdadeiras. O Usuário é responsável por:'],
    bullets: [
      'Manter a confidencialidade de suas credenciais de acesso',
      'Todas as atividades realizadas em sua conta',
      'Notificar imediatamente a BossFlow sobre qualquer uso não autorizado da conta',
    ],
    bodyAfter: ['A BossFlow não se responsabiliza por danos decorrentes do descumprimento dessas obrigações.'],
  },
  {
    n: '4', title: 'Planos e Pagamentos',
    highlight: true,
    body: ['O BossFlow oferece planos gratuitos e pagos. Os planos pagos são processados pela plataforma Cakto, parceira de pagamentos. Ao contratar um plano pago:'],
    bullets: [
      'O pagamento é processado diretamente pela Cakto, não pela BossFlow',
      'A BossFlow não armazena dados de cartão de crédito ou informações bancárias',
      'A cobrança ocorre na periodicidade contratada (mensal)',
      'O cancelamento pode ser solicitado a qualquer momento, sem multa',
      'Não há reembolso proporcional por período não utilizado, salvo disposição legal',
    ],
    bodyAfter: ['Os valores dos planos podem ser atualizados com comunicação prévia de 30 dias.'],
  },
  {
    n: '5', title: 'Uso Permitido',
    body: ['O Usuário compromete-se a utilizar a Plataforma apenas para fins legais. É expressamente proibido:'],
    bullets: [
      'Usar a Plataforma para fins ilegais ou fraudulentos',
      'Tentar acessar sistemas ou dados de outros usuários sem autorização',
      'Reproduzir ou distribuir qualquer parte da Plataforma sem autorização',
      'Realizar engenharia reversa ou extração do código-fonte',
      'Utilizar bots, scripts ou automações não autorizadas',
    ],
  },
  {
    n: '6', title: 'Propriedade Intelectual',
    body: [
      'Todos os direitos de propriedade intelectual relacionados à Plataforma BossFlow, incluindo software, design, marca e logotipo, são de titularidade exclusiva da BossFlow.',
      'Os dados inseridos pelo Usuário permanecem de sua propriedade. A BossFlow não reivindica propriedade sobre os dados do negócio do Usuário.',
    ],
  },
  {
    n: '7', title: 'Disponibilidade',
    body: ['A BossFlow envidará esforços para manter a Plataforma disponível 24/7, podendo ocorrer:'],
    bullets: [
      'Manutenções programadas, comunicadas com antecedência',
      'Interrupções por força maior ou falhas de infraestrutura de terceiros',
      'Atualizações e melhorias da Plataforma',
    ],
  },
  {
    n: '8', title: 'Limitação de Responsabilidade',
    body: [
      'A BossFlow não se responsabiliza por danos indiretos ou consequenciais decorrentes do uso ou impossibilidade de uso da Plataforma. A responsabilidade total está limitada ao valor pago pelo Usuário nos últimos 3 meses.',
    ],
  },
  {
    n: '9', title: 'Rescisão',
    body: [
      'O Usuário pode encerrar sua conta a qualquer momento. A BossFlow pode suspender contas que violem estes Termos.',
      'Ao encerrar a conta, o Usuário pode solicitar a exportação de seus dados em até 30 dias.',
    ],
  },
  {
    n: '10', title: 'Lei Aplicável e Foro',
    body: [
      'Estes Termos são regidos pelas leis brasileiras, em especial pelo CDC (Lei nº 8.078/1990), Marco Civil da Internet (Lei nº 12.965/2014) e LGPD (Lei nº 13.709/2018).',
      'Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias.',
    ],
  },
  {
    n: '11', title: 'Contato',
    body: ['Para dúvidas ou solicitações relacionadas a estes Termos, entre em contato: suporte@bossflow.pro'],
  },
]

const accent = '#7c6ef7'
const accentRgb = '124,110,247'

export default function Termos() {
  return (
    <div style={{ background: '#06060f', minHeight: '100vh', color: '#d0d0e0', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>

      {/* Glow de fundo */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500,
          background: `radial-gradient(ellipse at 50% 0%, rgba(${accentRgb},0.18), transparent 70%)`,
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
          fontSize: 13, fontWeight: 600, color: accent,
          textDecoration: 'none', padding: '7px 16px', borderRadius: 10,
          background: `rgba(${accentRgb},0.08)`,
          border: `1px solid rgba(${accentRgb},0.2)`,
          transition: 'all 0.2s',
          display: 'flex', alignItems: 'center', gap: 6,
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
            📄 DOCUMENTO LEGAL
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
            Termos de Uso
          </h1>

          <p style={{ fontSize: 15, color: '#5a5a7a', margin: '0 0 8px' }}>
            Última atualização: 04 de março de 2026
          </p>

          {/* Divisor decorativo */}
          <div style={{
            width: 48, height: 3, borderRadius: 99, margin: '24px auto 0',
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }} />
        </div>

        {/* Card intro */}
        <div style={{
          padding: '22px 28px', borderRadius: 16, marginBottom: 56,
          background: `rgba(${accentRgb},0.05)`,
          border: `1px solid rgba(${accentRgb},0.18)`,
          display: 'flex', gap: 16, alignItems: 'flex-start',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10, flexShrink: 0, marginTop: 2,
            background: `rgba(${accentRgb},0.12)`,
            border: `1px solid rgba(${accentRgb},0.25)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 16,
          }}>💡</div>
          <p style={{ fontSize: 14, color: '#7a7a9a', lineHeight: 1.75, margin: 0 }}>
            Estes Termos de Uso regulam o acesso e uso da plataforma BossFlow. Leia com atenção antes de utilizar nossos serviços.{' '}
            <strong style={{ color: '#b0b0cc', fontWeight: 600 }}>Ao criar uma conta, você concorda automaticamente com estes termos.</strong>
          </p>
        </div>

        {/* Índice rápido */}
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
              transition: 'border-color 0.2s',
            }}>
              {/* Número + título */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                  background: s.highlight
                    ? `rgba(${accentRgb},0.18)`
                    : `rgba(${accentRgb},0.08)`,
                  border: `1px solid rgba(${accentRgb},${s.highlight ? '0.4' : '0.2'})`,
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
                    background: `rgba(${accentRgb},0.12)`,
                    color: accent, letterSpacing: '0.04em',
                  }}>
                    IMPORTANTE
                  </span>
                )}
              </div>

              {/* Parágrafos */}
              {s.body?.map((p, i) => (
                <p key={i} style={{
                  fontSize: 14, color: '#6a6a8a', lineHeight: 1.8,
                  marginBottom: 10, marginLeft: 48,
                }}>
                  {p}
                </p>
              ))}

              {/* Bullets */}
              {s.bullets && (
                <ul style={{ marginLeft: 48, marginBottom: 10, paddingLeft: 0, listStyle: 'none' }}>
                  {s.bullets.map((b, i) => (
                    <li key={i} style={{
                      fontSize: 14, color: '#6a6a8a', lineHeight: 1.75,
                      marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10,
                    }}>
                      <span style={{
                        width: 5, height: 5, borderRadius: '50%', flexShrink: 0, marginTop: 8,
                        background: accent, opacity: 0.6,
                      }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Body after */}
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
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)',
        }} />

        {/* Footer CTA */}
        <div style={{
          textAlign: 'center',
          padding: '40px 32px',
          borderRadius: 20,
          background: `rgba(${accentRgb},0.04)`,
          border: `1px solid rgba(${accentRgb},0.12)`,
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: '#c0c0dc', margin: '0 0 8px', fontFamily: 'Syne, sans-serif' }}>
            Tem dúvidas sobre os termos?
          </p>
          <p style={{ fontSize: 13, color: '#5a5a7a', margin: '0 0 24px' }}>
            Nossa equipe está pronta para ajudar.
          </p>
          <a href="mailto:suporte@bossflow.pro" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '11px 24px', borderRadius: 12, fontSize: 14, fontWeight: 600,
            color: 'white', textDecoration: 'none',
            background: `linear-gradient(135deg, ${accent}, #9d8fff)`,
            boxShadow: `0 4px 24px rgba(${accentRgb},0.3)`,
          }}>
            suporte@bossflow.pro
          </a>

          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 28 }}>
            <Link to="/privacidade" style={{ fontSize: 13, color: '#4a4a6a', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a4a6a')}>
              Política de Privacidade
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
