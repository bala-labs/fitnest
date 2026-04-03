import type { FormEvent } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

type JoinFormState = {
  name: string
  email: string
  service: string
  phone: string
  city: string
}

const API_BASE_URL = 'https://fitnest-ovpw.onrender.com'

type JoinErrors = Partial<Record<keyof JoinFormState, string>> & { form?: string }

function validateJoinForm(data: JoinFormState): JoinErrors {
  const trimmed = {
    name: data.name.trim(),
    email: data.email.trim(),
    service: data.service.trim(),
    phone: data.phone.trim(),
    city: data.city.trim(),
  }

  if (!trimmed.name || !trimmed.email || !trimmed.service || !trimmed.phone || !trimmed.city) {
    return { form: 'All Fields are required.' }
  }

  if (/\d/.test(trimmed.name)) return { name: 'Invalid user name.' }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(trimmed.email)) return { email: 'Invalid email address.' }

  if (!/^\d{10}$/.test(trimmed.phone)) return { phone: 'Invalid phone number.' }

  if (/\d/.test(trimmed.city)) return { city: 'Invalid city name.' }

  return {}
}

export default function JoinPage() {
  const [searchParams] = useSearchParams()
  const serviceFromUrl = useMemo(() => searchParams.get('service') || '', [searchParams])

  const [form, setForm] = useState<JoinFormState>({
    name: '',
    email: '',
    service: serviceFromUrl,
    phone: '',
    city: '',
  })

  useEffect(() => {
    setForm((s) => ({ ...s, service: serviceFromUrl }))
  }, [serviceFromUrl])

  const [errors, setErrors] = useState<JoinErrors>({})
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return

    const validation = validateJoinForm(form)
    setErrors({})

    if (validation.form || validation.name || validation.email || validation.phone || validation.city) {
      setErrors(validation)
      return
    }

    try {
      setSubmitting(true)
      const payload = {
        ...Object.fromEntries(
          Object.entries(form).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v]),
        ),
        id: crypto.randomUUID(),
      }

      const res = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        let detail = ''
        try {
          const j = await res.json()
          detail = j?.detail ? String(j.detail) : ''
        } catch {
          // ignore
        }
        throw new Error(detail || 'Failed to submit.')
      }

      setNotificationMessage(`${form.name.trim()}, Your details have been accepted by our team`)
      setNotificationOpen(true)
    } catch (err) {
      setErrors({ form: err instanceof Error ? err.message : 'User data does not updated' })
    } finally {
      setSubmitting(false)
    }
  }

  const onConfirm = () => {
    setNotificationOpen(false)
    setForm({ name: '', email: '', service: serviceFromUrl, phone: '', city: '' })
    setErrors({})
  }

  return (
    <main className="joinHero">
      <div className="joinHeroMedia" aria-hidden="true">
        <img
          src="https://imgs.search.brave.com/a4sritPDGlHlvlzvdywZcN7FbZtQZ3zFHZn-u_yQPS0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDg4MzQw/MzcuanBn"
          alt=""
        />
      </div>
      <div className="joinHeroOverlay" aria-hidden="true" />

      <div className="container">
        <div className="joinGrid">
          <section className="card" style={{ background: 'color-mix(in srgb, var(--card) 80%, transparent)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <h2 className="sectionTitle" style={{ marginBottom: 8 }}>
                  Join FitNest Gym Today
                </h2>
                <p className="muted" style={{ margin: 0, fontWeight: 800, lineHeight: 1.7 }}>
                  Start your fitness journey with us. No contracts. Cancel anytime.
                </p>
              </div>

              <div>
                <div className="muted" style={{ fontWeight: 950, marginBottom: 8 }}>
                  Why Join FitNest?
                </div>
                <ul className="joinList">
                  <li>24/7 Gym Access</li>
                  <li>Free Personal Training Session</li>
                  <li>Unlimited Group Classes</li>
                  <li>Sauna & Locker Room Access</li>
                  <li>Flexible Membership Plans</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="sectionTitle" style={{ marginBottom: 10 }}>
              Join Here
            </h2>

            <form className="form" id="registration" onSubmit={onSubmit}>
              {errors.form ? <div className="errorText">{errors.form}</div> : null}

              <div className="formGrid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input
                    className="input"
                    name="name"
                    value={form.name}
                    type="text"
                    id="name"
                    autoComplete="true"
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  />
                  {errors.name ? <div className="errorText">{errors.name}</div> : null}
                </div>

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    className="input"
                    name="email"
                    value={form.email}
                    type="text"
                    id="email"
                    autoComplete="true"
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  />
                  {errors.email ? <div className="errorText">{errors.email}</div> : null}
                </div>
              </div>

              <div className="field">
                <label htmlFor="services">Service</label>
                <select
                  className="select"
                  name="service"
                  id="services"
                  value={form.service}
                  onChange={(e) => setForm((s) => ({ ...s, service: e.target.value }))}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="gain-weight">Gain Weight</option>
                  <option value="loss-weight">Loss Weight</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="strength-training">Strength Training</option>
                  <option value="diet-plan">Diet Plan</option>
                </select>
                {errors.service ? <div className="errorText">{errors.service}</div> : null}
              </div>

              <div className="formGrid">
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    className="input"
                    name="phone"
                    value={form.phone}
                    type="tel"
                    id="phone"
                    autoComplete="true"
                    onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  />
                  {errors.phone ? <div className="errorText">{errors.phone}</div> : null}
                </div>

                <div className="field">
                  <label htmlFor="city">City</label>
                  <input
                    className="input"
                    name="city"
                    value={form.city}
                    type="text"
                    id="city"
                    autoComplete="true"
                    onChange={(e) => setForm((s) => ({ ...s, city: e.target.value }))}
                  />
                  {errors.city ? <div className="errorText">{errors.city}</div> : null}
                </div>
              </div>

              <div className="modalActions" style={{ justifyContent: 'stretch' }}>
                <button type="submit" className="btn btnPrimary" disabled={submitting} style={{ width: '100%' }}>
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {notificationOpen ? (
        <div
          className="modalBackdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Submission confirmation"
          onClick={() => setNotificationOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="modalTitle">Request received</h3>
            <p className="modalText">{notificationMessage}</p>
            <div className="modalActions">
              <button type="button" className="btn btnPrimary" onClick={onConfirm}>
                Okay
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}

