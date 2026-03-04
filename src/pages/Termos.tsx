import { Link } from 'react-router-dom'

const sections = [
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
    body: ['O BossFlow oferece planos gratuitos e pagos. Os planos pagos são processados pela plataforma Cakto, parceira de pagamentos. Ao contratar um plano pago:'],
    bullets: [
      'O pagamento é processado diretamente pela Cakto, não pela BossFlow',
      'A BossFlow não armazena dados de cartão de crédito ou informações bancárias',
      'A cobrança ocorre na periodicidade contratada (mensal ou anual)',
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

export default function Termos() {
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
            background: 'rgba(124,110,247,0.08)', border: '1px solid rgba(124,110,247,0.2)',
            fontSize: 12, fontWeight: 600, color: '#7c6ef7',
          }}>
            📄 Documento legal
          </div>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(28px, 5vw, 40px)',
            fontWeight: 800,
            color: '#e8e8f0',
            marginBottom: 12,
            lineHeight: 1.2,
          }}>
            Termos de Uso
          </h1>
          <p style={{ color: '#3a3a5c', fontSize: 14 }}>
            Última atualização: 04 de março de 2026
          </p>
        </div>

        {/* Intro */}
        <div style={{
          padding: '20px 24px', borderRadius: 16, marginBottom: 48,
          background: 'rgba(124,110,247,0.05)',
          border: '1px solid rgba(124,110,247,0.15)',
        }}>
          <p style={{ fontSize: 14, color: '#6b6b8a', lineHeight: 1.7, margin: 0 }}>
            Estes Termos de Uso regulam o acesso e uso da plataforma BossFlow. Leia com atenção antes de utilizar nossos serviços. Ao criar uma conta, você concorda automaticamente com estes termos.
          </p>
        </div>

        {/* Seções */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {sections.map(s => (
            <div key={s.n}>
              {/* Número + título */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(124,110,247,0.1)', border: '1px solid rgba(124,110,247,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: '#7c6ef7',
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

              {/* Parágrafos antes */}
              {s.body?.map((p, i) => (
                <p key={i} style={{ fontSize: 14, color: '#6b6b8a', lineHeight: 1.75, marginBottom: 12, marginLeft: 44 }}>
                  {p}
                </p>
              ))}

              {/* Bullets */}
              {s.bullets && (
                <ul style={{ marginLeft: 44, marginBottom: 12, paddingLeft: 16 }}>
                  {s.bullets.map((b, i) => (
                    <li key={i} style={{ fontSize: 14, color: '#6b6b8a', lineHeight: 1.75, marginBottom: 6 }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Parágrafos depois */}
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

        {/* Footer da página */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', textAlign: 'center' }}>
          <p style={{ fontSize: 13, color: '#3a3a5c' }}>
            Tem dúvidas? Fale com a gente em{' '}
            <a href="mailto:suporte@bossflow.pro" style={{ color: '#7c6ef7', textDecoration: 'none' }}>
              suporte@bossflow.pro
            </a>
          </p>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link to="/privacidade" style={{ fontSize: 13, color: '#3a3a5c', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#7c6ef7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3a3a5c')}>
              Política de Privacidade
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
