import { useState } from 'react';

type IconMarkProps = { large?: boolean };

function Mark({ large = false }: IconMarkProps) {
  return (
    <span className={`mark${large ? ' mark-large' : ''}`} aria-hidden="true">
      {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
    </span>
  );
}

function Brand({ large = false }: IconMarkProps) {
  return <span className={`brand${large ? ' brand-large' : ''}`}><Mark large={large} /><span>Forecaster</span></span>;
}

function Radar() {
  return (
    <div className="radar" aria-label="Forecaster golf ball analytics">
      <span className="radar-ring radar-ring-outer" />
      <span className="radar-ring radar-ring-middle" />
      <span className="radar-ring radar-ring-inner" />
      <span className="radar-node node-top" />
      <span className="radar-node node-right" />
      <span className="radar-node node-bottom" />
      <div className="ball"><span /></div>
      <div className="metric metric-spin"><small>SPIN</small><strong>4000rpm</strong></div>
      <div className="metric metric-accuracy"><small>ACCURACY</small><strong>27%</strong></div>
      <div className="metric metric-speed"><small>SWING SPEED</small><strong>90mph</strong></div>
    </div>
  );
}

const plans = [
  { name: 'BASIC', price: 'FREE', items: ['“Evil” mode only', 'No saved data'], subject: 'Basic membership' },
  { name: 'PRO', price: '$19', suffix: '/month', items: ['“Evil” and “Coach” modes', 'Basic analytics'], subject: 'Pro membership' },
  { name: 'PREMIUM', price: '$39', suffix: '/month', items: ['All feedback modes', 'Advanced analytics'], subject: 'Premium membership' },
];

const questions = [
  ['What happens if my ball gets destroyed?', 'Your membership covers replacement and keeps your player profile intact.'],
  ['Does this work for left-handed players?', 'Yes. Forecaster adapts its analysis to your stance and swing direction.'],
  ['Can Forecaster fix my swing?', 'It gives you the immediate feedback needed to understand and improve it.'],
  ['Does the ball work without Bluetooth?', 'Core swing data is saved and syncs when a connection is available.'],
  ['Is this real?', 'It is a concept for a smarter, more connected way to play golf.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="nav" aria-label="Primary navigation">
          <a className="nav-brand" href="#top" onClick={closeMenu}><Brand /></a>
          <button className="menu-button" aria-expanded={menuOpen} aria-controls="nav-links" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="menu-label">Menu</span><span className="menu-icon">☰</span>
          </button>
          <div id="nav-links" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#features" onClick={closeMenu}>Modes</a>
            <a href="#membership" onClick={closeMenu}>Membership</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <h1>Real-time golf<br />analysis from<br /><em>the future</em></h1>
            <div className="review">
              <span className="stars">★★★★★</span>
              <span className="review-quote">“Now I’m hitting birdies instead of branches.”</span>
              <span className="reviewer"><span className="review-avatar" /> Tiger Forester, USA</span>
            </div>
            <div className="hero-actions"><a className="button button-primary" href="#membership">Get Forecaster <span>●</span></a><a className="button button-outline" href="#features">How it works <span>●</span></a></div>
          </div>
          <Radar />
        </section>

        <section className="meet container" aria-label="About Forecaster">
          <strong>Meet Forecaster.</strong><span className="meet-dot" /><p>The smart golf ball that delivers real-time audio feedback to your Bluetooth earbuds and saves every swing’s data in the app for future analysis.</p>
        </section>

        <section id="features" className="features">
          <div className="container"><h2>Features</h2>
            <div className="feature-grid">
              <article className="feature feature-swing"><img src="/images/golfer-swing.jpg" alt="Golfer completing a swing on a course" /><div className="feature-copy"><h3>Instant Shot<br />Breakdown</h3><p>AI-driven insights like “Wind at 12 mph, trajectory optimal for birdies.”</p></div></article>
              <article className="feature feature-audio"><img src="/images/golfer-portrait.jpg" alt="Golfer wearing a cap on the course" /><div className="feature-copy"><h3>Real-time<br />Audio Feedback</h3><p>Live feedback through your Bluetooth earbuds, tailored to your preferred tone: supportive, neutral, or downright snarky.</p></div></article>
              <article className="feature feature-data"><div className="phone-shot"><img src="/images/golf-ball.jpg" alt="Close-up of a golf ball" /><span className="phone-stat">32%</span></div><div className="feature-copy"><h3>Death By Data</h3><p>Every swing, slice, and missed putt is stored in the app for review, so you can relive your worst shots whenever you want.</p></div></article>
            </div>
          </div>
        </section>

        <section id="membership" className="membership section-dark"><div className="container membership-inner"><h2>Membership</h2><p className="membership-copy">If a $500 golf ball isn’t enough, you can improve your margins<br className="desktop-only" /> further by kindly providing us with recurring revenue.</p><div className="plan-grid">{plans.map(plan => <article className="plan" key={plan.name}><h3>{plan.name}</h3><strong>{plan.price}{plan.suffix && <small>{plan.suffix}</small>}</strong>{plan.items.map(item => <p key={item}>{item}</p>)}<a className="plan-button" href={`mailto:hello@forecaster.golf?subject=${encodeURIComponent(plan.subject)}`}>Get {plan.name[0] + plan.name.slice(1).toLowerCase()} <span>●</span></a></article>)}</div><small className="fine-print">*Plans and prices are subject to change based on the whims of our CFO.</small></div></section>

        <section id="faq" className="faq"><div className="container faq-inner"><h2>Frequently<br /><span>Asked</span><br />Forecaster<br />Questions</h2><div className="faq-list">{questions.map(([question, answer], index) => <div className={`faq-item${openQuestion === index ? ' is-open' : ''}`} key={question}><button onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)} aria-expanded={openQuestion === index}><span>{question}</span><b>+</b></button>{openQuestion === index && <p>{answer}</p>}</div>)}</div></div></section>
      </main>

      <footer className="footer"><div className="container footer-brand"><a href="#top"><Brand large /></a></div><div className="container footer-bar"><span>◎ &nbsp;× &nbsp;▣</span><small>© 2025 Flux Academy</small></div></footer>
    </div>
  );
}

export default App;
