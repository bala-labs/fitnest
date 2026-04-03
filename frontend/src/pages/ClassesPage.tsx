import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

type ServiceKey = 'gain' | 'loss' | 'strength' | 'personal' | 'diet'

type ClassItem = {
  name: string
  description: string
  schedule: string
}

const joinServiceByKey: Record<ServiceKey, string> = {
  gain: 'gain-weight',
  loss: 'loss-weight',
  strength: 'strength-training',
  personal: 'personal-training',
  diet: 'diet-plan',
}

const classesByService: Record<ServiceKey, ClassItem[]> = {
  gain: [
    {
      name: 'HIIT Blast',
      description:
        'Short bursts of high-intensity cardio and bodyweight exercises',
      schedule: 'Mon, Wed, Fri - 6:00 AM & 6:30 PM',
    },
    {
      name: 'Zumba Fit',
      description: 'Dance-based cardio workout with fun Latin rhythms',
      schedule: 'Tue, Thu - 7:00 AM & 5:30 PM',
    },
    {
      name: 'Bootcamp Burn',
      description: 'Circuit-style training with minimal rest between stations',
      schedule: 'Sat - 9:00 AM',
    },
  ],
  loss: [
    {
      name: 'Strength Circuit',
      description: 'Progressive resistance training targeting major muscle groups',
      schedule: 'Mon, Wed, Fri - 7:30 AM & 7:00 PM',
    },
    {
      name: 'Functional Strength',
      description: 'Train movement patterns with compound lifts and loaded carries',
      schedule: 'Tue, Thu - 6:00 AM & 6:30 PM',
    },
  ],
  strength: [
    {
      name: 'Barbell Club',
      description:
        'Squats, deadlifts, and bench press with progressive overload',
      schedule: 'Sun - 10:00 AM',
    },
    {
      name: 'Kettlebell Conditioning',
      description: 'Dynamic strength and endurance using kettlebells',
      schedule: 'Tue, Thu - 7:00 AM & 6:00 PM',
    },
    {
      name: 'TRX Power Core',
      description: 'Suspension training targeting strength and balance',
      schedule: 'Mon, Wed - 5:00 PM & 6:00 PM',
    },
  ],
  personal: [
    {
      name: '1-on-1 Personal Training',
      description: 'Work with a coach to build a program for your specific goal',
      schedule: 'By appointment, 7 days/week',
    },
    {
      name: 'Partner Personal Training',
      description: 'Train with a friend under the guidance of a trainer',
      schedule: 'By appointment',
    },
  ],
  diet: [
    {
      name: 'Meal Planning Workshop',
      description: 'Group session on structuring meals for fitness goals',
      schedule: 'Tue - 8:00 PM (Group Workshop)',
    },
    {
      name: 'Nutrition 1-on-1 Consultation',
      description: 'Private session to design a personalized diet plan',
      schedule: 'By appointment',
    },
  ],
}

export default function ClassesPage() {
  const [selection, setSelection] = useState<'all' | ServiceKey>('all')

  const cards = useMemo(() => {
    const order: ServiceKey[] = ['gain', 'loss', 'strength', 'personal', 'diet']
    const keys = selection === 'all' ? order : [selection]

    return keys.flatMap((key) =>
      classesByService[key].map((c) => ({
        serviceKey: key,
        ...c,
      })),
    )
  }, [selection])

  return (
    <main className="section">
      <div className="container">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Our Classes</h2>
          <p className="sectionSub">Pick a track and hit your goals with structured sessions.</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <div className="muted" style={{ fontWeight: 900, marginBottom: 6 }}>
                Filter by service
              </div>
            </div>

            <select
              className="select"
              id="list-services"
              value={selection}
              onChange={(e) => {
                setSelection(e.target.value as 'all' | ServiceKey)
              }}
              aria-label="Filter classes"
              style={{ minWidth: 240 }}
            >
              <option value="all">All Services</option>
              <option value="gain">Gain Weight</option>
              <option value="loss">Loss Weight</option>
              <option value="personal">Personal Training</option>
              <option value="strength">Strength Training</option>
              <option value="diet">Diet Plan</option>
            </select>
          </div>
        </div>

        <div className="grid4">
          {cards.map((c) => (
            <div key={`${c.name}-${c.schedule}`} className="card" style={{ padding: 16 }}>
              <div className="cardHeader" style={{ marginBottom: 8 }}>
                <span className="badge">
                  {c.serviceKey === 'gain'
                    ? 'Gain'
                    : c.serviceKey === 'loss'
                      ? 'Loss'
                      : c.serviceKey === 'strength'
                        ? 'Strength'
                        : c.serviceKey === 'personal'
                          ? 'Personal'
                          : 'Diet'}
                </span>
              </div>
              <h3 style={{ margin: '0.2rem 0 0.5rem', letterSpacing: '-0.02em' }}>
                {c.name}
              </h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.6, fontWeight: 800 }}>
                {c.description}
              </p>
              <div style={{ height: 12 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
                <div className="muted" style={{ fontWeight: 900 }}>{c.schedule}</div>
                <Link
                  to={`/join?service=${joinServiceByKey[c.serviceKey]}`}
                  className="btn btnPrimary"
                  style={{ padding: '0.6rem 0.85rem', borderRadius: 12 }}
                >
                  Join
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

