import { Link } from 'react-router-dom'
import { Dumbbell, Flame, Award, Activity, Utensils } from 'lucide-react'

const services = [
  {
    id: 'gain-weight',
    label: 'Gain Weight',
    Icon: Dumbbell,
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80&fit=crop',
    title: 'Gain Weight',
    desc: 'At FitNest, our weight gain program is carefully designed for individuals who want to build lean muscle mass in a healthy and structured manner.',
    sub: 'We understand that gaining weight is not just about eating more, but about training smarter and fueling the body correctly—so you gain strength without unnecessary fat.',
  },
  {
    id: 'loss-weight',
    label: 'Lose Weight',
    Icon: Flame,
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&fit=crop',
    title: 'Lose Weight',
    desc: 'The weight loss program at FitNest focuses on sustainable fat reduction and overall wellness.',
    sub: 'We combine functional training, high-intensity workouts, and strength to burn calories efficiently while preserving lean muscle.',
  },
  {
    id: 'personal-training',
    label: 'Personal Training',
    Icon: Award,
    image:
      'https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?w=800&q=80&fit=crop',
    title: 'Personal Training',
    desc: 'One-on-one attention from certified trainers—every workout optimized for safety and progress.',
    sub: 'Expect accountability, form coaching, and programs adjusted as you improve.',
  },
  {
    id: 'strength-training',
    label: 'Strength Training',
    Icon: Activity,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&fit=crop',
    title: 'Strength Training',
    desc: 'Strength training builds stability, power, and muscular balance—powered by technique and progression.',
    sub: 'Suitable for beginners and lifters alike, with an emphasis on injury prevention.',
  },
  {
    id: 'diet-plan',
    label: 'Diet Plan',
    Icon: Utensils,
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&fit=crop',
    title: 'Diet Plan',
    desc: 'Nutrition is the foundation of results. We create customized diet plans based on your goals, routine, and needs.',
    sub: 'Expect balanced meals, smart macro choices, and guidance you can sustain long-term.',
    wide: true,
  },
]

export default function ServicesPage() {
  return (
    <main className="servicesPage">
      {/* Page Hero Background */}
      <div className="servicesHeroBg" aria-hidden="true">
        <div className="servicesHeroGlow servicesHeroGlow1" />
        <div className="servicesHeroGlow servicesHeroGlow2" />
        <div className="servicesHeroGlow servicesHeroGlow3" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div className="sectionHeader">
          <span className="sectionEyebrow">What We Offer</span>
          <h1 className="sectionTitle">Our Services</h1>
          <p className="sectionSub">
            Choose a path that fits your goals. We keep it structured, supportive,
            and results-driven.
          </p>
        </div>

        <div className="servicesGrid">
          {services.map((svc) => {
            const Icon = svc.Icon
            return (
              <div
                key={svc.id}
                className={`serviceCard${svc.wide ? ' serviceCardWide' : ''}`}
              >
                {/* Background image */}
                <div className="serviceCardImg">
                  <img src={svc.image} alt={svc.title} loading="lazy" />
                </div>

                {/* Gradient overlay */}
                <div className="serviceCardOverlay" />

                {/* Content */}
                <div className="serviceCardBody">
                  <div className="serviceCardTop">
                    <span className="serviceCardBadge">
                      <span className="serviceCardIcon">
                        <Icon size={14} />
                      </span>
                      {svc.label}
                    </span>
                    <Link
                      to={`/join?service=${svc.id}`}
                      className="btn btnPrimary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.88rem' }}
                    >
                      Join
                    </Link>
                  </div>

                  <div className="serviceCardContent">
                    <h2 className="serviceCardTitle">{svc.title}</h2>
                    <p className="serviceCardDesc">{svc.desc}</p>
                    <p className="serviceCardSub">{svc.sub}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}