import { Link } from 'react-router-dom'

const sections = [
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
    body: [
      'Nosso Encarregado de Proteção de Dados pode ser contatado pelo e-mail: privacidade@bossflow.pro',
    ],
  },
]

export default function Privacidade() {
  return (
    <div style={{ background: '#06060c', minHeight: '100vh', color: '#d0d0e0' }}>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        background: 'rgba(6,6,12,0.9)',
        backdropFilter: 'blur(12px)',
        zIndex: 10,
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/bossflow.png" alt="BossFlow" style={{ height: 26, objectFit: 'contain' }} />
        </Link>
        <Link to="/" style={{
          fontSize: 13, fontWeight: 600, color: '#7c6ef7',
          textDecoration: 'none', padding: '8px 16px', borderRadius: 10,
          background: 'rgba(124,110,247,0.08)', border: '1px solid rgba(124,110,247,0.2)',
        }}>
          ← Voltar
        </Link>
      </header>

      {/* Conteúdo */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Título */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 999, marginBottom: 20,
            background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)',
            fontSize: 12, fontWeight: 600, color: '#34d399',
          }}>
            🔒 LGPD — Conformidade
          </div>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 800,
            color: '#e8e8f0',
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Política de Privacidade
          </h1>
          <p style={{ color: '#3a3a5c', fontSize: 14 }}>
            Última atualização: 04 de março de 2026
          </p>
        </div>

        {/* Intro */}
        <div style={{
          padding: '20px 24px', borderRadius: 16, marginBottom: 48,
          background: 'rgba(52,211,153,0.04)',
          border: '1px solid rgba(52,211,153,0.15)',
        }}>
          <p style={{ fontSize: 14, color: '#6b6b8a', lineHeight: 1.7, margin: 0 }}>
            Sua privacidade é importante para nós. Esta política explica de forma clara e transparente como o BossFlow coleta, utiliza e protege seus dados, em total conformidade com a <strong style={{ color: '#34d399' }}>LGPD (Lei nº 13.709/2018)</strong>.
          </p>
        </div>

        {/* Seções */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {sections.map(s => (
            <div key={s.n}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: '#34d399',
                }}>
                  {s.n}
                </div>
                <h2 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 18, fontWeight: 700,
                  color: '#e8e8f0', margin: 0,
                }}>
                  {s.title}
                </h2>
              </div>

              {s.body?.map((p, i) => (
                <p key={i} style={{ fontSize: 14, color: '#6b6b8a', lineHeight: 1.75, marginBottom: 12, marginLeft: 44 }}
                  dangerouslySetInnerHTML={{ __html: p }} />
              ))}

              {s.bullets && (
                <ul style={{ marginLeft: 44, marginBottom: 12, paddingLeft: 16 }}>
                  {s.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: 14, color: '#6b6b8a', lineHeight: 1.75, marginBottom: 6 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {s.bodyAfter?.map((p, i) => (
                <p key={i} style={{ fontSize: 14, color: '#6b6b8a', lineHeight: 1.75, marginBottom: 12, marginLeft: 44 }}>
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '56px 0 40px' }} />

        {/* Footer */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#3a3a5c' }}>
            Dúvidas sobre privacidade?{' '}
            <a href="mailto:privacidade@bossflow.pro" style={{ color: '#34d399', textDecoration: 'none' }}>
              privacidade@bossflow.pro
            </a>
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link to="/termos" style={{ fontSize: 13, color: '#3a3a5c', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#7c6ef7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3a3a5c')}>
              Termos de Uso
            </Link>
            <span style={{ color: '#2a2a3e' }}>·</span>
            <Link to="/" style={{ fontSize: 13, color: '#3a3a5c', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#7c6ef7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3a3a5c')}>
              Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
