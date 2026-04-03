import { Link } from 'react-router-dom'

export default function ServicesPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Our Services</h2>
          <p className="sectionSub">
            Choose a path that fits your goals. We keep it structured, supportive,
            and results-driven.
          </p>
        </div>

        <div className="grid2">
          <div className="card">
            <div className="cardHeader">
              <span className="badge">Gain Weight</span>
              <Link to="/join?service=gain-weight" className="btn btnPrimary" style={{ padding: '0.65rem 0.9rem' }}>
                Join
              </Link>
            </div>
            <div style={{ height: 12 }} />
            <div className="cardMedia" style={{ height: 240 }}>
              <img src="/assets/Gain-Weight.jpeg" alt="Gain Weight" />
            </div>
            <p className="muted" style={{ marginTop: 14, color: 'var(--text)', fontWeight: 800, lineHeight: 1.6 }}>
              At <strong>FitNest</strong>, our weight gain program is carefully designed
              for individuals who want to build lean muscle mass in a healthy and
              structured manner.
            </p>
            <p className="muted" style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 750, lineHeight: 1.65 }}>
              We understand that gaining weight is not just about eating more, but
              about training smarter and fueling the body correctly—so you gain
              strength without unnecessary fat.
            </p>
          </div>

          <div className="card">
            <div className="cardHeader">
              <span className="badge">Loss Weight</span>
              <Link to="/join?service=loss-weight" className="btn btnPrimary" style={{ padding: '0.65rem 0.9rem' }}>
                Join
              </Link>
            </div>
            <div style={{ height: 12 }} />
            <div className="cardMedia" style={{ height: 240 }}>
              <img src="/assets/Loss-Weight.jpeg" alt="Loss Weight" />
            </div>
            <p className="muted" style={{ marginTop: 14, color: 'var(--text)', fontWeight: 800, lineHeight: 1.6 }}>
              The weight loss program at <strong>FitNest</strong> focuses on sustainable fat reduction
              and overall wellness.
            </p>
            <p className="muted" style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 750, lineHeight: 1.65 }}>
              We combine functional training, high-intensity workouts, and strength to burn calories efficiently
              while preserving lean muscle.
            </p>
          </div>

          <div className="card">
            <div className="cardHeader">
              <span className="badge">Personal Training</span>
              <Link to="/join?service=personal-training" className="btn btnPrimary" style={{ padding: '0.65rem 0.9rem' }}>
                Join
              </Link>
            </div>
            <div style={{ height: 12 }} />
            <div className="cardMedia" style={{ height: 240 }}>
              <img
                src="/assets/Personal-Training.jpeg"
                alt="Personal Training"
              />
            </div>
            <p className="muted" style={{ marginTop: 14, color: 'var(--text)', fontWeight: 800, lineHeight: 1.6 }}>
              One-on-one attention from certified trainers—every workout optimized for safety and progress.
            </p>
            <p className="muted" style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 750, lineHeight: 1.65 }}>
              Expect accountability, form coaching, and programs adjusted as you improve.
            </p>
          </div>

          <div className="card">
            <div className="cardHeader">
              <span className="badge">Strength Training</span>
              <Link to="/join?service=strength-training" className="btn btnPrimary" style={{ padding: '0.65rem 0.9rem' }}>
                Join
              </Link>
            </div>
            <div style={{ height: 12 }} />
            <div className="cardMedia" style={{ height: 240 }}>
              <img
                src="/assets/Strength-Training.jpeg"
                alt="Strength Training"
              />
            </div>
            <p className="muted" style={{ marginTop: 14, color: 'var(--text)', fontWeight: 800, lineHeight: 1.6 }}>
              Strength training builds stability, power, and muscular balance—powered by technique and progression.
            </p>
            <p className="muted" style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 750, lineHeight: 1.65 }}>
              Suitable for beginners and lifters alike, with an emphasis on injury prevention.
            </p>
          </div>

          <div className="card cardSpan2">
            <div className="cardHeader">
              <span className="badge">Diet Plan</span>
              <Link to="/join?service=diet-plan" className="btn btnPrimary" style={{ padding: '0.65rem 0.9rem' }}>
                Join
              </Link>
            </div>
            <div style={{ height: 12 }} />
            <div className="cardMedia" style={{ height: 260 }}>
              <img src="/assets/Diet-Plan.jpeg" alt="Diet Plan" />
            </div>
            <p className="muted" style={{ marginTop: 14, color: 'var(--text)', fontWeight: 800, lineHeight: 1.6 }}>
              Nutrition is the foundation of results. We create customized diet plans
              based on your goals, routine, and needs.
            </p>
            <p className="muted" style={{ marginTop: 10, color: 'var(--muted)', fontWeight: 750, lineHeight: 1.65 }}>
              Expect balanced meals, smart macro choices, and guidance you can sustain.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}