import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Zap, Dumbbell, Flame, Activity, Award, Utensils, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

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

const serviceConfig: Record<ServiceKey, { label: string; Icon: LucideIcon; color: string; bg: string }> = {
  gain:     { label: 'Gain Weight',      Icon: Dumbbell, color: '#f97316', bg: 'rgba(249,115,22,0.12)' },
  loss:     { label: 'Lose Weight',      Icon: Flame,    color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
  strength: { label: 'Strength',         Icon: Activity, color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)' },
  personal: { label: 'Personal',         Icon: Award,    color: '#0ea5e9', bg: 'rgba(14,165,233,0.12)' },
  diet:     { label: 'Diet Plan',        Icon: Utensils, color: '#22c55e', bg: 'rgba(34,197,94,0.12)' },
}

const classesByService: Record<ServiceKey, ClassItem[]> = {
  gain: [
    {
      name: 'HIIT Blast',
      description: 'Short bursts of high-intensity cardio and bodyweight exercises',
      schedule: 'Mon, Wed, Fri · 6:00 AM & 6:30 PM',
    },
    {
      name: 'Zumba Fit',
      description: 'Dance-based cardio workout with fun Latin rhythms',
      schedule: 'Tue, Thu · 7:00 AM & 5:30 PM',
    },
    {
      name: 'Bootcamp Burn',
      description: 'Circuit-style training with minimal rest between stations',
      schedule: 'Sat · 9:00 AM',
    },
  ],
  loss: [
    {
      name: 'Strength Circuit',
      description: 'Progressive resistance training targeting major muscle groups',
      schedule: 'Mon, Wed, Fri · 7:30 AM & 7:00 PM',
    },
    {
      name: 'Functional Strength',
      description: 'Train movement patterns with compound lifts and loaded carries',
      schedule: 'Tue, Thu · 6:00 AM & 6:30 PM',
    },
  ],
  strength: [
    {
      name: 'Barbell Club',
      description: 'Squats, deadlifts, and bench press with progressive overload',
      schedule: 'Sun · 10:00 AM',
    },
    {
      name: 'Kettlebell Conditioning',
      description: 'Dynamic strength and endurance using kettlebells',
      schedule: 'Tue, Thu · 7:00 AM & 6:00 PM',
    },
    {
      name: 'TRX Power Core',
      description: 'Suspension training targeting strength and balance',
      schedule: 'Mon, Wed · 5:00 PM & 6:00 PM',
    },
  ],
  personal: [
    {
      name: '1-on-1 Personal Training',
      description: 'Work with a coach to build a program for your specific goal',
      schedule: 'By appointment · 7 days/week',
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
      schedule: 'Tue · 8:00 PM (Group Workshop)',
    },
    {
      name: 'Nutrition 1-on-1 Consultation',
      description: 'Private session to design a personalized diet plan',
      schedule: 'By appointment',
    },
  ],
}

const filterTabs: Array<{ key: 'all' | ServiceKey; label: string; Icon: LucideIcon }> = [
  { key: 'all',      label: 'All Classes', Icon: Zap },
  { key: 'gain',     label: 'Gain Weight', Icon: Dumbbell },
  { key: 'loss',     label: 'Lose Weight', Icon: Flame },
  { key: 'strength', label: 'Strength',    Icon: Activity },
  { key: 'personal', label: 'Personal',    Icon: Award },
  { key: 'diet',     label: 'Diet Plan',   Icon: Utensils },
]

export default function ClassesPage() {
  const [selection, setSelection] = useState<'all' | ServiceKey>('all')

  const cards = useMemo(() => {
    const order: ServiceKey[] = ['gain', 'loss', 'strength', 'personal', 'diet']
    const keys = selection === 'all' ? order : [selection]
    return keys.flatMap((key) =>
      classesByService[key].map((c) => ({ serviceKey: key, ...c })),
    )
  }, [selection])

  return (
    <main className="classesPage">
      <div className="container classesContainer">
        {/* Header */}
        <div className="sectionHeader">
          <span className="sectionEyebrow">Schedule &amp; Sessions</span>
          <h1 className="sectionTitle">Our Classes</h1>
          <p className="sectionSub">
            Pick a track and hit your goals with structured sessions led by expert trainers.
          </p>
        </div>

        {/* Pill Filter Tabs */}
        <div className="classesFilterBar" role="tablist" aria-label="Filter classes by service">
          {filterTabs.map((tab) => {
            const TabIcon = tab.Icon
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={selection === tab.key}
                className={`classesFilterTab${selection === tab.key ? ' active' : ''}`}
                onClick={() => setSelection(tab.key)}
                id={`tab-${tab.key}`}
              >
                <span className="classesFilterTabIcon">
                  <TabIcon size={14} />
                </span>
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Cards count */}
        <p className="classesCount">
          Showing <strong>{cards.length}</strong> {cards.length === 1 ? 'class' : 'classes'}
          {selection !== 'all' && ` in ${serviceConfig[selection as ServiceKey]?.label}`}
        </p>

        {/* Class Cards Grid */}
        <div className="classesGrid">
          {cards.map((c) => {
            const cfg = serviceConfig[c.serviceKey]
            const BadgeIcon = cfg.Icon
            return (
              <div
                key={`${c.name}-${c.schedule}`}
                className="classCard"
                style={{ '--card-accent': cfg.color, '--card-bg': cfg.bg } as React.CSSProperties}
              >
                {/* Top accent bar */}
                <div className="classCardAccentBar" />

                <div className="classCardInner">
                  {/* Badge */}
                  <div className="classCardBadge">
                    <span className="classCardBadgeIcon">
                      <BadgeIcon size={13} />
                    </span>
                    <span className="classCardBadgeLabel">{cfg.label}</span>
                  </div>

                  {/* Content */}
                  <div className="classCardBody">
                    <h3 className="classCardName">{c.name}</h3>
                    <p className="classCardDesc">{c.description}</p>
                  </div>

                  {/* Footer */}
                  <div className="classCardFooter">
                    <div className="classCardSchedule">
                      <Clock size={13} style={{ marginTop: 2, flexShrink: 0, color: cfg.color }} aria-hidden="true" />
                      <span>{c.schedule}</span>
                    </div>
                    <Link
                      to={`/join?service=${joinServiceByKey[c.serviceKey]}`}
                      className="btn btnPrimary classCardJoinBtn"
                    >
                      Join
                    </Link>
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
