import './App.css'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="nav__logo">Pulseboard</div>
        <nav className="nav__links">
          <a href="#features">Product</a>
          <a href="#about">How it works</a>
          <button className="nav__cta btn btn--primary" type="button">
            Start free trial
          </button>
        </nav>
      </header>

      <main className="hero">
        <section className="hero__content">
          <p className="hero__eyebrow">SaaS analytics for product teams</p>
          <h1 className="hero__title">
            See how customers use your product
            <span className="hero__accent"> in real time.</span>
          </h1>
          <p className="hero__subtitle">
            Pulseboard is the imaginary analytics platform that helps you understand behavior,
            ship better features, and share insights with your team in minutes.
          </p>

          <div className="hero__actions">
            <button className="btn btn--primary" type="button">
              Start free trial
            </button>
            <button className="btn btn--ghost" type="button">
              Book a demo
            </button>
          </div>

          <div className="hero__meta" id="features">
            <span>📊 Funnels, cohorts & dashboards</span>
            <span>⚡ Live event streams</span>
            <span>🔐 SOC2-ready infrastructure</span>
          </div>
        </section>

        <section className="hero__preview" aria-label="Application preview" id="about">
          <div className="preview-card">
            <div className="preview-card__header">
              <span className="preview-dot" />
              <span className="preview-dot" />
              <span className="preview-dot" />
            </div>
            <div className="preview-card__body">
              <div className="preview-pill">Live product overview</div>
              <h2 className="preview-title">Every key metric, in one place</h2>
              <p className="preview-text">
                Imagine your signups, retention, and feature usage stitched together into a single
                real-time view that everyone on the team understands.
              </p>
              <div className="preview-grid">
                <div className="preview-tile">{/* Placeholder for chart */}</div>
                <div className="preview-tile preview-tile--accent">{/* Highlight metric */}</div>
                <div className="preview-tile">{/* Placeholder for table */}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
