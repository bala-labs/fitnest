import { Link } from 'react-router-dom'
import { MapPin, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <main>
      <section className="hero" aria-label="FitNest hero">
        <div className="heroMedia" aria-hidden="true">
          <div className="heroTrack">
            <div className="heroSlide">
              <img
                src="https://imgs.search.brave.com/e_Gu3qtwZcTCTjVEBbEUWc689s7hz6zRcv7WuEEhWik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy1wZXJm/ZWN0bHktb3JkZXJl/ZC1maXRuZXNzLWl0/ZW1zXzIzLTIxNTAz/MjE4MDguanBnP3Nl/bXQ9YWlzX2l0ZW1z/X2Jvb3N0ZWQmdz03/NDA"
                alt=""
              />
            </div>
            <div className="heroSlide">
              <img
                src="https://imgs.search.brave.com/52lXcNbMgItHO_VWRAWmWSBvTuyRhwiS9D60eZdLoiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/b3dzLW1ldGFsLWR1/bWJiZWxscy1yYWNr/LWd5bS1zcG9ydC1j/bHViLXdlaWdodC10/cmFpbmluZy1lcXVp/cG1lbnRfMTQzOS0x/MS5qcGc_Z2E9R0Ex/LjEuMTU5NzM2OTky/OC4xNzc0NTIwNjU3/JnNlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw"
                alt=""
              />
            </div>
            <div className="heroSlide">
              <img
                src="https://imgs.search.brave.com/2GzZV0gLhgNVV-_JdNdepBS9qjj6aArIx2lISdaLgC0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy1wZXJm/ZWN0bHktb3JkZXJl/ZC1maXRuZXNzLWl0/ZW1zXzIzLTIxNTAz/MjE4MDkuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="heroOverlay" aria-hidden="true" />

        <div className="heroContent">
          <div className="container heroInner">
            <div className="heroBadge">
              <MapPin size={13} style={{ color: 'var(--accent)' }} />
              Anna Nagar, Chennai
            </div>

            <h1 className="heroTitle">
              Welcome to{' '}
              <span className="heroAccent">FitNest</span>
            </h1>
            <p className="heroText">
              Your personal fitness sanctuary where strength, health, and community
              come together. Train smarter, progress consistently, feel at home.
            </p>
            <div className="heroCtas">
              <Link to="/join" className="btn btnPrimary">
                Join Now
              </Link>
              <Link to="/classes" className="btn btnGhost">
                View Classes
              </Link>
            </div>

            <div className="heroStats">
              <div className="heroStat">
                <span className="heroStatNum">500+</span>
                <span className="heroStatLabel">Members</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum">15+</span>
                <span className="heroStatLabel">Programs</span>
              </div>
              <div className="heroStat">
                <span className="heroStatNum" style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
                  5<Star size={16} fill="currentColor" />
                </span>
                <span className="heroStatLabel">Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
