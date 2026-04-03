export default function AboutPage() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">About Us</h2>
          <p className="sectionSub">
            FitNest is where training meets focus, and progress feels personal.
          </p>
        </div>

        <div className="card" style={{ overflow: 'hidden' }}>
          <div className="cardMedia" style={{ height: 240 }}>
            <img
              src="https://imgs.search.brave.com/mM44yBPyZRHCMkbPnRrIqYW8gq9XBA4A3NXuaKZ7MiA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzI5LzM1LzYy/LzM2MF9GXzQyOTM1/NjI5Nl9DVlE1TGtD/NlBsNTVrVU5McUxp/c1ZLZ1R3OXZqeWlm/MS5qcGc"
              alt="FitNest"
            />
          </div>

          <div style={{ marginTop: 16 }}>
            <p style={{ marginBottom: 12, lineHeight: 1.8, fontWeight: 800 }}>
              Welcome to <strong>FitNest</strong>, where fitness meets focus.
            </p>
            <p style={{ marginBottom: 12, lineHeight: 1.8, fontWeight: 800 }}>
              At <strong>FitNest</strong>, we believe strength is not just built in
              muscles — it's built in mindset. Whether you’re a beginner taking your
              first step or an experienced athlete pushing your limits, <strong>FitNest</strong>{' '}
              is your nest for growth, discipline, and transformation.
            </p>
            <p style={{ marginBottom: 12, lineHeight: 1.8, fontWeight: 800 }}>
              Located in the heart of the community, <strong>FitNest</strong> offers
              a state-of-the-art gym experience with modern equipment, certified
              personal trainers, and group classes for every fitness level. From HIIT
              to yoga, we support your journey — one sweat, one rep, one goal at a time.
            </p>
            <p style={{ marginBottom: 0, lineHeight: 1.8, fontWeight: 800 }}>
              But <strong>FitNest</strong> is more than a gym. It’s a place where
              people come together, motivate each other, and create lasting change.
              We’re proud to be a fitness family built on trust, positivity, and results.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

