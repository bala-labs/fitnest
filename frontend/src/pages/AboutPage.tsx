import { Users, Award, Calendar, Star, Target, HeartHandshake, Dna, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { num: '500+', label: 'Active Members', Icon: Users },
    { num: '15+',  label: 'Expert Trainers', Icon: Award },
    { num: '20+',  label: 'Weekly Classes', Icon: Calendar },
    { num: '5★',   label: 'Avg Rating',     Icon: Star },
  ]

  const values = [
    {
      Icon: Target,
      title: 'Goal-Driven',
      desc: 'Every program is structured around your specific goals — whether bulking, cutting, or maintaining.',
    },
    {
      Icon: HeartHandshake,
      title: 'Community First',
      desc: 'We are proud to be a fitness family built on trust, positivity, and collective results.',
    },
    {
      Icon: Dna,
      title: 'Science-Backed',
      desc: 'Our methods are grounded in exercise science and updated with the latest research.',
    },
    {
      Icon: TrendingUp,
      title: 'Always Progressing',
      desc: 'From beginner to advanced — our programs scale with you, ensuring you never plateau.',
    },
  ]

  return (
    <main className="aboutPage">
      <div className="container aboutContainer">

        {/* Hero Header */}
        <div className="aboutHero">
          <div className="aboutHeroText">
            <span className="sectionEyebrow">Our Story</span>
            <h1 className="sectionTitle aboutTitle">
              Where Fitness<br />
              <span className="textAccent">Meets Focus</span>
            </h1>
            <p className="aboutLead">
              FitNest is more than a gym — it's a place where people come together,
              motivate each other, and create lasting change. We're proud to be a
              fitness family built on trust, positivity, and results.
            </p>
          </div>

          <div className="aboutHeroImg">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80&fit=crop"
              alt="FitNest gym interior"
            />
            <div className="aboutHeroImgOverlay" />
            <div className="aboutHeroImgBadge">
              <span className="aboutHeroImgBadgeNum">Est.</span>
              <span className="aboutHeroImgBadgeYear">2020</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="aboutStats">
          {stats.map((s) => {
            const Icon = s.Icon
            return (
              <div className="aboutStatCard" key={s.label}>
                <span className="aboutStatIcon">
                  <Icon size={24} style={{ color: 'var(--accent)' }} />
                </span>
                <span className="aboutStatNum">{s.num}</span>
                <span className="aboutStatLabel">{s.label}</span>
              </div>
            )
          })}
        </div>

        {/* Story Section */}
        <div className="aboutStory">
          <div className="aboutStoryImg">
            <img
              src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=700&q=80&fit=crop&crop=center"
              alt="Trainer coaching a member"
            />
          </div>
          <div className="aboutStoryContent">
            <span className="sectionEyebrow">Who We Are</span>
            <h2 className="aboutStoryTitle">Built on Discipline, Driven by Results</h2>
            <p className="aboutStoryText">
              Welcome to <strong>FitNest</strong>, where fitness meets focus. We believe strength
              is not just built in muscles — it's built in mindset.
            </p>
            <p className="aboutStoryText">
              Whether you're a beginner taking your first step or an experienced athlete
              pushing your limits, <strong>FitNest</strong> is your nest for growth, discipline,
              and transformation.
            </p>
            <p className="aboutStoryText">
              Located in Anna Nagar, Chennai, <strong>FitNest</strong> offers a state-of-the-art
              gym experience with modern equipment, certified personal trainers, and group
              classes for every fitness level. From HIIT to yoga, we support your journey —
              one sweat, one rep, one goal at a time.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="aboutValues">
          <div className="aboutValuesMeta">
            <span className="sectionEyebrow">Our Philosophy</span>
            <h2 className="aboutValuesTitle">What Makes Us Different</h2>
          </div>
          <div className="aboutValuesGrid">
            {values.map((v) => {
              const Icon = v.Icon
              return (
                <div className="aboutValueCard" key={v.title}>
                  <span className="aboutValueIcon">
                    <Icon size={28} style={{ color: 'var(--accent)' }} />
                  </span>
                  <h3 className="aboutValueTitle">{v.title}</h3>
                  <p className="aboutValueDesc">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </main>
  )
}
