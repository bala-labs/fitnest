export default function ContactPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Contact Us</h2>
          <p className="sectionSub">Visit the gym, or reach out and we will help you start.</p>
        </div>

        <div className="grid2">
          <div className="card">
            <h3 style={{ margin: 0, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>Visit Us</h3>
            <div style={{ height: 12 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div className="muted" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontWeight: 850 }}>
                <i className="fa fa-map-marker-alt" aria-hidden="true" style={{ marginTop: 3 }} />
                <span>FitNest GYM, Anna Nagar, Chennai - 600040</span>
              </div>
              <div className="muted" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontWeight: 850 }}>
                <i className="fa fa-phone" aria-hidden="true" style={{ marginTop: 3 }} />
                <a href="tel:+919876543210" style={{ fontWeight: 900 }}>
                  +91 98765 43210
                </a>
              </div>
              <div className="muted" style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontWeight: 850 }}>
                <i className="fa fa-envelope" aria-hidden="true" style={{ marginTop: 3 }} />
                <a href="mailto:fitnest@gmail.com" style={{ fontWeight: 900 }}>
                  fitnest@gmail.com
                </a>
              </div>
            </div>

            <div style={{ height: 18 }} />

            <h3 style={{ margin: 0, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>Follow Us</h3>
            <div style={{ height: 12 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="muted" style={{ display: 'flex', gap: 12, alignItems: 'center', fontWeight: 850 }}>
                <i className="fab fa-linkedin" aria-hidden="true" />
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="muted" style={{ display: 'flex', gap: 12, alignItems: 'center', fontWeight: 850 }}>
                <i className="fab fa-facebook" aria-hidden="true" />
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </div>
              <div className="muted" style={{ display: 'flex', gap: 12, alignItems: 'center', fontWeight: 850 }}>
                <i className="fab fa-instagram" aria-hidden="true" />
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ overflow: 'hidden' }}>
            <h3 style={{ margin: 0, fontSize: '1.15rem', letterSpacing: '-0.02em' }}>Map Location</h3>
            <div style={{ height: 12 }} />
            <div className="cardMedia" style={{ height: 340 }}>
              <iframe
                title="FitNest map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.583375638282!2d80.19728680035969!3d13.089941945780524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1752672947554!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="hintText" style={{ marginTop: 12 }}>
              Drop by anytime and our team will guide you through your first steps.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

